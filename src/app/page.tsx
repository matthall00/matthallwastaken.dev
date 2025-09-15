import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Matt Hall
          </Link>
          <div className="flex gap-6">
            <Link href="/projects" className="hover:underline">
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

      {/* Hero Section */}
      <main className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <section className="text-center py-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Software Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
              Building modern web applications with clean code and thoughtful design. 
              Passionate about creating solutions that make a difference.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link
                href="/projects"
                className="bg-foreground text-background px-8 py-3 rounded-full font-medium hover:opacity-80 transition-opacity"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="border border-foreground px-8 py-3 rounded-full font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </section>

          {/* Highlights Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  💻
                </div>
                <h3 className="text-xl font-semibold mb-3">Full-Stack Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Building scalable web applications with modern frameworks and best practices.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🎨
                </div>
                <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Creating intuitive and beautiful user interfaces that enhance user experience.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  ⚡
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Optimizing applications for speed, accessibility, and superior user experience.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t px-6 py-8">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Matt Hall. All rights reserved.</p>
          <Link href="/privacy" className="hover:underline mt-2 inline-block">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
