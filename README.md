# matthallwastaken.dev

A modern personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏠 **Home**: Hero section with tagline, CTA buttons, and service highlights
- 📂 **Projects**: Grid layout showcasing portfolio projects with tech stacks
- 👤 **About**: Personal bio, values, and technical skills
- 📧 **Contact**: Contact information with mailto links and quick actions
- 📄 **Resume**: PDF serving with HTML fallback for accessibility
- 🔒 **Privacy**: Comprehensive privacy policy page
- 🌙 **Dark Mode**: Automatic dark/light mode support
- 📱 **Responsive**: Mobile-first responsive design
- ⚡ **Performance**: Optimized for speed and SEO

## Tech Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Emoji-based icons for lightweight design
- **Deployment**: Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/matthall00/matthallwastaken.dev.git
cd matthallwastaken.dev
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

### Development
```bash
npm run dev          # Start development server with Turbopack
```

### Building
```bash
npm run build        # Create production build
npm run start        # Start production server
```

### Code Quality
```bash
npm run lint         # Run ESLint for code quality checks
```

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx        # About page with bio and values
│   ├── contact/
│   │   └── page.tsx        # Contact page with links
│   ├── privacy/
│   │   └── page.tsx        # Privacy policy page
│   ├── projects/
│   │   └── page.tsx        # Projects showcase page
│   ├── resume/
│   │   └── page.tsx        # Resume with PDF/HTML versions
│   ├── favicon.ico         # Site favicon
│   ├── globals.css         # Global styles and Tailwind config
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page with hero section
public/
├── resume.pdf              # Resume PDF file
└── [other static assets]
```

## Customization

### Personal Information
Update the following files with your personal information:

1. **src/app/layout.tsx** - Site metadata and title
2. **src/app/page.tsx** - Hero section content and highlights
3. **src/app/about/page.tsx** - Bio, values, and skills
4. **src/app/contact/page.tsx** - Contact information and links
5. **src/app/projects/page.tsx** - Project portfolio data
6. **src/app/resume/page.tsx** - Resume data and information
7. **public/resume.pdf** - Replace with your actual resume PDF

### Styling
- Colors and themes can be modified in `src/app/globals.css`
- Component styles use Tailwind CSS classes
- Dark mode is handled automatically via CSS variables

## Deployment

### Vercel (Recommended)
The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be deployed and available at a `.vercel.app` URL
5. Optionally, configure a custom domain in the Vercel dashboard

### Manual Deployment
For other hosting providers:

1. Build the application:
```bash
npm run build
```

2. The `out` folder contains the static files ready for deployment
3. Upload the contents to your hosting provider
4. Configure your server to serve the files

### Environment Variables
If you need environment variables:

1. Create a `.env.local` file in the root directory
2. Add your variables:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

3. Use them in your components:
```javascript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
```

## Browser Support

This site supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The site is optimized for performance with:
- Static site generation (SSG) where possible
- Automatic code splitting
- Image optimization
- CSS optimization
- Minimal JavaScript bundle size

## Accessibility

The site follows web accessibility best practices:
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help with customization:
- Open an issue on GitHub
- Contact: hello@matthallwastaken.dev

---

Built with ❤️ using Next.js and Tailwind CSS
