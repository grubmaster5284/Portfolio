Product Requirements Document (PRD)
Product: Satvik Gedam Portfolio Website

Date: October 13, 2025

1. Overview
The portfolio website showcases Satvik Gedam's professional journey as a Python Developer Intern at Cetas Healthcare, highlighting accomplishments, education, and technical expertise with a focus on modern, visually appealing design. It enables employers and visitors to quickly grasp Satvik's Python development skills, healthcare technology experience, and unique value proposition in software development.

Goals:

Present a modern, interactive, and memorable professional brand.

Make key Python development expertise, healthcare technology experience, and skills easily accessible.

Motivate recruiters to contact or hire Satvik by showcasing software development credibility and innovative healthcare solutions.

2. Target Audience
Software Development Recruiters & HR personnel (tech industry)

Python Development hiring managers & team leads

Healthcare Technology teams and software engineers

Startup founders and technical leads in healthcare tech

Professional software development network and collaborators

3. Functional Requirements
3.1. Hero Section
Prominently displays full name and professional tagline.

Animated/interchangeable sub-taglines.

CTA Buttons – Resume (PDF), LinkedIn profile, Email.

Modern gradient background with subtle animations for visual appeal.

3.2. About Me Section
Comprehensive personal and professional introduction.

Highlight current role at Cetas Healthcare and academic background.

Showcase passion for cybersecurity, software development, and gaming.

Include journey through hackathons, IoT projects, and continuous learning.

3.3. Experience Section
Chronological/interactive timeline (vertical on desktop, horizontal/carousel on mobile).

Cards/blocks for each job, internship, certification, and major project.

Hover/click reveals for deeper details (role, impact, skills used, links to certificates).

Prominently feature most recent/important experiences at the top.

3.4. Education Section
Academic background displayed as cards or a simple vertical/horizontal list.

For each institution: degree, field, institution name, years, notable achievements.

Optionally, downloadable certificates or links to verifiable credentials.

3.5. Skills Section
Interactive skill cards with hover effects.

Categorize skills: Programming Languages, Cloud Platforms, Development Tools.

Visual progress indicators or proficiency levels.

3.6. Projects Section
Featured project cards with descriptions and technologies used.

Links to GitHub repositories or live demos.

Visual project showcases with screenshots or mockups.

3.7. Responsive Design
Website must work flawlessly on desktop, tablet, and mobile.

Navigation adapts to device (e.g., hamburger menu on mobile).

3.8. Visual & Interaction Requirements
Minimalist color palette (e.g., white background, bold accent for highlights).

Enhanced animations and micro-interactions:
- Hero section: Animated background particles, typewriter effect for taglines, floating elements
- Buttons: Ripple effects, hover transformations, pulse animations
- Timeline: Smooth slide-in animations, progress indicators, interactive hover states
- Cards: 3D hover effects, flip animations, staggered entrance animations
- Scroll effects: Parallax backgrounds, section fade-ins, progress bars
- Loading animations: Skeleton screens, smooth transitions
- Interactive elements: Cursor following effects, magnetic buttons, scroll-triggered animations

3.9. Performance
Fast loading: lightweight images, optimized assets.

Lazy loading for images and content in non-visible sections.

3.10. Accessibility
High color contrast for readability.

Keyboard navigable.

Alt text on all images and icons.

4. Non-Functional Requirements
SEO: Proper meta tags, social preview (Open Graph), sitemap.

Security: Forms (if any) must be protected—no sensitive data storage on site.

Analytics: Basic page view and engagement tracking.

Hosting: GitHub Pages for deployment with automatic builds, custom domain support, and SSL certificates.

5. Content Requirements
5.1. Hero Section
Name: Satvik Gedam

Tagline: "Python Developer Intern @ Cetas Healthcare | Python, API, HTML | AI Generalist"

Sub-taglines: "Healthcare Technology Developer", "Python & API Specialist", "Full-Stack Developer"

Links: Resume PDF, LinkedIn, Email (mailto link)

5.2. About Me Section
"I am a Python Developer Intern at Cetas Healthcare, where I create and maintain web applications and APIs for the healthcare sector. My work involves collaborating with experienced developers, utilizing cloud-based tools like Colab, and developing solutions like patient portals and notification systems. As a final year student (B.Tech, Computer Science Engineering) at SASTRA University, I'm passionate about cybersecurity, software development, and gaming. My journey includes hackathons, IoT projects, and a continuous drive to learn and innovate in tech."

