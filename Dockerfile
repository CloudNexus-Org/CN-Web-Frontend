# Next.js app (see package.json: "build" -> next build, production via output: "standalone")
#
# Same variables as local .env / .env.local (Next loads those in dev; Docker needs ARG + runtime ENV):
#   NEXT_PUBLIC_API_URL — API + /api rewrites (next.config.mjs, lib/api/axios.ts, blog/admin)
#
# Build:
#   docker build --build-arg NEXT_PUBLIC_API_URL=https://api.example.com -t cn-web .
#
# Run:
#   docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=https://api.example.com cn-web

# ---- Dependencies (matches package-lock.json + package.json) ----
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts
RUN npm rebuild sharp

# ---- Builder ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ---- Runner ----
FROM node:20-alpine AS runner
WORKDIR /app

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
