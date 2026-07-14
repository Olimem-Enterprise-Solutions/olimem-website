# Olimem Enterprise Solutions — Corporate Website

A production-ready corporate website for **Olimem Enterprise Solutions (Pvt) Ltd**, built with React, Vite, Tailwind CSS, Fuse.js, Decap CMS, and Netlify.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool |
| Tailwind CSS | Styling |
| React Router v6 | Client-side routing |
| Fuse.js | Fuzzy search (services, FAQs, portfolio, articles) |
| Decap CMS | Content management |
| Netlify Forms | Consultation form submissions |
| Netlify Identity | CMS authentication |

---

## 📁 Folder Structure

```
olimem/
├── public/
│   ├── admin/
│   │   ├── index.html          # Decap CMS entry
│   │   └── config.yml          # CMS collections config
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── home/               # Homepage section components
│   │   │   ├── Hero.jsx
│   │   │   ├── StatsSection.jsx
│   │   │   ├── ServicesOverview.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   ├── Industries.jsx
│   │   │   ├── ClientLogos.jsx
│   │   │   ├── CeoMessage.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── BlogPreview.jsx
│   │   │   └── FAQ.jsx
│   │   ├── layout/
│   │   │   ├── Navbar.jsx      # Fixed nav with dark mode toggle
│   │   │   └── Footer.jsx      # Full footer with CTA strip
│   │   ├── contact/
│   │   │   └── ContactForm.jsx # Netlify Forms integrated
│   │   └── ui/
│   │       ├── LeadModal.jsx   # 2s auto-popup, session storage
│   │       ├── SmartSearch.jsx # Fuse.js powered search
│   │       └── PageHeader.jsx  # Reusable page hero
│   ├── data/
│   │   └── siteData.js         # All site content (services, FAQs, portfolio, etc.)
│   ├── hooks/
│   │   ├── useDarkMode.js      # Dark mode with localStorage
│   │   └── useScrollReveal.js  # IntersectionObserver scroll animations
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Insights.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html                  # SEO meta tags, OG, structured data, fonts
├── netlify.toml
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## ⚙️ Local Development Setup

### Prerequisites
- Node.js 18+ 
- npm 9+
- Git

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-org/olimem.git
cd olimem

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit: `http://localhost:5173`

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview locally:

```bash
npm run preview
```

---

## 🌐 Deploying to Netlify

### Option A: Connect GitHub (Recommended)

1. Push project to a GitHub repository
2. Log in to [Netlify](https://app.netlify.com)
3. Click **"Add new site" → "Import an existing project"**
4. Connect your GitHub repo
5. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy Site**

Netlify will auto-deploy on every push to `main`.

### Option B: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod --dir=dist
```

---

## 📝 Decap CMS Setup

The CMS is available at `https://your-site.netlify.app/admin`

### Enable Netlify Identity

1. In Netlify dashboard → **Site settings → Identity**
2. Click **"Enable Identity"**
3. Under **Registration**, set to **"Invite only"**
4. Under **Services → Git Gateway**, click **"Enable Git Gateway"**

### Add CMS Users

1. Go to **Identity** tab in Netlify
2. Click **"Invite users"**
3. Send invitations to your team

### CMS Collections Available

| Collection | Description |
|---|---|
| **News & Insights** | Blog articles and company news |
| **Services** | Service listings and descriptions |
| **Testimonials** | Client testimonials |
| **Portfolio** | Project case studies |

---

## 🎨 Brand Tokens

| Token | Value |
|---|---|
| Primary Green | `#5BC236` |
| Secondary Green | `#92D23C` |
| Accent Blue | `#2E3192` |
| Dark Background | `#0F172A` |
| Light Background | `#FFFFFF` |
| Neutral Gray | `#64748B` |
| Success Green | `#22C55E` |

Typography: **Poppins** (headings) + **Inter** (body)

---

## 📬 Netlify Forms

The consultation form uses Netlify Forms. Forms are automatically captured in your Netlify dashboard under **Forms**.

To view submissions:
1. Netlify Dashboard → **Forms**
2. Click **"consultation"** form

To set up email notifications:
1. Forms → Settings → **Form notifications**
2. Add email address for new submission alerts

---

## 🔍 SEO

- Meta title, description, keywords per page
- Open Graph tags (Facebook, LinkedIn sharing)
- Twitter Card meta tags
- JSON-LD structured data (Organization schema)
- `sitemap.xml` — update URLs before go-live
- `robots.txt` — blocks `/admin` from crawlers

**Target keywords configured:**
- Sage Pastel Zimbabwe
- Sage Payroll Zimbabwe
- Sage Evolution Zimbabwe
- GIS Zimbabwe / GIS Consulting Zimbabwe
- Custom Software Development Zimbabwe
- ERP Solutions Zimbabwe
- Digital Transformation Zimbabwe

---

## 🌙 Dark Mode

- Toggles via the moon/sun icon in the navbar
- Respects system preference on first visit
- Persists to `localStorage`
- Smooth CSS transitions throughout

---

## ⚡ Performance Optimizations

- Code-split vendor bundles (React, Fuse.js separated)
- Google Fonts preconnected
- CSS animations respect `prefers-reduced-motion` via Tailwind
- Images: use WebP format when adding real images
- Tailwind CSS purges unused styles in production build
- Security headers set in `netlify.toml`

---

## 📦 Updating Site Content

All site data lives in `src/data/siteData.js`:

- `services` — all service cards and sub-services
- `industries` — industries grid
- `stats` — the counter numbers
- `whyChooseUs` — why choose Olimem cards
- `testimonials` — client testimonials
- `portfolio` — project case studies
- `faqs` — FAQ accordion
- `blogPosts` — news & insights articles
- `ceoMessage` — CEO section content

Edit this file to update content without touching component code.

---

## 🛡️ Security Headers

Set in `netlify.toml`:
- `X-Frame-Options: DENY`
- `X-XSS-Protection`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy`
- `Permissions-Policy`

---

## 📞 Support

For technical issues with the website codebase, contact your development team or open a GitHub issue.

**Olimem Enterprise Solutions (Pvt) Ltd**  
4th Floor, Old Mutual Centre, Jason Moyo Avenue, Harare, Zimbabwe  
info@olimem.co.zw | +263 4 123 456
