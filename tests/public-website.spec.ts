import { test, expect, type Route } from "@playwright/test";
import fs from "fs";
import path from "path";

const smallFilePath = path.resolve("./tests/small-resume.pdf");
const largeFilePath = path.resolve("./tests/large-resume.pdf");

test.beforeAll(() => {
  // Create small resume (10 bytes)
  fs.writeFileSync(smallFilePath, "Resume PDF");
  // Create large resume (2.5 MB)
  fs.writeFileSync(largeFilePath, Buffer.alloc(2.5 * 1024 * 1024));
});

test.afterAll(() => {
  // Clean up mock files
  if (fs.existsSync(smallFilePath)) fs.unlinkSync(smallFilePath);
  if (fs.existsSync(largeFilePath)) fs.unlinkSync(largeFilePath);
});

test.describe("Cloud Nexus Public Website E2E Tests", () => {
  test("1. Landing Page Loads & Layout Verification", async ({ page }) => {
    await page.goto("/");
    // Verify title contains the main brand name
    await expect(page).toHaveTitle(/Cloud Nexus/);
    
    // Check main navigation header logo is visible
    const logo = page.locator('img[alt="Cloud Nexus Logo"]').first();
    await expect(logo).toBeVisible();
  });

  test("2. Theme Toggle Functionality", async ({ page }) => {
    await page.goto("/");
    
    const themeToggle = page.locator('[aria-label="Toggle theme"]').first();
    await expect(themeToggle).toBeVisible();

    const htmlElement = page.locator("html");
    const initialClass = await htmlElement.getAttribute("class");

    // Click theme toggle to switch theme
    await themeToggle.click();
    await page.waitForTimeout(500); // Wait for transition
    
    const newClass = await htmlElement.getAttribute("class");
    
    // The theme class should toggle (dark / light)
    if (initialClass?.includes("dark")) {
      expect(newClass).not.toContain("dark");
    } else {
      expect(newClass).toContain("dark");
    }
  });

  test("3. Language Selection System", async ({ page }) => {
    await page.goto("/");
    
    const langTrigger = page.getByRole("button", { name: "Select language" }).first();
    await expect(langTrigger).toBeVisible();
    await langTrigger.click();

    // Click Hindi option from the currently opened dropdown menu
    const langMenu = page.getByRole("menu").first();
    await expect(langMenu).toBeVisible();
    const hindiOption = langMenu.getByRole("menuitem", { name: /Hindi/i });
    await expect(hindiOption).toBeVisible();
    await hindiOption.click({ force: true });

    // Verify lang attribute changes or dynamic text updates
    const htmlElement = page.locator("html");
    await expect(htmlElement).toHaveAttribute("lang", "hi");

    // Click trigger again to restore English
    await langTrigger.click();
    await expect(langMenu).toBeVisible();
    const englishOption = langMenu.getByRole("menuitem", { name: /English/i });
    await expect(englishOption).toBeVisible();
    await englishOption.click({ force: true });
    await expect(htmlElement).toHaveAttribute("lang", "en");
  });

  test("4. Navigation Menu & Redirection", async ({ page }) => {
    await page.goto("/");
    
    // Hover on 'Resources' in the main navigation
    const resourcesTrigger = page.locator("text=Resources").first();
    await resourcesTrigger.hover();
    
    // Click 'Contact Us'
    const contactUsLink = page.locator('a[href="/resources/contact"]').first();
    await expect(contactUsLink).toBeVisible();
    await contactUsLink.click();

    // Verify page redirect to contact
    await expect(page).toHaveURL(/.*\/resources\/contact/, { timeout: 60000 });
  });

  test("5. Contact Form Validation and Interception", async ({ page }) => {
    await page.goto("/resources/contact");

    // Click submit without filling form to trigger HTML5 validations
    const submitBtn = page.locator('button[type="submit"]').first();
    await submitBtn.click();

    // Check that we are still on the form page
    await expect(page).toHaveURL(/.*\/resources\/contact/);

    // Mock API response to avoid actual db pollution
    await page.route("**/contacts", async (route: Route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true, message: "Mocked success" }),
      });
    });

    // Fill form fields
    await page.fill('input[name="fullName"]', "Jane Doe");
    await page.fill('input[name="email"]', "jane.doe@example.com");
    await page.selectOption('select[name="interestedIn"]', { index: 1 });
    await page.fill('textarea[name="projectDetails"]', "This is a detailed mock project description with more than 10 characters.");

    // Submit form
    await submitBtn.click();

    // Expect success element to become visible
    await expect(page.locator("text=Message Sent!")).toBeVisible();
  });

  test("6. Career Job Details and Application Resume Size Validation", async ({ page }) => {
    // Navigate to Career page
    await page.route("**/job-listings", async (route: Route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          {
            id: "job-1",
            title: "Frontend Engineer",
            slug: "frontend-engineer",
            department: "Engineering",
            location: "Bhopal",
            employmentType: "Full-time",
            experience: "2-4 years",
            description: ["Test description"],
            requirements: ["React", "CSS"],
            benefits: ["Health insurance"],
          }
        ]),
      });
    });

    await page.goto("/resources/career");
    
    // Mock detailed job api request
    await page.route("**/job-listings/frontend-engineer", async (route: Route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          id: "job-1",
          title: "Frontend Engineer",
          slug: "frontend-engineer",
          department: "Engineering",
          location: "Bhopal",
          employmentType: "Full-time",
          experience: "2-4 years",
          description: ["Test description"],
          requirements: ["React", "CSS"],
          benefits: ["Health insurance"],
        }),
      });
    });

    // Click on job card/link to open job details page
    const jobLink = page.locator("text=Frontend Engineer").first();
    await expect(jobLink).toBeVisible();
    await jobLink.click();

    await expect(page).toHaveURL(/.*\/resources\/career\/frontend-engineer/);

    // Open Apply Modal
    const applyBtn = page.locator("text=Apply for this position").first();
    await expect(applyBtn).toBeVisible();
    await page.waitForTimeout(1000);
    await applyBtn.click();

    // Verify modal elements are visible
    await expect(page.locator("text=Apply for Frontend Engineer")).toBeVisible();

    // Fill form
    await page.fill('input[name="fullName"]', "Alex Test");
    await page.fill('input[name="email"]', "alex.test@example.com");
    await page.fill('input[name="phone"]', "+919876543210");

    // Test case: Upload large file (> 2MB)
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles(largeFilePath);

    // Assert that the 2MB error check triggers on UI
    await expect(page.locator("text=File size must be less than 2MB.")).toBeVisible();

    // Test case: Upload valid small file (< 2MB)
    await fileInput.setInputFiles(smallFilePath);
    
    // Assert size error clears out
    await expect(page.locator("text=File size must be less than 2MB.")).not.toBeVisible();

    // Intercept submit application
    await page.route("**/applications", async (route: Route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true, message: "Application submitted" }),
      });
    });

    // Click submit in modal
    const modalSubmitBtn = page.locator('button[type="submit"]').first();
    await modalSubmitBtn.click();

    // Assert submission success dialog
    await expect(page.locator("text=Application Submitted!")).toBeVisible();
  });

  test("7. Free Consultation Page Loads & Layout Verification", async ({ page }) => {
    await page.goto("/resources/free-consultation");
    await expect(page.locator("text=Select a Date & Time").first()).toBeVisible();
    await expect(page.locator("text=What You'll Walk Away With").first()).toBeVisible();
  });

  test("8. Blog Page Listings and Detailed Navigation", async ({ page }) => {
    await page.route("**/blogs", async (route: Route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([
          {
            id: "blog-1",
            title: "Future of Cloud Computing",
            slug: "future-of-cloud-computing",
            excerpt: "Insights into serverless, edge computing, and hybrid cloud solutions.",
            category: "Cloud",
            published: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            authorName: "John Doe",
          }
        ]),
      });
    });

    await page.goto("/resources/blog");

    const blogTitle = page.locator("text=Future of Cloud Computing").first();
    await expect(blogTitle).toBeVisible();

    await page.route("**/blogs/future-of-cloud-computing", async (route: Route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          id: "blog-1",
          title: "Future of Cloud Computing",
          slug: "future-of-cloud-computing",
          excerpt: "Insights into serverless, edge computing, and hybrid cloud solutions.",
          content: "Detailed post content about serverless architectures and edge platforms.",
          category: "Cloud",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          authorName: "John Doe",
        }),
      });
    });

    await blogTitle.click();
    await expect(page).toHaveURL(/.*\/resources\/blog\/future-of-cloud-computing/);
    await expect(page.locator("text=Detailed post content").first()).toBeVisible();
  });

  test("9. Services and Industry Pages Navigation & Response Validation", async ({ page }) => {
    // Navigate and check mobile app development service page
    await page.goto("/services/mobile-app-development");
    await expect(page).toHaveTitle(/Mobile App Development/i);

    // Navigate and check healthcare industry page
    await page.goto("/industry/healthcare-lifesciences");
    await expect(page).toHaveTitle(/Healthcare/i);
  });
});

