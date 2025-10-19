# Satvik Gedam - Professional Portfolio

A modern, responsive portfolio website showcasing professional journey as an AI Software Developer at Cetas Healthcare. Built with Next.js 15, TypeScript, and Tailwind CSS with dynamic content management.

## 🚀 Features

### ✨ **Dynamic Content System**
- **Auto-updating copyright year** - No more manual year updates
- **Dynamic metadata & SEO** - Automatically generated from data files
- **Smart project status colors** - Consistent styling across all projects
- **Experience duration calculations** - Automatic "Present" detection and duration formatting

### 🎨 **Design & User Experience**
- **Modern Design**: Clean, professional layout with subtle animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **Interactive Elements**: Smooth scrolling, hover effects, animated taglines
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Performance**: Optimized loading with Next.js 15 and efficient bundle splitting

### 📱 **Content Management**
- **Data-driven**: All content stored in separate TypeScript files
- **Easy Updates**: Change content without touching component code
- **Type Safety**: Full TypeScript implementation with strict type checking
- **Scalable**: Add new sections by creating new data files

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.5 with App Router and Turbopack
- **Language**: TypeScript 5.x with strict type checking
- **Styling**: Tailwind CSS 4.x with custom animations
- **Fonts**: Geist Sans & Geist Mono for optimal readability
- **Runtime**: React 19.1.0 with modern hooks

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

## 📁 Data Structure

All portfolio content is stored in separate TypeScript files in `src/app/data/`:

```
src/app/data/
├── heroData.ts           # Hero section content
├── aboutData.ts          # About section content
├── skillsData.ts        # Skills and expertise
├── experienceData.ts    # Professional experience
├── projectsData.ts      # Featured projects
├── educationData.ts     # Education background
├── certificationsData.ts # Certifications
├── awardsData.ts        # Awards and recognition
├── contactData.ts       # Contact information
└── navigationData.ts    # Navigation menu
```

## 🔧 How to Update Content

### **Quick Updates**

**Update Your Current Role**:
1. Open `src/app/data/heroData.ts`
2. Update the `taglines` array with your new role
3. Save the file - changes appear immediately!

**Add a New Project**:
1. Open `src/app/data/projectsData.ts`
2. Add a new project object to the `projects` array
3. Save the file

**Update Your Skills**:
1. Open `src/app/data/skillsData.ts`
2. Add new skills to existing categories or create new categories
3. Save the file

### **Detailed Update Examples**

#### **Hero Section** (`heroData.ts`)
```typescript
export const heroData = {
  name: "Your Name",
  taglines: [
    "Your Current Role @ Company",
    "Your Specialization",
    "Your Expertise",
    "Your Unique Value"
  ],
  description: "Your professional summary...",
  ctaButtons: {
    primary: { text: "Get In Touch", href: "#contact" },
    secondary: { text: "LinkedIn", href: "https://linkedin.com/in/your-profile", external: true }
  }
};
```

#### **Projects Section** (`projectsData.ts`)
```typescript
export const projectsData = {
  title: "Featured Projects",
  projects: [
    {
      title: "Project Name",
      description: "Project description...",
      technologies: ["Tech 1", "Tech 2"],
      status: "Completed" // or "In Progress" or "Award Winner"
    }
  ]
};
```

#### **Experience Section** (`experienceData.ts`)
```typescript
export const experienceData = {
  title: "Professional Experience",
  companies: [
    {
      name: "Company Name",
      duration: "2 yrs 1 mo",
      location: "Remote",
      roles: [
        {
          title: "Job Title",
          employmentType: "Full-time",
          period: "May 2025 - Present · 6 mos",
          location: "City, State",
          summary: "Brief job summary...",
          description: ["Detailed bullet point 1", "Detailed bullet point 2"],
          skills: ["Skill 1", "Skill 2", "Skill 3"]
        }
      ]
    }
  ]
};
```

## 🎯 Dynamic Features

### **Automatic Updates**
- **Copyright Year**: Updates automatically every January 1st
- **Metadata**: SEO data stays current with your information
- **Project Status**: Colors update based on project status
- **Experience Duration**: Calculates automatically

### **Smart Utilities**
- **Date Calculations**: Automatic year, duration, and relative time calculations
- **Status Colors**: Consistent project status styling
- **Experience Formatting**: Automatic "Present" detection and duration formatting
- **Metadata Generation**: Dynamic SEO optimization

## 🚀 Deployment Options

### **Vercel (Recommended)**
```bash
npm i -g vercel
vercel
```

### **GitHub Pages**
1. Enable GitHub Pages in repository settings
2. Create `.github/workflows/deploy.yml`:
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

## 📊 Performance

- **Lighthouse Scores**: 90+ for Performance, Accessibility, Best Practices, and SEO
- **Load Times**: <3 seconds across all devices
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Images**: Automatic optimization with Next.js Image component

## 🎨 Design System

### **Colors**
- Primary: Blue (#3B82F6)
- Secondary: Gray (#6B7280)
- Accent: Light Blue (#DBEAFE)
- Text: Dark Gray (#111827)

### **Typography**
- Headings: Font-semibold, text-xl
- Body: Leading-relaxed
- Buttons: Text-sm, font-medium

### **Responsive Breakpoints**
- Desktop: 1200px+
- Tablet: 768px-1199px
- Mobile: 320px-767px

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run export       # Export static site for GitHub Pages
```

## 📞 Contact

- **Email**: satvikricky777@gmail.com
- **LinkedIn**: [linkedin.com/in/satvik-gedam-2a2866295](https://www.linkedin.com/in/satvik-gedam-2a2866295/)
- **Location**: Pune, Maharashtra, India

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

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

*Last updated: October 2025*
