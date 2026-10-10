# Arjun Ashkar N C — Developer Portfolio

A personal developer portfolio website designed with an Apple-inspired aesthetic, featuring refined glassmorphism, pointer-responsive micro-interactions, dark/light mode, and recruiter-friendly readability.

Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## ✨ Features & Highlights

- **Apple-Inspired Aesthetic**: Obsidian & charcoal palette, delicate silver borders, translucent glass surfaces, and subtle ambient depth.
- **Interactive Spotlight Project Cards**: Smooth pointer-following radial lighting using CSS custom properties (`--mouse-x`, `--mouse-y`) without heavy React re-renders.
- **Dynamic Sticky Navigation**: Frosted glass navbar with scroll-aware active section tracking and smooth mobile navigation.
- **Dark & Light Mode**: Accessible theme switching with local storage persistence and seamless system-wide color transitions.
- **Performance & Accessibility**: 100% responsive layout, lightweight SVG project illustrations, zero layout shifts, and full support for `prefers-reduced-motion`.
- **Single Source of Truth**: Centralized content management via [`src/data.ts`](src/data.ts) for simple updates to projects, skills, education, certifications, and research publications.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & Vanilla CSS Tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment Target**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```text
personal-portfolio/
├── public/                 # Static assets (favicons, SVG icons)
├── src/
│   ├── assets/             # Static assets and media
│   ├── components/         # Modular UI components
│   │   ├── Nav.tsx         # Sticky glass navbar with active section detection
│   │   ├── Hero.tsx        # Hero section with typography & CTA buttons
│   │   ├── About.tsx       # Bio & key metrics
│   │   ├── Skills.tsx      # Technical skill categories & interactive chips
│   │   ├── Projects.tsx    # Interactive spotlight project showcase
│   │   ├── Education.tsx   # Timeline & academic credentials
│   │   ├── Certifications.tsx # Professional certifications & credential IDs
│   │   ├── Research.tsx    # Published academic papers & metric badges
│   │   ├── Contact.tsx     # Direct email and social connect links
│   │   └── Footer.tsx      # Clean footer with back-to-top interaction
│   ├── data.ts             # Centralized resume content & project data
│   ├── hooks.ts            # Custom hooks (useInView, useTheme, useActiveSection)
│   ├── index.css           # Design tokens, glassmorphism utilities & animations
│   ├── App.tsx             # Main page layout & structure
│   └── main.tsx            # Application entry point
├── vercel.json             # Vercel deployment configuration & security headers
├── vite.config.ts          # Vite build configuration
└── package.json            # Dependencies and scripts
```

---

## 🚀 Getting Started Locally

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or newer) installed.

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Arjun-Ashkar/<YOUR-REPO-NAME>.git
   cd <YOUR-REPO-NAME>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Create a production build:**
   ```bash
   npm run build
   ```

---

## 🔒 Security & Deployment

- Configured enterprise HTTP security headers in `vercel.json` (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`).
- Clean secret scan passing with 0 vulnerabilities (`npm audit`).
- Fully isolated client-side build with zero exposed credentials or private keys.

---

## 📬 Contact & Connect

- **Name**: Arjun Ashkar N C
- **Email**: [arjunashkarnc@gmail.com](mailto:arjunashkarnc@gmail.com)
- **LinkedIn**: [linkedin.com/in/arjunashkarnc](https://www.linkedin.com/in/arjunashkarnc/)
- **GitHub**: [github.com/Arjun-Ashkar](https://github.com/Arjun-Ashkar)
