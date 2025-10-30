import Link from "next/link";

export default function Privacy() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Last updated: December 2024
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This Privacy Policy describes how slightlyprivate.com (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;)
                collects, uses, and protects your information when you visit my website.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                I am committed to protecting your privacy and being transparent about how
                I handle your data.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Information I Collect</h2>

              <h3 className="text-xl font-semibold mb-3">Information You Provide</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li>Contact information when you reach out via email</li>
                <li>Any information you voluntarily provide in communications</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Basic analytics data (page views, referrer information)</li>
                <li>Device and browser information</li>
                <li>IP address and general location data</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">How I Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>To respond to your inquiries and communications</li>
                <li>To improve the website and user experience</li>
                <li>To understand how visitors interact with the site</li>
                <li>To detect and prevent technical issues</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I do not sell, trade, or rent your personal information to third parties.
                I may share information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect my rights and safety</li>
                <li>With service providers who help operate the website (with appropriate safeguards)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I implement appropriate security measures to protect your information against
                unauthorized access, alteration, disclosure, or destruction. These include:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure hosting infrastructure</li>
                <li>Regular security updates and monitoring</li>
                <li>Limited access to personal information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This website may use cookies and similar technologies for:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                <li>Essential website functionality</li>
                <li>Analytics and performance monitoring</li>
                <li>Remembering your preferences</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This website may use third-party services such as:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                <li>Web hosting providers</li>
                <li>Analytics services</li>
                <li>Email services for communications</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                These services have their own privacy policies, and I encourage you to review them.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Access the personal information I have about you</li>
                <li>Request corrections to your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent for data processing</li>
                <li>Data portability (where applicable)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or how your data is handled,
                please contact me at:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  Email: <a href="mailto:contact@slightlyprivate.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@slightlyprivate.com</a>
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                I may update this Privacy Policy from time to time. Any changes will be posted
                on this page with an updated &quot;Last updated&quot; date. I encourage you to review
                this policy periodically for any changes.
              </p>
            </section>

            <section className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-3">Quick Summary</h2>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• I collect minimal personal information</li>
                <li>• I don&apos;t sell or share your data with third parties</li>
                <li>• I use standard security practices to protect your information</li>
                <li>• You can contact me anytime with questions or requests</li>
                <li>• This is a personal website with basic analytics</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t px-6 py-8">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Matt H. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy" className="hover:underline font-medium">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}