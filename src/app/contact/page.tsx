import Link from "next/link";

export default function Contact() {
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
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline font-medium">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            I&apos;m always interested in new opportunities and interesting projects.
            Let&apos;s connect and discuss how we can work together!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Links */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center text-xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:contact@slightlyprivate.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors"
                    >
                      contact@slightlyprivate.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center text-xl">
                    💼
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/matthall"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors"
                    >
                      linkedin.com/in/matthall
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center text-xl">
                    🐙
                  </div>
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <a
                      href="https://github.com/slightlyprivate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors"
                    >
                      github.com/slightlyprivate
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center text-xl">
                    🐦
                  </div>
                  <div>
                    <h3 className="font-semibold">Twitter</h3>
                    <a
                      href="https://twitter.com/matthalldev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors"
                    >
                      @matthalldev
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <a
                  href="mailto:contact@slightlyprivate.com?subject=Project Inquiry&body=Hi Matt,%0D%0A%0D%0AI'd like to discuss a project with you.%0D%0A%0D%0AProject details:%0D%0A- %0D%0A- %0D%0A- %0D%0A%0D%0ATimeline:%0D%0ABudget:%0D%0A%0D%0AThanks!"
                  className="block w-full bg-foreground text-background px-6 py-4 rounded-lg text-center font-medium hover:opacity-80 transition-opacity"
                >
                  Send Project Inquiry
                </a>

                <a
                  href="mailto:contact@slightlyprivate.com?subject=Collaboration Opportunity&body=Hi Matt,%0D%0A%0D%0AI'd like to explore a collaboration opportunity with you.%0D%0A%0D%0ADetails:%0D%0A%0D%0ABest regards,"
                  className="block w-full border border-foreground px-6 py-4 rounded-lg text-center font-medium hover:bg-foreground hover:text-background transition-colors"
                >
                  Collaboration Inquiry
                </a>

                <a
                  href="mailto:contact@slightlyprivate.com?subject=Just Saying Hi&body=Hi Matt,%0D%0A%0D%0AJust wanted to reach out and say hi!%0D%0A%0D%0A"
                  className="block w-full border border-foreground px-6 py-4 rounded-lg text-center font-medium hover:bg-foreground hover:text-background transition-colors"
                >
                  Just Say Hi 👋
                </a>
              </div>

              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  I typically respond to emails within 24-48 hours. For urgent matters,
                  please mention &quot;URGENT&quot; in the subject line.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Start a Project?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Whether you have a specific project in mind or just want to explore possibilities,
              I&apos;d love to hear from you.
            </p>
            <a
              href="mailto:contact@slightlyprivate.com"
              className="inline-flex items-center bg-foreground text-background px-8 py-3 rounded-full font-medium hover:opacity-80 transition-opacity"
            >
              Start a Conversation →
            </a>
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