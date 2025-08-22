---
applyTo: '**'
---
# 📘 Portfolio Website Instruction Manual

This document outlines the **UI/UX design** and **architectural design** for your multi-page professional portfolio website. The site is intended to showcase **software development**, **digital/creative skills**, and **technical/physical expertise**.

---

## 🎨 UI/UX Design Guidelines

### 1. Branding & Style

* **Theme:** Professional, clean, modern.
* **Color Palette:** Dark navy/black base with warm orange or coral accent. Alternative: Light background with deep blue accent.
* **Typography:**

  * Headings → Sans Serif (e.g., Inter, Poppins).
  * Body → Clean readable font (e.g., Roboto, Lato).
* **Design Elements:** Rounded corners, soft shadows, hover effects.
* **Dark/Light Mode:** Toggle available in navbar.

### 2. Navigation

* **Sticky top navbar** with logo (your name) + links:

  * Home
  * About
  * Skills
  * Projects (sub-pages)
  * Blog (optional)
  * Contact
* Smooth scrolling and active state highlighting.

### 3. Page Layouts

#### 🏠 Home Page

* **Hero Section:**

  * Headline → "Hi, I’m Daniel Awuni — Software Developer & Technical Maker."
  * Subline → "I build scalable apps, create digital designs, and work on physical tech solutions."
  * Call-to-action buttons → View Projects / Hire Me.
* **Featured Projects:** 2–3 highlight cards with links.
* **Skills Teaser:** Three-column preview of Development, Digital, and Technical skills.
* **Contact CTA:** Button → Contact page.

#### 🙋 About Page

* Expanded professional bio with timeline.
* Photos (software work + technical workshop).
* Certifications, highlights, awards.
* Resume download button.

#### 🛠 Skills Page

* Split into **categories**:

  * Development (React, Flutter, Node.js, Firebase).
  * Digital/Creative (Illustrator, Photoshop, Blender).
  * Technical (CNC operation, computer repairs, electronics).
* Each skill displayed with **icon + short description + experience level**.

#### 📂 Projects Page

* Project grid with filters (Software / Creative / Technical).
* Each project card → thumbnail, title, summary, tech stack.
* Clicking a project → dedicated detail page.

#### 📑 Project Detail Page

* Banner image/video.
* Problem → Solution → Outcome.
* Role, tech stack, tools.
* Gallery of screenshots/photos.
* Links to GitHub, live demo, or case study.

#### ✍ Blog (Optional)

* Articles on software, freelancing, STEM outreach.
* Search + category filters.

#### 📬 Contact Page

* Contact form (name, email, message).
* Links to GitHub, LinkedIn, Behance/ArtStation, Twitter.
* Map (optional, Accra, Ghana).

#### 🔻 Footer

* Minimal: copyright, quick links, social icons.
* Theme toggle.

### 4. Interaction & Animations

* Subtle scroll animations (fade-in, slide-up).
* Hover animations on project cards.
* Skills page: animated progress bars or skill meters.

---

## 🏗 Architectural Design

### 1. Tech Stack

* **Framework:** Next.js (App Router).
* **Styling:** Tailwind CSS + shadcn/ui.
* **Animations:** Framer Motion.
* **Content:** Contentlayer (Markdown/MDX) or Sanity CMS.
* **Images:** Next/Image with local `/public` and optional Cloudinary.
* **Forms/Email:** API route + Resend or Nodemailer.
* **Deployment:** Vercel.

### 2. File/Folder Structure

```
/src
├─ app/
│  ├─ page.tsx              // Home
│  ├─ about/page.tsx
│  ├─ skills/page.tsx
│  ├─ projects/page.tsx
│  ├─ projects/[slug]/page.tsx
│  ├─ blog/page.tsx
│  ├─ blog/[slug]/page.tsx
│  └─ contact/page.tsx
│
├─ components/
│  ├─ layout/ (header, footer, container)
│  ├─ home/ (hero, featured projects, skills teaser)
│  ├─ projects/ (project-card, filter, gallery)
│  ├─ skills/ (skill-card, category, meters)
│  ├─ blog/ (post-card, prose styling)
│  └─ ui/ (buttons, inputs, cards, etc.)
│
├─ content/ (if Contentlayer)
│  ├─ projects/*.mdx
│  ├─ skills/*.mdx
│  └─ posts/*.mdx
│
├─ lib/
│  ├─ contentlayer.ts or sanity.ts
│  ├─ seo.ts
│  ├─ mailer.ts
│  └─ utils.ts
│
└─ styles/
   ├─ globals.css
   └─ prose.css
```

### 3. Content Models

* **Projects:** title, slug, type (software/creative/technical), summary, thumbnail, gallery, stack, role, outcomes, body.
* **Skills:** category (development/digital/technical), name, level, icon, related projects.
* **Posts:** title, slug, summary, cover, tags, body.

### 4. APIs & Data Flow

* **Projects & Skills:** Fetched from Markdown (Contentlayer) or CMS.
* **Contact Form:** POST → `/api/contact` → send via Resend/Nodemailer.
* **Blog:** Same as Projects.

### 5. Performance & SEO

* Static generation for most pages.
* Dynamic metadata per project/blog.
* Open Graph images per page.
* Sitemap + robots.txt.

### 6. Deployment & CI/CD

* Repo: GitHub.
* Auto-deploy: Vercel (preview + production).
* CI checks: ESLint, Prettier, TypeScript, Vitest, Playwright.

### 7. Extensibility

* Add booking (Calendly embed).
* Add e-commerce for digital downloads (Lemon Squeezy).
* Add translations with next-intl.

---

## ✅ Summary

This portfolio will:

* Professionally showcase **digital, technical, and software skills**.
* Use a **modern multi-page structure** with deep detail on projects.
* Be built with **Next.js + Tailwind + Framer Motion**.
* Scale easily with CMS or Markdown-based content.
* Deliver strong **UI/UX** and **technical architecture** suitable for long-term use.
