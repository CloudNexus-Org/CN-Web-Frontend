# 🌐 Cloud Nexus — Frontend Application Documentation (`CN-Web-Frontend`)

Modern marketing web platform and administrative control panel built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 📋 Table of Contents

- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Environment Configuration (`.env.local`)](#-environment-configuration-envlocal)
- [Step-by-Step Execution Guide](#-step-by-step-execution-guide)
  - [1. Install Dependencies](#1-install-dependencies)
  - [2. Run Development Server](#2-run-development-server)
  - [3. Build & Run Production Server](#3-build--run-production-server)
- [Project Architecture & Routing](#-project-architecture--routing)
  - [Public Marketing Website (`(main)`)](#public-marketing-website-main)
  - [Administrative Dashboard (`(admin)`)](#administrative-dashboard-admin)
- [API Client & Authentication](#-api-client--authentication)
- [Available NPM Scripts](#-available-npm-scripts)
- [Directory Layout](#-directory-layout)

---

## ✨ Features

- **Next.js App Router**: Utilizes React Server Components, client components, and optimized layout routing.
- **Dual Section Architecture**:
  - **Public Marketing Portal (`(main)`)**: Interactive homepage, services (20 categories, 120+ pages), industry solutions, company overview, resources, public blog viewer, contact form, and career portal.
  - **Admin Control Panel (`(admin)`)**: Protected dashboard for managing blog posts, uploaded images, candidate applications, and career postings.
- **Styling & Motion**: Powered by Tailwind CSS v4, Framer Motion animations, Lucide icons, and shadcn/ui components.
- **Centralized API Client**: Pre-configured Axios instance with automatic JWT authentication interceptors.

---

## 📌 Prerequisites

Before running the frontend, ensure you have:
- **Node.js**: v20.0.0 or higher
- **npm**: v9.0.0 or higher
- **Backend API**: Running instance of `CN-Web-Backend` (Default: `http://localhost:4000`)

---

## 🔑 Environment Configuration (`.env.local`)

In the `CN-Web-Frontend` directory, create or edit `.env.local`:

```env
# URL pointing to the Node.js Express Backend API
NEXT_PUBLIC_API_URL=http://localhost:4000

# URL pointing to the Python FastAPI Chatbot microservice (Optional)
NEXT_PUBLIC_CHATBOT_API_URL=http://localhost:8000
```

---

## 🚀 Step-by-Step Execution Guide

### 1. Install Dependencies
Navigate into `CN-Web-Frontend` and install node packages:

```powershell
cd CN-Web-Frontend
npm install
```

---

### 2. Run Development Server
Launch the Next.js development server with Turbopack fast refresh:

```powershell
npm run dev
```

- **Frontend URL**: `http://localhost:3000`
- Open your browser and navigate to `http://localhost:3000` to view the website.

---

### 3. Build & Run Production Server
To generate an optimized production build and launch the production web server:

```powershell
# Step 1: Create production build
npm run build

# Step 2: Start Next.js production server
npm run start
```

Or run both together:
```powershell
npm run start:prod
```

---

## 🏗️ Project Architecture & Routing

### Public Marketing Website (`(main)`)
Defined under [`app/(main)`](file:///c:/Users/Ritika%20Pankar/Desktop/Cloud-Nexus-Web/CN-Web-Frontend/app/(main)):
- `page.tsx`: Landing Page / Homepage.
- `company/`: About Us, Leadership, Careers pages.
- `services/`: 20 service categories (Cloud Computing, AI/ML, DevOps, Cybersecurity, etc.).
- `industry/`: Industry-specific solutions (Healthcare, Finance, Retail, Logistics, etc.).
- `resources/`: Blogs, case studies, whitepapers.
- `our-work/`: Portfolio & client showcase.

### Administrative Dashboard (`(admin)`)
Defined under [`app/(admin)`](file:///c:/Users/Ritika%20Pankar/Desktop/Cloud-Nexus-Web/CN-Web-Frontend/app/(admin)):
- `/admin/login`: Step-1 Admin credentials form.
- `/admin/verify-2fa`: Step-2 6-digit email OTP verification form.
- `/admin`: Dashboard homepage with analytics overview.
- `/admin/blogs`: Blog management table (Create, Edit, Delete, Upload cover images).
- `/admin/job-postings`: Career openings CRUD operations.
- `/admin/applications`: Applicant review system (Approve pending applications, view resumes).
- `/admin/contacts`: Manage incoming customer inquiries.

---

## 🔌 API Client & Authentication

The frontend communicates with the backend API via Axios configured in [`lib/api/axios.ts`](file:///c:/Users/Ritika%20Pankar/Desktop/Cloud-Nexus-Web/CN-Web-Frontend/lib/api/axios.ts):

- **Request Interceptor**: Automatically attaches the Authorization header:
  ```ts
  Authorization: Bearer <admin_token | token>
  ```
- **Response Interceptor**: Intercepts `401 Unauthorized` responses for session handling.
- **Endpoints Registry**: Standardized in [`lib/api/endpoints.ts`](file:///c:/Users/Ritika%20Pankar/Desktop/Cloud-Nexus-Web/CN-Web-Frontend/lib/api/endpoints.ts).

---

## 📜 Available NPM Scripts

| Script | Command | Purpose |
|---|---|---|
| `dev` | `next dev --turbopack` | Start Next.js dev server with Turbopack |
| `build` | `next build` | Compile optimized production build |
| `start` | `next start` | Launch Next.js production server |
| `start:prod` | `next build && next start` | Build and start in one command |
| `typecheck` | `tsc --noEmit` | Check TypeScript types without compiling |
| `lint` | `eslint` | Run ESLint check |
| `format` | `prettier --write "**/*.{ts,tsx}"` | Format TS/TSX files with Prettier |
| `test` | `jest` | Run Jest unit tests |

---

## 📂 Directory Layout

```
CN-Web-Frontend/
├── app/
│   ├── layout.tsx            # Root layout (Fonts, Providers, Smooth Scroll)
│   ├── globals.css           # Global styles, Tailwind directives, theme variables
│   ├── (main)/               # Main marketing pages (Navbar + Footer)
│   └── (admin)/              # Admin Dashboard pages (Admin Sidebar)
├── components/
│   ├── navbar/               # Header navigation bar
│   ├── footer/               # Site footer
│   ├── sections/             # Page section layouts
│   ├── chatbot/              # AI Chatbot widget
│   └── ui/                   # Reusable shadcn UI components
├── lib/
│   ├── api/                  # Axios instance, endpoints, API service hooks
│   └── admin-auth-context.tsx# Admin authentication provider
├── public/                   # Static images and assets
├── next.config.mjs           # Next.js configuration
├── package.json
└── tsconfig.json
```
