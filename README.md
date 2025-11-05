# Portfolio Website Template

A project-heavy portfolio website template with glassmorphism design. I created this template because I've always wanted a portfolio website that focuses heavily on showcasing projects, but I couldn't find one that had everything I wanted without unnecessary features or missing key elements I needed. This template is designed specifically for developers, designers, and creators who want to showcase their work in detail.

Perfect for anyone who wants:
- Deep project showcases with detailed pages
- Minimal, focused design without bloat
- Everything you need, nothing you don't

## 📖 What This Template Does

This template creates a **single-page portfolio website** with:

- **Homepage** (`index.html`) - Features a welcome section, about me, project gallery, and social links
- **Project Detail Pages** - Individual pages for each project (up to 4 projects)
- **Glassmorphism Design** - Modern glass-like effects with smooth animations
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **SEO Optimized** - Complete meta tags, structured data, sitemap, and robots.txt
- **Accessibility** - ARIA labels, semantic HTML, and reduced motion support

## 🏗️ How The Codebase Works

### File Structure

```
portfolio structure/
├── index.html              # Main homepage - your landing page
├── 404.html               # Custom 404 error page
├── styles.css             # All CSS styles (glassmorphism, responsive, animations)
├── script.js              # JavaScript functionality (animations, scroll, interactions)
├── sitemap.xml            # SEO: Lists all pages for search engines
├── robots.txt             # SEO: Tells search engines which pages to crawl
├── netlify.toml           # Netlify deployment configuration (optional)
├── README.md              # This file - documentation
│
├── assets/                # Media files folder
│   ├── web-logo.png       # Favicon (shown in browser tab)
│   ├── social-share.png   # Image shown when sharing on social media
│   ├── resume.pdf         # Your resume
│   └── project-1/        # Project media folders
│       ├── image-1.png    # First image (used on homepage + project page)
│       ├── image-2.png    # Second image (used on homepage + project page)
│       └── project-1.mp4  # Project video (optional, shown on project page)
│   └── project-2/         # Repeat for projects 2-4
│   └── project-3/
│   └── project-4/
│
└── project-1/             # Project detail page folders
    └── index.html         # Individual project page HTML
└── project-2/             # Repeat for projects 2-4
└── project-3/
└── project-4/
```

### How Each File Works

#### `index.html` (Homepage)
- **Welcome Section**: Animated text that flips between "GALLERY", "ARCHIVE", "CANVAS", "STUDIO"
- **About Me Section**: Three paragraphs about you + resume link
- **Project Gallery**: Masonry layout showing 2 images per project (8 images total for 4 projects)
- **Social Links**: Buttons showing your username and linking to your profiles
- **Footer**: Navigation links and copyright

#### `project-X/index.html` (Project Pages)
Each project page includes:
- **Hero Section**: Project title, description, and metadata (tools, role, users)
- **Problem/Solution/Impact**: Tell your project story
- **Key Features**: Bullet list of main features
- **Results & Insights**: What you learned/achieved
- **Skills & Technologies**: Tag grids showing tech stack
- **Video**: Embedded project video (optional)
- **Gallery**: Same 2 images from homepage
- **Challenges & Solutions**: Technical challenges you solved
- **Project Links**: "See the Code" (GitHub) and "See Live" (demo) buttons

#### `styles.css`
- **CSS Variables**: Colors, shadows, and spacing defined at the top (`:root`)
- **Glassmorphism**: Backdrop blur effects for modern glass-like appearance
- **Responsive Design**: Media queries for mobile, tablet, and desktop
- **Animations**: Smooth transitions, hover effects, and scroll animations
- **Typography**: Halant font family with responsive sizing

#### `script.js`
- **Smooth Scrolling**: Makes anchor links scroll smoothly to sections
- **Text Flip Animation**: Cycles through words in welcome section
- **Back to Top Button**: Shows/hides based on scroll position
- **Project Masonry Randomization**: Randomizes project order on each page load
- **Accessibility**: Respects `prefers-reduced-motion` setting

#### `sitemap.xml`
- Lists all pages (homepage + 4 project pages) for search engines
- Helps Google/Bing find and index your site

#### `robots.txt`
- Tells search engines which pages to crawl
- Points to your sitemap location

#### `netlify.toml`
- Configuration for Netlify deployment
- Optional redirects for custom domains

## 🚀 How To Use This Template

### Step 1: Update Personal Information

Open `index.html` and find these placeholders (use Find: `[INSERT YOUR`):

1. **Meta Tags** (lines 7-28):
   - `[INSERT YOUR NAME HERE]` → Your full name
   - `[INSERT YOUR TITLE HERE]` → Your job title (e.g., "Software Engineer", "Designer")
   - `[INSERT YOUR EMAIL HERE]` → Your email address
   - `[INSERT YOUR WEBSITE URL HERE]` → Your website URL (e.g., `https://yourname.com`)
   - `[INSERT YOUR PORTFOLIO DESCRIPTION HERE]` → Brief description for search engines
   - `[INSERT YOUR KEYWORDS HERE]` → Comma-separated keywords
   - `[INSERT YOUR LINKEDIN URL HERE]` → Your LinkedIn profile URL
   - `[INSERT YOUR GITHUB URL HERE]` → Your GitHub profile URL

