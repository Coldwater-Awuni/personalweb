This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Daniel Awuni - Full-Stack Developer Portfolio

A modern, SEO-optimized portfolio website showcasing Daniel Awuni's work as a full-stack developer, graphic designer, and digital fabrication specialist. Built with Next.js 15, TypeScript, and Tailwind CSS.

### 🚀 Features

- **SEO Optimized**: Comprehensive meta tags, structured data, and search engine optimization
- **Responsive Design**: Mobile-first approach with glassmorphism UI
- **Performance Focused**: Optimized images, lazy loading, and fast loading times
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Modern Stack**: Next.js 15, TypeScript, Framer Motion, Tailwind CSS

### 🔍 SEO Features

This portfolio is optimized for search engines with:

- **Structured Data**: Person, Organization, and Website schemas using JSON-LD
- **Meta Tags**: Comprehensive Open Graph, Twitter Cards, and standard meta tags
- **Sitemap**: Dynamic sitemap including all projects and categories
- **Robots.txt**: Proper crawling instructions for search engines
- **Canonical URLs**: Prevents duplicate content issues
- **Breadcrumb Navigation**: Enhanced site structure for search engines

### 📊 Search Optimization

The site is optimized for these search terms:
- "Daniel Awuni full-stack developer"
- "Daniel Awuni portfolio"
- "Ghana web developer"
- "BSc Computer Engineering portfolio"
- "React Next.js developer Ghana"
- "Digital fabrication portfolio"

## Getting Started

First, install dependencies:

```bash
npm install
```

Copy the environment variables:

```bash
cp .env.example .env.local
```

Update the environment variables in `.env.local` with your actual values:

### 📧 Email Configuration

The contact form uses Google SMTP for sending emails. Follow these steps to set it up:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password** for the portfolio contact form
3. **Configure environment variables** in `.env.local`:
   ```bash
   CONTACT_EMAIL_TO=your-email@gmail.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-gmail@gmail.com
   SMTP_PASS=your-16-character-app-password
   ```
4. **Test the configuration**:
   ```bash
   npm run test:smtp
   ```

For detailed setup instructions, see [EMAIL_SETUP.md](./EMAIL_SETUP.md).

## Running the Development Server

```env
NEXT_PUBLIC_SITE_URL=https://danielawuni.dev
GOOGLE_SITE_VERIFICATION=your_google_verification_code
NEXT_PUBLIC_TWITTER_HANDLE=@danielawuni
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/daniel-awuni
NEXT_PUBLIC_GITHUB_URL=https://github.com/Coldwater-Awuni
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## SEO Configuration

### Google Search Console
1. Add your site to [Google Search Console](https://search.google.com/search-console)
2. Verify ownership using the verification code
3. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

### Social Media Tags
Update the social media handles in `.env.local`:
- Twitter/X handle
- LinkedIn profile URL
- GitHub profile URL

### Analytics
Add Google Analytics by setting `GOOGLE_ANALYTICS_ID` in your environment variables.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO meta tags
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── projects/          # Projects listing
│   └── project/[slug]/    # Individual project pages
├── components/            # Reusable components
│   ├── shared/           # Shared components (ProjectCard)
│   └── home/             # Home page components
├── content/              # Static content
│   ├── projects.ts       # Project data
│   └── skills.ts         # Skills and experience
├── lib/                  # Utilities
│   └── structured-data.ts # JSON-LD structured data
└── styles/               # Global styles
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- Digital Ocean App Platform

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Contributing

This is Daniel Awuni's personal portfolio. For suggestions or collaborations, please reach out via the contact form on the website.

---

**Built with ❤️ by Daniel Awuni**
