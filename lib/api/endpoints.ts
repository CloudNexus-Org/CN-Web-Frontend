export const ENDPOINTS = {
  AUTH: {
    ADMIN_LOGIN: "/auth/admin/login",
    ADMIN_ME: "/auth/admin/me",
  },

  CONTACTS: "/contacts",

  BLOGS: {
    LIST: "/blogs",
    BY_SLUG: (slug: string) => `/blogs/${slug}`,
  },

  JOB_LISTINGS: {
    LIST: "/job-listings",
    BY_SLUG: (slug: string) => `/job-listings/${slug}`,
  },

  APPLICATIONS: "/applications",

  ADMIN: {
    BLOGS: "/admin/blogs",
    BLOG_BY_ID: (id: string) => `/admin/blogs/${id}`,
    UPLOAD_BLOG_IMAGE: "/admin/uploads/blog-image",
    APPLICATIONS: "/admin/applications",
    APPLICATION_APPROVE: (id: string) => `/admin/applications/${id}/approve`,
    APPLICATION_DELETE: (id: string) => `/admin/applications/${id}`,
    CONTACTS: "/admin/contacts",
    JOB_POSTINGS: "/admin/job-postings",
    JOB_POSTING_BY_ID: (id: string) => `/admin/job-postings/${id}`,
  },
} as const;
