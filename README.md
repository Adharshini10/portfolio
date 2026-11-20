# Adharshini Lingampally — Personal Portfolio Website

An elegant, animated, multi-page personal portfolio website for **Adharshini Lingampally**, a third-year B.Tech Computer Science student at Anurag University specializing in Frontend Development, Backend Engineering (Java & Spring Boot), React, and AI-powered applications.

---

## 🎨 Visual Identity & Theme

Designed around an earthy, warm, minimalist luxury aesthetic:

- **Cosmic Latte (`#FFF1E3`)**: Primary background
- **Mocha Cream (`#D8B99B`)**: Secondary backgrounds, borders, and cards
- **Deep Burgundy (`#702735`)**: Distinctive accents, active links, and buttons
- **Dark Brown (`#38251F`)**: Primary typography

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── images/
│   │   ├── profile-avatar.svg        # Replaceable hero profile illustration
│   │   ├── skillsync.svg             # SkillSync platform preview mockup
│   │   ├── learnovaai.svg            # LearnovaAI hub preview mockup
│   │   ├── shopez.svg                # ShopEZ e-commerce preview mockup
│   │   └── blood-care.svg            # Blood Care location preview mockup
│   ├── certificates/
│   │   └── cert-placeholder.svg      # Certificate template preview
│   ├── Adharshini-Resume.pdf         # Resume PDF file downloaded by "Download Resume"
│   └── favicon.svg                   # Custom AL monogram favicon
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                # Responsive navbar with mobile drawer & active indicators
│   │   ├── Footer.jsx                # Site-wide footer with quick links & social profiles
│   │   ├── Button.jsx                # Reusable button supporting router Link, href & downloads
│   │   ├── ProjectCard.jsx           # Responsive project card with hover zoom & tags
│   │   ├── SkillCard.jsx             # Categorized skill card with icons (no fake ratings)
│   │   ├── CertificateCard.jsx       # Modal-enabled certificate card
│   │   ├── Reveal.jsx                # Motion scroll-reveal animation wrapper
│   │   ├── ScrollToTop.jsx           # Automatic scroll reset & floating back-to-top button
│   │   └── SEO.jsx                   # Dynamic document title & meta description updater
│   │
│   ├── pages/
│   │   ├── Home.jsx                  # Hero, student status badge, CTAs, featured highlights
│   │   ├── About.jsx                 # Personal bio, education timeline, mindset, interests
│   │   ├── Skills.jsx                # Categorized skill dashboard (Programming, FE, BE, DB, AI)
│   │   ├── Projects.jsx              # Filterable project gallery
│   │   ├── ProjectDetails.jsx        # Dedicated detail case studies (/projects/:id)
│   │   ├── Certifications.jsx        # Clean credentials gallery with preview modal
│   │   ├── Contact.jsx               # Validated contact form with EmailJS integration
│   │   └── NotFound.jsx              # Custom 404 page
│   │
│   ├── data/
│   │   ├── personalInfo.js           # Centralized personal bio, university & social links
│   │   ├── projects.js               # Project metadata, features, contributions & links
│   │   ├── skills.js                 # Categorized technical skills inventory
│   │   └── certifications.js         # Certificate entries & verification links
│   │
│   ├── config/
│   │   └── emailjs.js                # EmailJS integration & configuration checker
│   │
│   ├── styles/
│   │   └── global.css                # Color variables, typography, layout & responsive utilities
│   │
│   ├── App.jsx                       # React Router configuration & page transition wrapper
│   └── main.jsx                      # App root entry
│
└── package.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📝 How to Customize Your Information

### Personal Info & Social Links
Edit `src/data/personalInfo.js`:
- Replace GitHub URL (`personalInfo.socialLinks.github`)
- Replace LinkedIn URL (`personalInfo.socialLinks.linkedin`)
- Replace email address (`personalInfo.socialLinks.email` and `rawEmail`)

### Resume
Drop your updated resume PDF directly into `public/Adharshini-Resume.pdf`. The "Download Resume" buttons across the site will automatically download it.

### Profile Picture
Replace `public/images/profile-avatar.svg` or add your photo (e.g. `public/images/profile.jpg`) and update the path in `src/pages/Home.jsx` and `src/pages/About.jsx`.

### Project Links & Details
Edit `src/data/projects.js`:
- Update `links.github` and `links.liveDemo` for each project.
- Modify feature lists or contributions as your projects evolve.

### Certifications
Edit `src/data/certifications.js` and add certificates to `public/certificates/`.

---

## 📬 EmailJS Configuration

To receive messages from the contact form directly to your email inbox:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. In the EmailJS Dashboard:
   - Add an **Email Service** (e.g., connect your Gmail account) -> Copy your **Service ID**.
   - Create an **Email Template** -> Copy your **Template ID**.
     - Template tags to use: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`.
   - Go to **Account > Security** -> Copy your **Public Key**.
3. Create a `.env` file in the root folder of the project:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
4. Restart your development server (`npm run dev`).

---

## 🌐 Deploying to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **Add New Project** and select your portfolio repository.
4. Framework Preset: **Vite** (auto-detected).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. In **Environment Variables**, add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
8. Click **Deploy**. Your website will be live in seconds with a free `.vercel.app` domain and HTTPS.