5.3. Skills
Python (Programming Language)
ChatGPT & Generative AI
Software Development
API Development
Google Cloud Platform (GCP)
Web Development (HTML5)
AI Generalist
Amazon Web Services (AWS)
Industrial Internet of Things (IIoT)
Jira

5.4. Experience
Python Developer Intern – Cetas Healthcare (Present)
- Develop web applications and APIs for healthcare sector
- Utilize Colab for collaborative development and testing
- Projects: Patient portal, Notification API integration

Python Developer Contractor – Cetas Healthcare (Jun 2024 – Present)
- Integrating AI in market research applications

5.5. Projects
Machine Learning Techniques for Chronic Kidney Disease Prediction
- Developed a feature-selection model for improved prediction

Enhanced Security using MQTT and TCP (IoT + Java)
- Built an IoT product for real-time environmental alerts via SMS

5.6. Education
B.Tech, Computer Science Engineering, SASTRA University (Final Year)

5.7. Contact
Email: satvikricky777@gmail.com
LinkedIn: linkedin.com/in/satvik-gedam-2a2866295
Location: Pune, Maharashtra, India

5.8. Downloads/Links
Attach, or link to downloadable resume.

Outbound links open in a new tab.

6. Implementation

6.1. Theme Selection & Analysis
After analyzing popular personal website themes from GitHub, the following options were evaluated:

**Top Contenders:**
- **academicpages.github.io** (15.6k stars) - Jekyll-based, academic-focused
- **al-folio** (14.2k stars) - Beautiful Jekyll theme for academics
- **vcard-personal-portfolio** (7.1k stars) - Pure HTML/CSS, responsive
- **react-resume-template** (2.1k stars) - Modern React + TypeScript + Next.js
- **gitprofile** (2.1k stars) - Auto-generates from GitHub profile
- **LiveTerm** (5.3k stars) - Terminal-style design with Next.js

**Recommended Theme: react-resume-template**
- **Why**: Best balance of modern technology, customization, and professional appearance
- **Tech Stack**: React + TypeScript + Next.js + Tailwind CSS
- **Pros**: Highly customizable, excellent performance, modern design, active maintenance
- **Perfect for**: Developers showcasing technical skills with professional aesthetics

**Alternative Recommendations by Use Case:**
- Academic/Research: al-folio or academicpages.github.io
- Quick GitHub-focused: gitprofile or gitfolio
- No frameworks: vcard-personal-portfolio
- Unique terminal aesthetic: LiveTerm

6.2. Tech Stack
**Primary Choice**: React + TypeScript + Next.js + Tailwind CSS (react-resume-template)
**Fallback**: Static HTML/CSS/JS with modern frameworks

Design Approach:
- Modern & Clean: Ample whitespace, crisp sans-serif fonts, clear hierarchy
- Mobile Responsive: Flexible layout, collapsible menu, touch-friendly buttons
- Professional Color Scheme: Subtle blue, grey, and white backgrounds, with accent gradients
- Easy to Navigate: Sticky top nav, clear section anchors, intuitive structure
- Animations/Hover Effects:
  - Fade-in or slide-up for sections as you scroll
  - Subtle hover effects on project and skill cards
  - Animated underline for nav links on hover

Animations:
Enhanced CSS3 animations and JavaScript for attention-grabbing effects:
- Particle systems and floating elements
- Typewriter and text reveal animations
- 3D transforms and perspective effects
- Smooth scroll-triggered animations
- Interactive hover states and micro-interactions
- Loading states and transition effects

Deployment:
GitHub Pages with automatic builds from GitHub repository (as specified in section 8).

7. Success Criteria
Loads in under 1.5 seconds on broadband.

Renders correctly on desktop and mobile.

No more than 2 scrolls to reach contact CTAs.

Visually memorable; unique but recruiter-friendly.

8. Deployment Strategy
Platform: GitHub Pages
- Automatic deployments from GitHub repository
- Custom domain support with SSL certificates
- Global CDN for optimal performance
- Free hosting with professional features
- Easy integration with GitHub workflow

Deployment Workflow:
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (main/master)
4. GitHub automatically builds and deploys to production
5. Provides live URL with SSL certificate

LinkedIn Profile Link: https://www.linkedin.com/in/satvik-gedam-2a2866295/