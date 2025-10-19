# Satvik Gedam - Professional Portfolio

A modern, responsive portfolio website showcasing my professional journey as a Python Developer Intern at Cetas Healthcare. This portfolio demonstrates expertise in healthcare technology, API development, and AI solutions through an interactive, performance-optimized web experience built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

This portfolio serves as a comprehensive digital showcase of my professional capabilities, featuring:
- **Interactive Experience**: Dynamic animations, smooth scrolling, and responsive design
- **Professional Branding**: Clean, modern interface that reflects healthcare technology expertise
- **Performance Optimized**: Built with Next.js 15 for optimal loading speeds and SEO
- **Mobile-First Design**: Fully responsive across all device types
- **Accessibility Focused**: WCAG compliant with keyboard navigation support

## 🚀 Features

### 🎨 Design & User Experience
- **Modern Design**: Clean, professional layout with subtle animations and micro-interactions
- **Responsive Design**: Fully responsive across desktop (1200px+), tablet (768px-1199px), and mobile (320px-767px)
- **Interactive Elements**: Smooth scrolling, hover effects, animated taglines, and dynamic background elements
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Performance**: Optimized loading with Next.js 15, lazy loading, and efficient bundle splitting

### 🔧 Technical Features
- **SEO Optimized**: Comprehensive meta tags, Open Graph support, and structured data
- **Fast Loading**: Server-side rendering, static generation, and optimized assets
- **Type Safety**: Full TypeScript implementation for robust development
- **Modern CSS**: Tailwind CSS with custom animations and responsive utilities
- **Component Architecture**: Modular React components with reusable design patterns

### 📱 Content Management
- **Dynamic Content**: Rotating taglines and animated professional descriptions
- **Project Showcase**: Interactive project cards with technology stacks and status indicators
- **Professional Timeline**: Chronological experience display with detailed descriptions
- **Skills Visualization**: Categorized skill sets with interactive hover effects
- **Contact Integration**: Direct email and LinkedIn integration with professional styling

## 📋 Sections

- **Hero Section**: Compelling introduction with animated taglines
- **About Me**: Professional story and background
- **Skills**: Categorized technical skills and expertise
- **Experience**: Professional work history at Cetas Healthcare
- **Projects**: Featured projects including ML and IoT work
- **Contact**: Professional contact information and links

## 🛠️ Tech Stack

### 🚀 Core Technologies
- **Framework**: Next.js 15.5.5 with App Router and Turbopack
- **Language**: TypeScript 5.x with strict type checking
- **Styling**: Tailwind CSS 4.x with custom animations and responsive design
- **Fonts**: Geist Sans & Geist Mono for optimal readability and performance
- **Runtime**: React 19.1.0 with modern hooks and concurrent features

### 🔧 Development Tools
- **Build Tool**: Next.js with Turbopack for fast development builds
- **Linting**: ESLint 9.x with Next.js configuration
- **Type Checking**: TypeScript with strict mode enabled
- **CSS Processing**: PostCSS with Tailwind CSS integration
- **Package Manager**: npm with lock file for consistent dependencies

### 🌐 Deployment & Hosting
- **Primary**: GitHub Pages with GitHub Actions CI/CD
- **Alternative**: Vercel (recommended for Next.js optimization)
- **Domain**: Custom domain support with SSL certificates
- **CDN**: Global content delivery for optimal performance
- **Analytics**: Built-in support for Google Analytics and performance monitoring

## 🎯 Project Goals & Objectives

### 🎯 Primary Objectives
- **Professional Branding**: Establish a strong digital presence that reflects healthcare technology expertise
- **Career Advancement**: Showcase skills and experience to potential employers and collaborators
- **Technical Demonstration**: Display proficiency in modern web development technologies
- **Networking**: Facilitate professional connections through integrated contact methods

### 📊 Success Metrics
- **Performance**: Achieve Lighthouse scores of 90+ for Performance, Accessibility, Best Practices, and SEO
- **User Experience**: Maintain <3 second load times across all devices and network conditions
- **Professional Impact**: Generate meaningful professional connections and opportunities
- **Technical Showcase**: Demonstrate expertise in Next.js, TypeScript, and modern web development

### 🚀 Future Enhancements
- **Blog Integration**: Add a technical blog section for sharing insights and tutorials
- **Project Deep Dives**: Expand project showcases with detailed case studies
- **Interactive Elements**: Add more dynamic content and user interactions
- **Multi-language Support**: Implement internationalization for global reach
- **Analytics Dashboard**: Add visitor analytics and engagement metrics

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Browser**: Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design Features