2. **Welcome Section** (line 39):
   - `[INSERT YOUR NAME HERE]` → Your name
   - `[INSERT YOUR TAGLINE HERE]` → Your tagline/slogan

3. **About Me Section** (lines 41-47):
   - Replace the three `[INSERT YOUR BIO PARAGRAPH X HERE]` placeholders with your actual bio

### Step 2: Update Social Media Links

Find the social links section (around line 78-107). Each social button shows:
- **Icon**: SVG icon for the platform
- **Username**: Visible text showing your username (e.g., "john_doe")
- **Link**: The `href` attribute that takes users to your profile

**How it works:**
- The username is visible in the button text (inside the `<span>` tag)
- Clicking the button takes users to your social media profile (via the `href` attribute)
- Update both the username text AND the URL

**Example for LinkedIn:**
```html
<a href="https://linkedin.com/in/yourusername" ...>
    <svg>...</svg>
    <span>[INSERT YOUR LINKEDIN USERNAME HERE]</span>
</a>
```

Replace:
- `href="https://linkedin.com/in/yourusername"` → Your actual LinkedIn URL
- `<span>[INSERT YOUR LINKEDIN USERNAME HERE]</span>` → Your LinkedIn username (e.g., "john_doe")

**To remove a social link:**
- Delete the entire `<a>` tag for that platform (e.g., remove Substack if you don't use it)

### Step 3: Add Your Projects

**For each project (maximum 4 projects by default):**

1. **Add Images to Assets Folder:**
   - Go to `assets/project-1/` folder
   - Add at least `image-1.png` (1200x800px minimum)
   - Add at least `image-2.png` (1200x800px minimum)
   - These same images appear on both homepage and project page
   - **You can add more images beyond these 2 minimum** - just update the project page HTML to include them

2. **Add Video (Optional):**
   - Add `project-1.mp4` to `assets/project-1/` folder (or any name you prefer)
   - Video is shown on the project detail page only
   - Format: MP4, 1920x1080px, 30-120 seconds recommended (can be longer/shorter)
   - **You can add multiple videos or none at all** - it's completely optional

3. **Update Homepage Gallery:**
   - In `index.html`, find the project gallery section (around line 57)
   - Replace `[PROJECT 1 NAME]` with your project name
   - Update tech stack descriptions (e.g., `[Tech Stack • Listed • Here]`)
   - Update brief descriptions (e.g., `[Brief Description]`)

4. **Update Project Detail Page:**
   - Open `project-1/index.html`
   - Replace all `[PROJECT 1 NAME]` placeholders with your project name
   - Replace all `[INSERT YOUR...]` placeholders with your project details
   - Update the "See the Code" link with your GitHub URL
   - Update the "See Live" link with your demo URL (or remove if you don't have one)

5. **Repeat for projects 2, 3, and 4**

### Step 4: Add Branding Assets

Add to `assets/` folder:
- **`web-logo.png`** (512x512px) - Favicon shown in browser tab
- **`social-share.png`** (1200x630px) - Image shown when sharing on social media
- **`resume.pdf`** - Your resume file

### Step 5: Update Configuration Files

**⚠️ IMPORTANT: All SEO files currently contain example URLs from the template demo (https://prince-portfolio-template.netlify.app/). You MUST replace these with your actual website URLs when customizing.**

1. **`sitemap.xml`**:
   - Replace all `https://prince-portfolio-template.netlify.app/` URLs with your actual domain
   - Update all 5 URLs (homepage + 4 project pages)
   - The template currently shows example URLs - replace them with your domain

2. **`robots.txt`**:
   - Replace `https://prince-portfolio-template.netlify.app/sitemap.xml` with your actual sitemap URL
   - Format: `Sitemap: [YOUR DOMAIN]/sitemap.xml`

3. **`index.html` and all project pages** (`project-1/index.html`, etc.):
   - Update all meta tags containing `https://prince-portfolio-template.netlify.app/`:
     - `rel="canonical"` href
     - `og:url` (Open Graph URL)
     - `og:image` (must be absolute URL with your domain)
     - `twitter:url`
     - `twitter:image` (must be absolute URL with your domain)
     - JSON-LD structured data `url` field
   - Search for `prince-portfolio-template.netlify.app` to find all instances

4. **`netlify.toml`**:
   - Only update if you have a custom domain
   - Uncomment and update the redirect rules if needed

### Step 6: Deploy

Deploy to:
- **Netlify**: Drag and drop the folder, or connect to GitHub
- **Vercel**: Import from GitHub or use CLI
- **GitHub Pages**: Enable in repository settings

## 📋 Media Requirements

**Minimum Requirements:**
- **2 images per project** (minimum) - You can add more images if needed
- **1 video per project** (optional) - You can add multiple videos or none at all
- **2 branding images** (favicon + social share)
- **1 resume PDF**

**Recommended Specifications:**
- **Project Images**: 1200x800px minimum, PNG or JPG (can be larger or different aspect ratios)
- **Videos**: MP4 format (H.264 codec), 1920x1080px, 30-120 seconds (can be longer/shorter)
- **Favicon**: 512x512px PNG
- **Social Share**: 1200x630px PNG

**File Naming:**
- Minimum images must be named: `image-1.png` and `image-2.png`
- Videos can be named: `project-X.mp4` (where X is 1-4) or any name you prefer
- Place files in: `assets/project-X/` folder
- You can add additional images beyond the minimum 2 per project

## 🎨 Customization Guide

### Changing Colors

Edit CSS variables in `styles.css` (around line 56):

```css
:root {
    --bg-primary: #f5f5f5;      /* Main background */
    --bg-secondary: #e8e8e8;    /* Secondary background */
    --text-primary: #2d2d2d;    /* Main text color */
    --text-secondary: #5a5a5a;  /* Secondary text color */
}
```

### Changing Fonts

1. Update font link in `index.html` (line 31) - get from Google Fonts
2. Update font-family in `styles.css` (line 70) and Tailwind config (line 34)

### Changing Welcome Text Animation

Edit `script.js` (around line 54):

```javascript
const flipWords = ["GALLERY", "ARCHIVE", "CANVAS", "STUDIO"];
```

Change the words to match your theme.

### Adding/Removing Projects

**Maximum 4 projects supported by default.**

To add:
1. Copy a project folder (e.g., `project-1`) and rename it
2. Add 2 images to `assets/[new-project-folder]/`
3. Add 2 image entries to homepage gallery in `index.html`
4. Add project URL to `sitemap.xml`

To remove:
1. Delete project folder (e.g., `project-3`)
2. Remove 2 image entries from homepage gallery in `index.html`
3. Remove project URL from `sitemap.xml`

## 🔍 How To Find All Placeholders

**Search for these strings in your codebase:**
- `[INSERT YOUR` → Finds all personal information placeholders
- `[PROJECT` → Finds all project name placeholders
- `prince-portfolio-template.netlify.app` → Finds all example SEO URLs that need to be replaced with your domain
- `TODO:` → Finds helpful comments and guidance

**Use your editor's Find feature (Ctrl+F / Cmd+F) to search for these.**

## 🐛 Troubleshooting

**Images not loading?**
- Check file paths match exactly (case-sensitive: `image-1.png` not `Image-1.png`)
- Verify images are in correct folders: `assets/project-X/`
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

**Links broken?**
- Verify folder names match exactly: `project-1`, `project-2`, etc.
- Check URLs don't have extra slashes: `/project-1` not `/project-1/`
- Test links by clicking them

**Styling looks wrong?**
- Make sure `styles.css` is loading (check browser console)
- Clear browser cache
- Verify Tailwind CSS CDN is loading (check network tab)

**Social media links not working?**
- Verify URLs are complete: `https://linkedin.com/in/username` not just `username`
- Check if links open in new tab (should have `target="_blank"`)
- Test links manually by copying URL

**Project pages not found?**
- Make sure project folders are named exactly: `project-1`, `project-2`, etc.
- Verify each folder has an `index.html` file inside
- Check `sitemap.xml` has correct URLs

## 📝 Important Notes

1. **Template supports maximum 4 projects by default** - You can modify to support more if needed
2. **Minimum 2 images per project** - You can add more images beyond the minimum
3. **Same images used twice** - Homepage gallery and project page gallery use the same images
4. **Usernames are visible** - Social media buttons show your username in the text
5. **Links are separate** - Username text and link URL are independent - update both
6. **Search for placeholders** - Use Find (`[INSERT YOUR`) to find everything that needs updating
7. **Project folders must match** - Folder names (`project-1`) must match URLs in `index.html` (`/project-1`)

## 🎯 SEO Checklist

Before deploying, verify:
- [ ] All meta tags filled in `index.html`
- [ ] **All example URLs replaced** - Search for `prince-portfolio-template.netlify.app` and replace with your domain
- [ ] Open Graph images set correctly (`og:image` tags must use absolute URLs with your domain)
- [ ] `sitemap.xml` includes all pages with your actual domain URLs
- [ ] `robots.txt` configured correctly with your actual sitemap URL
- [ ] All image `alt` attributes are descriptive
- [ ] Canonical URLs are set correctly in all pages (use your domain, not example URLs)
- [ ] JSON-LD structured data includes your information and your actual website URL

---

This template is designed as a "fill-in form" - search for `[INSERT YOUR...]` placeholders in HTML files to find what needs updating. Just replace the placeholders with your information and you're ready to go!
