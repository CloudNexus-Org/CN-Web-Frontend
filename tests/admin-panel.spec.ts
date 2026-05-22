import { test, expect, type Page, type Route } from "@playwright/test";

const ADMIN_EMAIL = "princesulekhiya2004@gmail.com";
const ADMIN_PASSWORD = "princesulekhiya2004@gmail.com";
const ADMIN_DEV_CODE = "123456";

async function mockAdminAuthFlow(page: Page) {
  await page.route("**/auth/admin/login", async (route: Route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }

    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        challengeId: "challenge-1",
        expiresAt: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
        message: "Verification code sent",
        delivery: "dev",
        devCode: ADMIN_DEV_CODE,
      }),
    });
  });

  await page.route("**/auth/admin/verify-2fa", async (route: Route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }

    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        token: "mock-admin-token",
        user: {
          id: "admin-1",
          email: ADMIN_EMAIL,
          name: "Prince",
          role: "ADMIN",
        },
      }),
    });
  });

  await page.route("**/auth/admin/me", async (route: Route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        id: "admin-1",
        email: ADMIN_EMAIL,
        name: "Prince",
        role: "ADMIN",
      }),
    });
  });
}

test.describe("Cloud Nexus Admin Panel E2E Tests", () => {
  test("1. Admin Route Guard and Redirect to Login", async ({ page }) => {
    // Navigate directly to /admin dashboard without auth
    await page.goto("/admin");
    // Wait for redirect to login page
    await page.waitForURL(/.*\/admin\/login/);
    await expect(page).toHaveURL(/.*\/admin\/login/);
  });

  test("2. Admin Login - Incorrect Credentials Validation", async ({ page }) => {
    await page.goto("/admin/login");

    // Fill incorrect credentials
    await page.fill('input[type="email"]', "wrong-admin@cloudnexus.com");
    await page.fill('input[type="password"]', "wrong_password");

    // Click submit
    await page.click('button[type="submit"]');

    // Verify error banner is visible and has correct text
    const errorBanner = page.locator("text=Invalid credentials. Please try again.").or(page.locator("text=Invalid admin credentials"));
    await expect(errorBanner.first()).toBeVisible();
  });

  test("3. Admin Login - Successful 2FA and Dashboard Operations", async ({ page }) => {
    await mockAdminAuthFlow(page);

    await page.goto("/admin/login");

    // Fill correct credentials
    await page.fill('input[type="email"]', ADMIN_EMAIL);
    await page.fill('input[type="password"]', ADMIN_PASSWORD);

    // Click submit
    await page.click('button[type="submit"]');

    // Wait for the OTP step
    await expect(page.getByRole("heading", { name: "Verification" })).toBeVisible();
    await expect(page.locator('input[placeholder="000000"]')).toBeVisible();

    // Fill the OTP code
    await page.fill('input[placeholder="000000"]', ADMIN_DEV_CODE);

    // Submit OTP verification
    await page.click('button[type="submit"]');

    // Wait for redirection to dashboard
    await page.waitForURL(/.*\/admin$/);
    await expect(page).toHaveURL(/\/admin$/);

    // Verify dashboard welcome message
    const welcomeHeader = page.locator("text=Welcome back, Prince");
    await expect(welcomeHeader).toBeVisible();

    // Verify system status chip is rendered (connected/error depends on runtime backend)
    await expect(page.getByText(/API (Connected|Error)/)).toBeVisible();

    // Navigate to Applications page via Quick Actions
    const reviewAppsLink = page.getByRole("link", { name: "Review Applications" }).first();
    await expect(reviewAppsLink).toBeVisible();
    await Promise.all([
      page.waitForURL(/.*\/admin\/applications/),
      reviewAppsLink.click(),
    ]);

    // Verify navigation url
    await expect(page).toHaveURL(/.*\/admin\/applications/);
  });

  test("4. Full Admin Dashboard Operations (Contacts, Applications, Jobs, Blogs)", async ({ page }) => {
    await mockAdminAuthFlow(page);

    // 1. Log in once
    await page.goto("/admin/login");
    await page.fill('input[type="email"]', ADMIN_EMAIL);
    await page.fill('input[type="password"]', ADMIN_PASSWORD);
    await page.click('button[type="submit"]');
    await expect(page.getByRole("heading", { name: "Verification" })).toBeVisible();
    await expect(page.locator('input[placeholder="000000"]')).toBeVisible();
    await page.fill('input[placeholder="000000"]', ADMIN_DEV_CODE);

    await page.click('button[type="submit"]');
    await page.waitForURL(/.*\/admin/);

    // 2. View and Expand Contact Queries
    await page.route("**/admin/contacts**", async (route: Route) => {
      if (route.request().resourceType() === "document") {
        await route.continue();
        return;
      }

      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          {
            id: "contact-1",
            fullName: "Jane Doe",
            companyName: "Acme Corp",
            email: "jane@acme.com",
            phone: "1234567890",
            interestedIn: "Software Development",
            estimatedBudget: "$10k - $25k",
            heardFrom: "Google",
            projectDetails: "Need a custom dashboard built.",
            createdAt: new Date().toISOString(),
          }
        ]),
      });
    });

    await page.locator('a[href="/admin/contacts"]').first().click();
    await page.waitForURL(/.*\/admin\/contacts/);
    await expect(page.locator("text=Contact Inquiries")).toBeVisible();
    await expect(page.locator("text=Jane Doe")).toBeVisible();

    await page.click("text=Jane Doe");
    await expect(page.locator("text=Need a custom dashboard built.")).toBeVisible();

    // 3. View and Approve Applications
    await page.route("**/admin/applications**", async (route: Route) => {
      if (route.request().resourceType() === "document") {
        await route.continue();
        return;
      }

      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          {
            id: "app-1",
            jobSlug: "frontend-engineer",
            jobTitle: "Frontend Engineer",
            fullName: "John Candidate",
            email: "john@candidate.com",
            phone: "9876543210",
            currentCompany: "Prev Co",
            ctc: "12 LPA",
            experience: "3 years",
            resumeFileName: "resume.pdf",
            resumePath: "/uploads/resume.pdf",
            status: "PENDING",
            createdAt: new Date().toISOString(),
          }
        ]),
      });
    });

    await page.locator('a[href="/admin/applications"]').first().click();
    await page.waitForURL(/.*\/admin\/applications/);
    await expect(page.locator("h1", { hasText: "Applications" })).toBeVisible();
    await expect(page.locator("text=John Candidate")).toBeVisible();
    await expect(page.locator("text=PENDING")).toBeVisible();

    await page.route("**/admin/applications/app-1/approve", async (route: Route) => {
      if (route.request().resourceType() === "document") {
        await route.continue();
        return;
      }

      if (route.request().method() !== "PATCH") {
        await route.continue();
        return;
      }

      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          id: "app-1",
          status: "APPROVED",
        }),
      });
    });

    const appCard = page.locator('div:has-text("John Candidate")').first();
    await appCard.hover();
    const approveIcon = appCard.getByTitle("Approve");
    await expect(approveIcon).toBeVisible({ timeout: 10000 });
    const [approveResponse] = await Promise.all([
      page.waitForResponse((resp) => resp.url().includes('/admin/applications/app-1/approve') && resp.request().method() === 'PATCH'),
      approveIcon.click(),
    ]);
    const approveJson = await approveResponse.json();
    expect(approveJson.status).toBe('APPROVED');
    await expect(page.locator('span:has-text("Approved")')).toBeVisible();

    // 4. Manage Jobs (CRUD)
    await page.route("**/admin/job-postings**", async (route: Route) => {
      if (route.request().resourceType() === "document") {
        await route.continue();
        return;
      }

      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          {
            id: "job-1",
            title: "QA Engineer",
            slug: "qa-engineer",
            department: "QA",
            location: "Remote",
            employmentType: "Full-time",
            experience: "2+ years",
            description: ["Verify features"],
            published: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          }
        ]),
      });
    });

    await page.locator('a[href="/admin/jobs"]').first().click();
    await page.waitForURL(/.*\/admin\/jobs/);
    await expect(page.locator("text=Job Postings")).toBeVisible();
    await expect(page.locator("text=QA Engineer")).toBeVisible();

    await page.click("text=New Job");
    await expect(page.getByRole("heading", { name: "New Job Posting" })).toBeVisible();

    await page.fill('input[name="title"]', "Designer");
    await page.fill('input[name="department"]', "Design");

    await page.route("**/admin/job-postings**", async (route: Route) => {
      if (route.request().resourceType() === "document") {
        await route.continue();
        return;
      }

      if (route.request().method() === "POST") {
        await route.fulfill({
          status: 201,
          contentType: "application/json",
          body: JSON.stringify({
            id: "job-2",
            title: "Designer",
            department: "Design",
            published: true,
          }),
        });
      }
    });

    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/.*\/admin\/jobs/);

    // 5. Manage Blogs (CRUD)
    await page.route("**/admin/blogs**", async (route: Route) => {
      if (route.request().resourceType() === "document") {
        await route.continue();
        return;
      }

      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          {
            id: "blog-1",
            title: "AI Evolution",
            slug: "ai-evolution",
            excerpt: "Evolution of AI",
            content: "AI is moving fast.",
            category: "AI",
            published: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          }
        ]),
      });
    });

    await page.locator('a[href="/admin/blogs"]').first().click();
    await page.waitForURL(/.*\/admin\/blogs/);
    await expect(page.locator("text=Blog Posts")).toBeVisible();
    await expect(page.locator("text=AI Evolution")).toBeVisible();

    await page.click("text=New Post");
    await expect(page.getByRole("heading", { name: "New Blog Post" })).toBeVisible();

    await page.fill('input[name="title"]', "Tech Trends");
    await page.fill('textarea[name="excerpt"]', "Modern tech trends.");
    await page.fill('textarea[name="content"]', "Content of tech trends.");

    await page.route("**/admin/blogs**", async (route: Route) => {
      if (route.request().resourceType() === "document") {
        await route.continue();
        return;
      }

      if (route.request().method() === "POST") {
        await route.fulfill({
          status: 201,
          contentType: "application/json",
          body: JSON.stringify({
            id: "blog-2",
            title: "Tech Trends",
            slug: "tech-trends",
            excerpt: "Modern tech trends.",
            content: "Content of tech trends.",
            published: true,
          }),
        });
      }
    });

      await page.click('button[type="submit"]');
      await expect(page).toHaveURL(/.*\/admin\/blogs/);
  });
});