- **Color Scheme**: Professional blue and gray palette
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Subtle hover effects and smooth transitions
- **Navigation**: Sticky header with smooth scrolling
- **Accessibility**: High contrast, keyboard navigation support

## 📄 Content

All content is based on the Product Requirements Document (PRD) and includes:
- Professional taglines and descriptions
- Current role at Cetas Healthcare
- Educational background at SASTRA University
- Technical skills and specializations
- Project showcases and achievements
- Contact information and social links

## 🚀 Deployment Options

This project supports multiple deployment strategies optimized for different use cases:

### 🌟 Option 1: Vercel (Recommended)

**Best for**: Production deployment with optimal Next.js performance

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel

# Follow the prompts and your site will be live at:
# https://your-project.vercel.app
```

**Benefits**:
- Zero-configuration deployment
- Automatic HTTPS and CDN
- Preview deployments for branches
- Built-in analytics and monitoring
- Custom domain support

### 📦 Option 2: GitHub Pages

**Best for**: Free hosting with GitHub integration

#### Setup Steps:

1. **Create GitHub Repository**:
   ```bash
   # Initialize git repository
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source
   - Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - run: npm run export
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

3. **Access Your Site**: `https://YOUR_USERNAME.github.io/Portfolio`

### 🐳 Option 3: Docker Deployment

**Best for**: Containerized deployment and scaling

```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build and run
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### ☁️ Option 4: Cloud Providers

**AWS Amplify**:
```bash
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

**Netlify**:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

### 🔧 Configuration for Different Platforms

#### For GitHub Pages:
```typescript
// next.config.ts
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

#### For Vercel:
```typescript
// next.config.ts
const nextConfig = {
  // No special configuration needed
}
```

### 🌐 Custom Domain Setup

1. **Purchase Domain**: Use providers like Namecheap, GoDaddy, or Google Domains
2. **Configure DNS**:
   - For Vercel: Add CNAME record pointing to your Vercel domain
   - For GitHub Pages: Add A records for GitHub's IP addresses
3. **Update Configuration**: Add domain to your hosting platform settings
4. **SSL Certificate**: Automatically provided by modern hosting platforms

## 🛠️ Development Workflow

### 📋 Development Setup

1. **Prerequisites**:
   - Node.js 18+ (recommended: use nvm for version management)
   - npm or yarn package manager
   - Git for version control

2. **Local Development**:
   ```bash
   # Clone repository
   git clone https://github.com/YOUR_USERNAME/Portfolio.git
   cd Portfolio
   
   # Install dependencies
   npm install
   
   # Start development server
   npm run dev
   
   # Open browser to http://localhost:3000
   ```

3. **Development Commands**:
   ```bash
   npm run dev          # Start development server with Turbopack
   npm run build        # Build for production
   npm run start        # Start production server
   npm run lint         # Run ESLint
   npm run export       # Export static site for GitHub Pages
   ```

### 🔧 Code Quality & Standards

- **TypeScript**: Strict type checking enabled for robust development
- **ESLint**: Configured with Next.js best practices and accessibility rules
- **Prettier**: Code formatting for consistent style (recommended)
- **Git Hooks**: Pre-commit hooks for linting and formatting (optional)

### 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Homepage with all components
├── components/          # Reusable React components (future)
├── lib/                 # Utility functions and configurations
└── public/              # Static assets
    ├── images/          # Image assets
    └── icons/           # Icon files
```

### 🚀 Performance Optimization

- **Image Optimization**: Use Next.js Image component for automatic optimization
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Use `npm run build` to analyze bundle size
- **Lighthouse**: Regular performance audits with Chrome DevTools

### 🔄 Git Workflow

```bash
# Feature development
git checkout -b feature/new-section
git add .
git commit -m "Add new section with animations"
git push origin feature/new-section

# Create pull request for review
# Merge to main after approval
```

## 📞 Contact

- **Email**: satvikricky777@gmail.com
- **LinkedIn**: [linkedin.com/in/satvik-gedam-2a2866295](https://www.linkedin.com/in/satvik-gedam-2a2866295/)
- **Location**: Pune, Maharashtra, India

## 📚 Additional Resources

### 🎓 Learning Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

### 🛠️ Useful Tools
- [Vercel](https://vercel.com/) - Recommended hosting platform
- [GitHub Pages](https://pages.github.com/) - Free static hosting
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance auditing
- [Figma](https://figma.com/) - Design and prototyping

### 📈 Performance Monitoring
- **Lighthouse CI**: Automated performance testing
- **Web Vitals**: Core Web Vitals monitoring
- **Analytics**: Google Analytics integration ready
- **Error Tracking**: Sentry integration support

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

*Last updated: December 2024*
