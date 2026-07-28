"use client"

/**
 * ChatbotWidget
 *
 * A floating chat widget that sits in the bottom-right corner of every page.
 * – Animated open/close toggle (framer-motion)
 * – Calls the Cloud Nexus chatbot service (POST /chat, streamed via /chat/stream).
 * – Keyword suggestion chips for quick-start prompts
 * – Streaming "typing" indicator while awaiting the bot response
 * – Full dark-mode support via Tailwind dark: variants
 * – Accessible: keyboard-navigable, aria-labels, focus management
 *
 * NOTE: This file is a UI-only redesign. All backend integration, streaming
 * logic, state management, and TypeScript interfaces are unchanged from the
 * previous version.
 */

import { useEffect, useRef, useState, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import {
  X,
  Send,
  Bot,
  User,
  RotateCcw,
  ChevronDown,
  ChevronRight,
  Sparkles,
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

type Role = "user" | "bot"

interface Message {
  id: string
  role: Role
  content: string
  timestamp: Date
  /** WhatsApp-style paragraph chunks (set when response completes) */
  paragraphs?: string[]
  sourceLabels?: string[]
  followUp?: string | null
  isStreaming?: boolean
}

interface ChatApiResponse {
  response: string
  query_type: string
  retrieved_docs: unknown[]
  sources: string
  source_labels?: string[]
  follow_up?: string | null
}

// ─── Constants ────────────────────────────────────────────────────────────────

const CHATBOT_API_BASE =
  process.env.NEXT_PUBLIC_CHATBOT_API_URL ?? "http://localhost:8000"

const LOG_PREFIX = "[ChatbotWidget]"

function chatLog(
  level: "info" | "warn" | "error",
  message: string,
  details?: Record<string, unknown>
) {
  const payload = details ? [message, details] : [message]
  if (level === "error") {
    console.error(LOG_PREFIX, ...payload)
  } else if (level === "warn") {
    console.warn(LOG_PREFIX, ...payload)
  } else {
    console.info(LOG_PREFIX, ...payload)
  }
}

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "bot",
  content:
    "Hi! I'm the Cloud Nexus assistant. Ask me about our company, services, careers, or tech stack.",
  paragraphs: [
    "Hi! I'm the Cloud Nexus assistant.",
    "Ask me about our company, services, careers, or tech stack.",
  ],
  timestamp: new Date(),
}

const SUGGESTION_CHIPS = [
  "About Cloud Nexus",
  "Our services",
  "Are you hiring?",
  "Tech stack",
  "Internship openings",
  "Pricing",
  "Contact us",
  "Office hours",
]

const INPUT_PLACEHOLDERS = [
  "Type a message…",
  "Ask about our services…",
  "Curious about careers?…",
  "Ask anything…",
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function uid(): string {
  return Math.random().toString(36).slice(2, 10)
}

function formatTime(d: Date): string {
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

function splitParagraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
}

/** Render **bold** markdown inline */
function FormattedText({
  text,
  className = "",
}: {
  text: string
  className?: string
}) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <span className={className}>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  )
}

