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

// ─── Custom launcher icon with hover transition ─────────────────────────────

function LauncherIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Message bubble icon"
      className="h-7 w-7 text-white"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.6317 3.36824C17.4751 1.21158 14.55 0 11.5001 0H11.4933C9.67722 0.00105467 7.88724 0.432158 6.26986 1.25808C4.65249 2.08401 3.25371 3.28128 2.18806 4.7518C1.1224 6.22232 0.420163 7.92431 0.138831 9.71844C-0.142502 11.5126 0.00506924 13.3478 0.569469 15.0739C1.13387 16.8 2.09905 18.3679 3.38599 19.6493C4.67292 20.9306 6.24502 21.889 7.97359 22.4458C9.70215 23.0027 11.538 23.1423 13.3309 22.8532C15.1238 22.564 16.8227 21.8544 18.2886 20.7823L20.6828 23.1765C20.8728 23.3654 21.1145 23.494 21.3774 23.546C21.6403 23.5979 21.9126 23.571 22.1603 23.4686C22.4079 23.3662 22.6197 23.1929 22.7691 22.9705C22.9186 22.748 22.9989 22.4863 23 22.2184V11.4999C23 8.44997 21.7884 5.52489 19.6317 3.36824ZM11.4932 19.2403C13.7855 19.2403 15.9306 18.2776 17.2307 16.6921L17.2352 16.6739C17.3001 16.5943 17.3486 16.5028 17.3781 16.4045C17.4075 16.3062 17.4174 16.203 17.4069 16.1008C17.3965 15.9987 17.3661 15.8997 17.3174 15.8093C17.2687 15.7189 17.2027 15.6391 17.1231 15.5742C17.0436 15.5094 16.952 15.4608 16.8537 15.4314C16.7553 15.4019 16.6522 15.3921 16.55 15.4025C16.4479 15.4129 16.3489 15.4433 16.2585 15.492C16.1681 15.5407 16.0883 15.6068 16.0234 15.6864C15.0132 16.9208 13.3121 17.6593 11.4932 17.6593C9.67433 17.6593 7.98456 16.9277 6.97659 15.7C6.91217 15.6185 6.83216 15.5507 6.74123 15.5005C6.6503 15.4503 6.55028 15.4188 6.44702 15.4077C6.34376 15.3966 6.23932 15.4062 6.13981 15.436C6.04031 15.4657 5.94774 15.515 5.8675 15.581C5.78726 15.6469 5.72098 15.7281 5.67251 15.82C5.62404 15.9118 5.59436 16.0124 5.58522 16.1159C5.57607 16.2193 5.58764 16.3236 5.61924 16.4225C5.65085 16.5215 5.70186 16.6131 5.76929 16.6921C7.07172 18.2776 9.20092 19.2403 11.4932 19.2403Z"
        fill="currentColor"
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
  transition={{
    type: "spring",
    stiffness: 320,
    damping: 20,
  }}
  onClick={() => setIsOpen(true)}
  className="
    relative
    flex h-11 w-11
    items-center justify-center
    rounded-full
    bg-[#4488FF]
    text-white
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#4488FF]
    focus-visible:ring-offset-2
  "
  style={{
    boxShadow:
      "0 8px 22px rgba(68,136,255,0.38), 0 3px 8px rgba(0,0,0,0.12)",
  }}
  aria-label="Open chat dialog"
>
  <LauncherIcon />

  {/* {hasUnread && (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-white bg-red-500 dark:border-[#0a0a0a]"
    />
  )} */}
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