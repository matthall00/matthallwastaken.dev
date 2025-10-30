import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features include user authentication, product management, and secure payments.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current conditions and forecasts with interactive charts and location-based services.",
    tech: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Blog CMS",
    description: "A headless content management system for blogs with markdown support, SEO optimization, and admin dashboard.",
    tech: ["Nuxt.js", "Strapi", "GraphQL", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing responsive design, smooth animations, and optimized performance.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    github: "#",
    live: "#",
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with private messaging, group chats, file sharing, and emoji support.",
    tech: ["React", "Firebase", "WebRTC", "Material-UI"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Matt H.
          </Link>
          <div className="flex gap-6">
            <Link href="/projects" className="hover:underline font-medium">
              Projects
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/resume" className="hover:underline">
              Resume
            </Link>
          </div>
        </div>
      </nav>

      <main className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            A showcase of my recent work and side projects
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-foreground hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.live}
                    className="text-foreground hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t px-6 py-8">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Matt H. All rights reserved.</p>
          <Link href="/privacy" className="hover:underline mt-2 inline-block">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}