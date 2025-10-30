"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Resume() {
  const [pdfBlocked, setPdfBlocked] = useState(false);
  const [showHtml, setShowHtml] = useState(false);

  useEffect(() => {
    // Check if PDF viewing is available
    const checkPdfSupport = () => {
      // Simple check - in a real scenario, you'd have an actual PDF file
      // For now, we'll simulate PDF availability
      const hasPlugins = navigator.plugins && navigator.plugins.length > 0;
      setPdfBlocked(!hasPlugins || !window.navigator.pdfViewerEnabled);
    };

    checkPdfSupport();
  }, []);

  const resumeData = {
    name: "Matt H.",
    title: "Software Developer",
    email: "contact@slightlyprivate.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "whoami.slightlyprivate.com",

    summary: "Passionate software developer with 5+ years of experience building scalable web applications. Expertise in modern JavaScript frameworks, cloud technologies, and agile development practices.",

    experience: [
      {
        title: "Senior Software Developer",
        company: "Tech Innovators Inc.",
        location: "San Francisco, CA",
        duration: "Jan 2022 - Present",
        achievements: [
          "Led development of a customer portal serving 10,000+ users, resulting in 30% increased user engagement",
          "Architected and implemented microservices infrastructure using Node.js and Docker",
          "Mentored junior developers and established code review processes",
          "Reduced application load time by 40% through performance optimization"
        ]
      },
      {
        title: "Full Stack Developer",
        company: "Digital Solutions LLC",
        location: "San Francisco, CA",
        duration: "Jun 2020 - Dec 2021",
        achievements: [
          "Developed and maintained multiple client websites using React and Next.js",
          "Integrated third-party APIs and payment systems (Stripe, PayPal)",
          "Collaborated with design team to implement pixel-perfect UI components",
          "Participated in agile development process and sprint planning"
        ]
      },
      {
        title: "Junior Web Developer",
        company: "StartupXYZ",
        location: "San Francisco, CA",
        duration: "Aug 2019 - May 2020",
        achievements: [
          "Built responsive landing pages and marketing websites",
          "Assisted in debugging and testing web applications",
          "Learned modern development workflows and version control with Git",
          "Contributed to company's internal tools and automation scripts"
        ]
      }
    ],

    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "University of California, Berkeley",
        duration: "2015 - 2019",
        details: "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development"
      }
    ],

    skills: {
      "Programming Languages": ["JavaScript", "TypeScript", "Python", "HTML/CSS"],
      "Frameworks & Libraries": ["React", "Next.js", "Vue.js", "Node.js", "Express"],
      "Databases": ["PostgreSQL", "MongoDB", "Redis"],
      "Tools & Technologies": ["Git", "Docker", "AWS", "Vercel", "Jest", "GraphQL"],
      "Design": ["Figma", "Adobe Creative Suite", "Responsive Design", "UI/UX"]
    },

    projects: [
      {
        name: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration",
        tech: "Next.js, Stripe, PostgreSQL"
      },
      {
        name: "Task Management App",
        description: "Real-time collaborative task management with drag-and-drop",
        tech: "React, Socket.io, MongoDB"
      }
    ]
  };

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
            <Link href="/resume" className="hover:underline font-medium">
              Resume
            </Link>
          </div>
        </div>
      </nav>

      <main className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">My Resume</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Download or view my professional experience
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-0">
              <a
                href="/resume.pdf"
                download="Matt_Hall_Resume.pdf"
                className="bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:opacity-80 transition-opacity text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
              </a>
              <button
                onClick={() => setShowHtml(!showHtml)}
                className="border border-foreground px-6 py-3 rounded-lg font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                {showHtml ? "Hide" : "View"} HTML Version
              </button>
            </div>
          </div>

          {/* PDF Viewer Section */}
          <div className="mb-8">
            {!pdfBlocked && !showHtml ? (
              <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    📄
                  </div>
                  <h3 className="text-xl font-semibold mb-2">PDF Preview</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    PDF viewer would be embedded here in a real implementation.
                    For now, please download the PDF or view the HTML version below.
                  </p>
                  <div className="text-sm text-gray-500">
                    Note: This is a placeholder. In production, you would embed the actual PDF here.
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {/* HTML Fallback */}
          {(pdfBlocked || showHtml) && (
            <div className="resume-html bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8 shadow-lg">
              {/* Header */}
              <header className="text-center pb-8 border-b border-gray-200 dark:border-gray-700 mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {resumeData.name}
                </h1>
                <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  {resumeData.title}
                </h2>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>{resumeData.email}</span>
                  <span>•</span>
                  <span>{resumeData.phone}</span>
                  <span>•</span>
                  <span>{resumeData.location}</span>
                  <span>•</span>
                  <span>{resumeData.website}</span>
                </div>
              </header>

              {/* Summary */}
              <section className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                  Professional Summary
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {resumeData.summary}
                </p>
              </section>

              {/* Experience */}
              <section className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
                  Experience
                </h3>
                {resumeData.experience.map((job, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {job.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {job.company} • {job.location}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-500 md:text-right">
                        {job.duration}
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm leading-relaxed">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              {/* Education */}
              <section className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
                  Education
                </h3>
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                          {edu.details}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-500">
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </section>

              {/* Skills */}
              <section className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
                  Technical Skills
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(resumeData.skills).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {category}
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {skills.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects */}
              <section>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
                  Notable Projects
                </h3>
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {project.name}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                      {project.description}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      Technologies: {project.tech}
                    </p>
                  </div>
                ))}
              </section>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t px-6 py-8">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Matt H.. All rights reserved.</p>
          <Link href="/privacy" className="hover:underline mt-2 inline-block">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}