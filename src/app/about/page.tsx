import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Matt H.
          </Link>
          <div className="flex gap-6">
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
            <Link href="/about" className="hover:underline font-medium">
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>

          {/* Bio Section */}
          <section className="mb-16">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                Hello! I&apos;m Matt H., a passionate software developer with a love for creating
                digital experiences that make a difference. With over 5 years of experience in
                web development, I specialize in building modern, scalable applications using
                the latest technologies.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                My journey in software development began during my computer science studies,
                where I discovered my passion for problem-solving and creating solutions that
                help people. Since then, I&apos;ve worked with startups and established companies,
                contributing to projects that have impacted thousands of users.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400">
                When I&apos;m not coding, you can find me exploring new technologies, contributing
                to open-source projects, or enjoying the outdoors. I believe in continuous
                learning and staying up-to-date with the ever-evolving tech landscape.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">My Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-3 text-2xl">🎯</span>
                  Quality First
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I believe in writing clean, maintainable code and following best practices.
                  Quality is never an accident; it&apos;s always the result of intelligent effort.
                </p>
              </div>

              <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-3 text-2xl">🚀</span>
                  Innovation
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I&apos;m always exploring new technologies and methodologies to solve problems
                  more efficiently and create better user experiences.
                </p>
              </div>

              <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-3 text-2xl">🤝</span>
                  Collaboration
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Great software is built by great teams. I value open communication,
                  knowledge sharing, and working together towards common goals.
                </p>
              </div>

              <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-3 text-2xl">📈</span>
                  Growth Mindset
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I embrace challenges as opportunities to learn and grow. Every project
                  is a chance to improve and expand my skills.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>React / Next.js</li>
                  <li>Vue.js / Nuxt.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>HTML5 / CSS3</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Backend</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>GraphQL</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Git / GitHub</li>
                  <li>Docker</li>
                  <li>AWS / Vercel</li>
                  <li>Jest / Testing</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </section>
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