function SourcesCollapsible({ labels }: { labels: string[] }) {
  const [open, setOpen] = useState(false)
  if (!labels.length) return null

  return (
    <div className="mt-1.5 max-w-[85%] self-start">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-1 text-[11px] font-medium text-slate-400 transition-colors hover:text-blue-500 dark:text-white/40"
        aria-expanded={open}
      >
        {open ? (
          <ChevronDown className="h-3 w-3" strokeWidth={2} />
        ) : (
          <ChevronRight className="h-3 w-3" strokeWidth={2} />
        )}
        Sources ({labels.length})
      </button>
      {open && (
        <ul className="mt-1 ml-4 list-disc space-y-0.5 text-[11px] text-slate-500 dark:text-white/45">
          {labels.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

// ─── Custom launcher icon (Intercom-style smiling message bubble) ────────────

function LauncherIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Message bubble */}
      <path
        fill="#FFFFFF"
        d="
          M8 5
          H24
          C25.7 5 27 6.3 27 8
          V20
          C27 21.7 25.7 23 24 23
          H16
          L12 27
          L12.8 23
          H8
          C6.3 23 5 21.7 5 20
          V8
          C5 6.3 6.3 5 8 5
          Z
        "
      />

      {/* Smile */}
      <path
        d="M11.5 16.3C13 17.8 19 17.8 20.5 16.3"
        stroke="#222222"
        strokeWidth="1.7"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

function AiAvatarIcon({ size = 16 }: { size?: number }) {
  return (
    <Bot
      className="text-white"
      style={{ width: size, height: size }}
      strokeWidth={1.75}
    />
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div className="flex max-w-full items-start">
      <div className="rounded-2xl rounded-bl-md bg-slate-100 px-4 py-3 dark:bg-[#1a1a1a]">
        <div className="flex items-center gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400/70 dark:bg-white/40"
              style={{
                animationDelay: `${i * 150}ms`,
                animationDuration: "900ms",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface MessageBubbleProps {
  message: Message
  showAvatar?: boolean
  showTimestamp?: boolean
}

function MessageBubble({
  message,
  showAvatar = false,
  showTimestamp = true,
}: MessageBubbleProps) {
  const isUser = message.role === "user"

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={`flex items-end gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"} max-w-full ${isUser ? "self-end" : "self-start"}`}
    >
      {/* {showAvatar ? (
        <div
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center shadow-sm ${
            isUser
              ? "bg-slate-700 dark:bg-white/20"
              : "bg-gradient-to-br from-blue-500 to-indigo-600"
          }`}
        >
          {isUser ? (
            <User className="w-3.5 h-3.5 text-white" strokeWidth={1.75} />
          ) : (
            <AiAvatarIcon size={14} />
          )}
        </div>
      ) : (
        <div className="w-7 flex-shrink-0" aria-hidden />
      )} */}

      <div
        className={`flex flex-col gap-1 ${
          isUser ? "items-end" : "items-start"
        } w-full`}
      >
        <div
          className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13.5px] leading-relaxed ${
            isUser
              ? "rounded-br-md bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-sm shadow-blue-500/20"
              : "rounded-bl-md bg-slate-100 text-slate-700 dark:bg-[#1a1a1a] dark:text-white/80"
          } ${message.isStreaming ? "opacity-95" : ""}`}
        >
          <FormattedText
            text={message.content}
            className={isUser ? "text-white" : ""}
          />
        </div>
        {showTimestamp && (
          <span
            className={`text-[10px] text-slate-400 dark:text-white/25 ${isUser ? "text-right" : "text-left"} px-1`}
          >
            {formatTime(message.timestamp)}
          </span>
        )}
      </div>
    </motion.div>
  )
}

function BotTurn({
  message,
  onFollowUp,
}: {
  message: Message
  onFollowUp: (text: string) => void
}) {
  const chunks =
    message.paragraphs && message.paragraphs.length > 0
      ? message.paragraphs
      : [message.content]

  return (
    <div className="flex w-full flex-col gap-3">
      {chunks.map((chunk, index) => (
        <MessageBubble
          key={`${message.id}-${index}`}
          message={{
            ...message,
            content: chunk,
            isStreaming: message.isStreaming && index === chunks.length - 1,
          }}
          showAvatar={index === 0}
          showTimestamp={
            index === chunks.length - 1 &&
            !message.sourceLabels?.length &&
            !message.followUp
          }
        />
      ))}
      {message.sourceLabels &&
        message.sourceLabels.length > 0 &&
        !message.isStreaming && (
          <SourcesCollapsible labels={message.sourceLabels} />
        )}
      {message.followUp && !message.isStreaming && (
        <motion.button
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={() => onFollowUp(message.followUp!)}
          className="ml-9 max-w-[85%] self-start rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-left text-[11.5px] font-medium text-blue-600 transition-colors hover:bg-blue-100 dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300 dark:hover:bg-blue-400/20"
        >
          {message.followUp}
        </motion.button>
      )}
    </div>
  )
}

function WelcomeScreen({
  onSuggestionClick,
  disabled,
}: {
  onSuggestionClick: (text: string) => void
  disabled: boolean
}) {
  return (
    <div className="flex h-full flex-col px-5 pt-6 pb-2">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-start"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-2xl shadow-md shadow-blue-500/20">
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </div>
        <h2 className="text-[19px] leading-snug font-semibold text-slate-800 dark:text-white/90">
          Hello!
        </h2>
        <p className="mb-1.5 text-[19px] leading-snug font-semibold text-slate-800 dark:text-white/90">
          I&apos;m Cloud Nexus AI.
        </p>
        <p className="text-[13.5px] leading-relaxed text-slate-500 dark:text-white/45">
          How can I help you today?
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.08 }}
        className="mt-6 grid grid-cols-2 gap-2"
      >
        {SUGGESTION_CHIPS.map((chip, i) => (
          <motion.button
            key={chip}
            type="button"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 + i * 0.03 }}
            whileHover={{ y: -2, borderColor: "rgba(59,130,246,0.4)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSuggestionClick(chip)}
            disabled={disabled}
            className="rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-left text-[12.5px] leading-snug font-medium text-slate-600 shadow-sm transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-[#161616] dark:text-white/70 dark:hover:bg-white/[0.06]"
          >
            {chip}
          </motion.button>
        ))}
      </motion.div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isStreaming, setIsStreaming] = useState(false)
  const [showScrollBtn, setShowScrollBtn] = useState(false)
  const [hasUnread, setHasUnread] = useState(false)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [placeholderIndex, setPlaceholderIndex] = useState(0)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // ── Auto-scroll to latest message ──
  const scrollToBottom = useCallback((smooth = true) => {
    messagesEndRef.current?.scrollIntoView({
      behavior: smooth ? "smooth" : "instant",
      block: "end",
    })
  }, [])

  useEffect(() => {
    if (isOpen) {
      // Small delay so the animation settles before scrolling
      setTimeout(() => scrollToBottom(false), 50)
    }
  }, [isOpen, scrollToBottom])

  useEffect(() => {
    scrollToBottom()
    if (!isOpen && messages[messages.length - 1]?.role === "bot") {
      setHasUnread(true)
    }
  }, [messages, isOpen, scrollToBottom])

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = ""
      return
    }

    const previous = document.body.style.overflow

    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previous
    }
  }, [isOpen])

  // ── Scroll-to-bottom button visibility ──
  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current
    if (!el) return
    const distFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight
    setShowScrollBtn(distFromBottom > 80)
  }, [])

  // ── Focus input when chat opens ──
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false)
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [isOpen])

  // ── Cycle placeholder text when input is empty and idle ──
  useEffect(() => {
    if (input || isInputFocused) return
    const t = setInterval(() => {
      setPlaceholderIndex((i) => (i + 1) % INPUT_PLACEHOLDERS.length)
    }, 3200)
    return () => clearInterval(t)
  }, [input, isInputFocused])

  // ── Send message ──────────────────────────────────────────────────────────
  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || isLoading) return

      const userMsg: Message = {
        id: uid(),
        role: "user",
        content: trimmed,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMsg])
      setInput("")
      setIsLoading(true)
      setIsStreaming(false)

      const streamEndpoint = `${CHATBOT_API_BASE}/chat/stream`
      const fallbackEndpoint = `${CHATBOT_API_BASE}/chat`
      const startedAt = performance.now()

      chatLog("info", "Sending chat request", {
        endpoint: streamEndpoint,
        query: trimmed,
        queryLength: trimmed.length,
      })

      const appendBotMessage = (content: string) => {
        const botMsg: Message = {
          id: uid(),
          role: "bot",
          content,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMsg])
      }

      const finalizeBotTurn = (
        msgId: string,
        response: string,
        sourceLabels: string[],
        followUp: string | null | undefined
      ) => {
        const paragraphs = splitParagraphs(response)
        setMessages((prev) =>
          prev.map((m) =>
            m.id === msgId
              ? {
                  ...m,
                  content: response,
                  paragraphs: paragraphs.length > 0 ? paragraphs : [response],
                  sourceLabels,
                  followUp: followUp ?? null,
                  isStreaming: false,
                }
              : m
          )
        )
      }

      const consumeStream = async (): Promise<boolean> => {
        const res = await fetch(streamEndpoint, {
          method: "POST",
          headers: {
            accept: "text/event-stream",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: trimmed }),
        })

        if (!res.ok || !res.body) {
          return false
        }

        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let buffer = ""
        let streamedContent = ""
        let streamMsgId: string | null = null
        let sourceLabels: string[] = []
        let followUp: string | null = null
        let finalResponse = ""

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          buffer += decoder.decode(value, { stream: true })
          const parts = buffer.split("\n\n")
          buffer = parts.pop() ?? ""

          for (const part of parts) {
            const line = part.trim()
            if (!line.startsWith("data: ")) continue

            let payload: {
              type?: string
              content?: string
              response?: string
              source_labels?: string[]
              follow_up?: string | null
            }
            try {
              payload = JSON.parse(line.slice(6))
            } catch {
              continue
            }

            if (payload.type === "token" && payload.content) {
              streamedContent += payload.content
              setIsStreaming(true)
              if (!streamMsgId) {
                streamMsgId = uid()
                const initial: Message = {
                  id: streamMsgId,
                  role: "bot",
                  content: streamedContent,
                  timestamp: new Date(),
                  isStreaming: true,
                }
                setMessages((prev) => [...prev, initial])
              } else {
                const content = streamedContent
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === streamMsgId
                      ? { ...m, content, isStreaming: true }
                      : m
                  )
                )
              }
            } else if (payload.type === "done") {
              finalResponse = payload.response?.trim() || streamedContent
              sourceLabels = payload.source_labels ?? []
              followUp = payload.follow_up ?? null
            }
          }
        }

        if (!streamedContent && !finalResponse) return false

        const resolved = finalResponse || streamedContent
        if (streamMsgId) {
          finalizeBotTurn(streamMsgId, resolved, sourceLabels, followUp)
        } else {
          appendBotMessage(resolved)
        }

        chatLog("info", "Chat stream completed", {
          endpoint: streamEndpoint,
          durationMs: Math.round(performance.now() - startedAt),
          responseLength: resolved.length,
          sourceCount: sourceLabels.length,
          hasFollowUp: Boolean(followUp),
        })
        return true
      }

      try {
        const streamed = await consumeStream()
        if (streamed) return

        chatLog("warn", "Stream unavailable, falling back to /chat", {
          streamEndpoint,
          fallbackEndpoint,
        })

        const res = await fetch(fallbackEndpoint, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: trimmed }),
        })

        const durationMs = Math.round(performance.now() - startedAt)

        if (!res.ok) {
          const errorBody = await res.text().catch(() => "")
          chatLog("error", "Chat request failed", {
            endpoint: fallbackEndpoint,
            status: res.status,
            statusText: res.statusText,
            durationMs,
            errorBody: errorBody.slice(0, 500),
          })
          throw new Error(`Server error ${res.status}`)
        }

        const data: ChatApiResponse = await res.json()

        chatLog("info", "Chat response received", {
          endpoint: fallbackEndpoint,
          status: res.status,
          durationMs,
          query_type: data.query_type,
          responseLength: data.response?.length ?? 0,
          retrievedDocsCount: data.retrieved_docs?.length ?? 0,
          hasSources: Boolean(data.sources?.trim()),
        })

        const labels = data.source_labels ?? []
        const followUp = data.follow_up ?? null
        const paragraphs = splitParagraphs(data.response)

        setMessages((prev) => [
          ...prev,
          {
            id: uid(),
            role: "bot",
            content: data.response,
            paragraphs: paragraphs.length > 0 ? paragraphs : [data.response],
            sourceLabels: labels,
            followUp,
            timestamp: new Date(),
          },
        ])
      } catch (err) {
        chatLog("error", "Chat request error", {
          endpoint: streamEndpoint,
          durationMs: Math.round(performance.now() - startedAt),
          error: err instanceof Error ? err.message : String(err),
        })
        appendBotMessage(
          "Oops, something went wrong on my end. Please try again in a moment."
        )
      } finally {
        setIsLoading(false)
        setIsStreaming(false)
        setTimeout(() => inputRef.current?.focus(), 50)
      }
    },
    [isLoading]
  )

  // ── Keyboard handler for textarea ─────────────────────────────────────────
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        sendMessage(input)
      }
    },
    [input, sendMessage]
  )

  // ── Reset conversation ────────────────────────────────────────────────────
  const resetChat = useCallback(() => {
    chatLog("info", "Conversation reset")
    setMessages([WELCOME_MESSAGE])
    setInput("")
    setTimeout(() => inputRef.current?.focus(), 50)
  }, [])

  const isEmptyConversation = messages.length === 1

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Scoped styles: precise responsive sizing + thin custom scrollbar.
          Kept in a plain <style> tag so no extra build-time dependency is required. */}
      <style>{`
        .cn-window {
          width: 420px;
          height: 650px;
        }
        @media (max-width: 1024px) and (min-width: 641px) {
          .cn-window { width: 390px; }
        }
        @media (max-width: 640px) {
          .cn-window {
            width: calc(100vw - 20px);
            height: calc(100vh - 100px);
          }
        }
       .cn-scroll {
  overflow-y: auto;
  overflow-x: hidden;

  overscroll-behavior: contain;
  overscroll-behavior-y: contain;

  -webkit-overflow-scrolling: touch;

  touch-action: pan-y;

  scrollbar-width: thin;
  scrollbar-color: #C5CBD5 transparent;
}
        .cn-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .cn-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .cn-scroll::-webkit-scrollbar-thumb {
          background: #C5CBD5;
          border-radius: 999px;
        }
        .cn-scroll::-webkit-scrollbar-thumb:hover {
          background: #9CA3AF;
        }
      `}</style>

      {/* ── Floating Toggle Button ── */}
      <div className="fixed right-7 bottom-4 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              key="fab"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
              onClick={() => setIsOpen(true)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
              style={{
                backgroundColor: "#4EB3E8",
                boxShadow:
                  "0 10px 30px -8px rgba(60,150,200,0.55), 0 2px 8px rgba(0,0,0,0.08)",
              }}
              aria-label="Open chat assistant"
            >
              <span className="flex items-center justify-center">
                <LauncherIcon />
              </span>
              {/* Unread indicator */}
              {hasUnread && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-0.5 right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-red-500 dark:border-[#0a0a0a]"
                />
              )}
            </motion.button>
          )}
        </AnimatePresence>

        {/* ── Chat Window ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="chat-window"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="cn-window absolute right-0 bottom-[0px] flex flex-col overflow-hidden rounded-[28px] border border-[#ECECEC] bg-white dark:border-white/[0.08] dark:bg-[#0f0f0f]"
              style={{
                boxShadow:
                  "0 30px 60px -12px rgba(15,23,42,0.22), 0 8px 24px -6px rgba(15,23,42,0.12)",
              }}
              role="dialog"
              aria-label="Chat assistant"
              aria-modal="false"
            >
              {/* ── Header ── */}
              <div className="flex flex-shrink-0 items-center gap-3 border-b border-black/[0.05] bg-gradient-to-br from-[#EEF7FF] to-white px-5 py-4 dark:border-white/[0.06] dark:from-[#141414] dark:to-[#0f0f0f]">
                {/* <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm shadow-blue-500/20">
                  <Sparkles className="w-4.5 h-4.5 text-white" strokeWidth={1.75} />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white dark:border-[#141414]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14.5px] font-semibold text-slate-800 dark:text-white/90 leading-tight">
                    Cloud Nexus AI
                  </p>
                  <p className="text-[11.5px] text-slate-500 dark:text-white/45 mt-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online · Always here to help
                  </p>
                </div> */}
                <div className="flex flex-1 items-center">
                  {/* Light Theme Logo */}
                  <Image
                    src="/asset/cn-logo.png"
                    alt="Cloud Nexus"
                    width={170}
                    height={40}
                    priority
                    className="block object-contain dark:hidden"
                  />

                  {/* Dark Theme Logo */}
                  <Image
                    src="/assets/admin-logo.png"
                    alt="Cloud Nexus"
                    width={170}
                    height={40}
                    priority
                    className="hidden object-contain dark:block"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={resetChat}
                    className="rounded-full p-2 text-slate-400 transition-colors hover:bg-black/[0.04] hover:text-slate-700 dark:text-white/30 dark:hover:bg-white/[0.06] dark:hover:text-white/70"
                    aria-label="Reset conversation"
                    title="Start new conversation"
                  >
                    <RotateCcw className="h-4 w-4" strokeWidth={1.75} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => setIsOpen(false)}
                    className="rounded-full p-2 text-slate-400 transition-colors hover:bg-black/[0.04] hover:text-slate-700 dark:text-white/30 dark:hover:bg-white/[0.06] dark:hover:text-white/70"
                    aria-label="Close chat"
                  >
                    <X className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </motion.button>
                </div>
              </div>

              {/* ── Body: welcome screen OR message list ── */}
              {isEmptyConversation ? (
                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  onWheel={(e) => e.stopPropagation()}
                  className="cn-scroll min-h-0 flex-1 overflow-y-auto"
                >
                  <WelcomeScreen
                    onSuggestionClick={sendMessage}
                    disabled={isLoading}
                  />
                  <div ref={messagesEndRef} />
                </div>
              ) : (
                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  onWheel={(e) => e.stopPropagation()}
                  className="cn-scroll flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-5 py-5"
                >
                  {messages.map((msg) =>
                    msg.role === "bot" ? (
                      <BotTurn
                        key={msg.id}
                        message={msg}
                        onFollowUp={sendMessage}
                      />
                    ) : (
                      <MessageBubble key={msg.id} message={msg} />
                    )
                  )}
                  {isLoading && !isStreaming && <TypingIndicator />}
                  <div ref={messagesEndRef} />
                </div>
              )}

              {/* ── Scroll-to-bottom button ── */}
              <AnimatePresence>
                {showScrollBtn && (
                  <motion.button
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    whileHover={{ scale: 1.08 }}
                    onClick={() => scrollToBottom()}
                    className="absolute right-4 bottom-[128px] flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] bg-white text-slate-400 shadow-md transition-colors hover:text-blue-500 dark:border-white/[0.1] dark:bg-[#1a1a1a] dark:text-white/40"
                    aria-label="Scroll to latest message"
                  >
                    <ChevronDown className="h-4 w-4" strokeWidth={2} />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* ── Suggestion Chips (shown once the conversation has started, as quick pills) ── */}
              {!isEmptyConversation && messages.length <= 2 && (
                <div className="flex flex-shrink-0 flex-wrap gap-1.5 px-4 pb-2">
                  {SUGGESTION_CHIPS.slice(0, 4).map((chip) => (
                    <motion.button
                      key={chip}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => sendMessage(chip)}
                      disabled={isLoading}
                      className="rounded-full border border-blue-200 bg-blue-50/70 px-3 py-1.5 text-[11.5px] font-medium text-blue-600 transition-colors hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300 dark:hover:bg-blue-400/20"
                    >
                      {chip}
                    </motion.button>
                  ))}
                </div>
              )}

              {/* ── Input Row ── */}
              <div className="flex flex-shrink-0 items-end gap-2 border-t border-black/[0.05] bg-white px-4 py-4 dark:border-white/[0.06] dark:bg-[#111]">
                <div className="relative flex-1">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                    disabled={isLoading}
                    placeholder={INPUT_PLACEHOLDERS[placeholderIndex]}
                    rows={1}
                    className="max-h-[120px] w-full resize-none rounded-2xl border border-transparent bg-slate-100 py-3 pr-4 pl-4 text-[13.5px] leading-relaxed text-slate-800 transition-colors placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:outline-none disabled:opacity-50 dark:bg-[#1a1a1a] dark:text-white/80 dark:placeholder:text-white/30 dark:focus:border-blue-400/40 dark:focus:bg-[#1a1a1a] dark:focus:ring-blue-400/10"
                    style={{
                      // Auto-expand up to ~4 lines
                      height: "auto",
                      minHeight: "44px",
                    }}
                    onInput={(e) => {
                      const el = e.currentTarget
                      el.style.height = "auto"
                      el.style.height = `${Math.min(el.scrollHeight, 120)}px`
                    }}
                    aria-label="Chat message input"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isLoading}
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/25 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
                  aria-label="Send message"
                >
                  <Send className="h-4.5 w-4.5" strokeWidth={1.75} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
