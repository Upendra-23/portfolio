import { Mail, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-zinc-950 modern:bg-emerald-50">
      <Reveal className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white modern:text-stone-800">
          Get in Touch
          <span className="block w-10 h-1 mx-auto mt-3 bg-netflix dark:bg-netflix modern:bg-emerald-500" />
        </h2>
        <p className="mt-8 mb-12 max-w-md mx-auto text-gray-500 dark:text-zinc-500 modern:text-stone-500">
          Have a question, opportunity, or just want to say hi? Feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://github.com/${profile.github.split('/').pop()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded text-sm font-medium border bg-gray-100 dark:bg-zinc-900 modern:bg-stone-100 border-gray-200 dark:border-zinc-800 modern:border-stone-200 hover:border-gray-400 dark:hover:border-zinc-600 modern:hover:border-emerald-400 hover:bg-gray-200 dark:hover:bg-zinc-800 modern:hover:bg-stone-200 hover:shadow-xl dark:hover:shadow-xl"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '800px',
              transform: 'perspective(800px) rotateY(0deg) translateZ(0px)',
              transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, background-color 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'perspective(800px) rotateY(-3deg) translateZ(15px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'perspective(800px) rotateY(0deg) translateZ(0px)' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href={`https://linkedin.com/in/${profile.linkedin.split('/').pop()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded text-sm font-medium border border-netflix/30 dark:border-netflix/30 modern:border-emerald-500/30 text-netflix dark:text-netflix modern:text-emerald-600 bg-netflix/5 dark:bg-netflix/10 modern:bg-emerald-500/10 hover:bg-netflix/10 dark:hover:bg-netflix/20 modern:hover:bg-emerald-500/20 hover:border-netflix/50 dark:hover:border-netflix/50 modern:hover:border-emerald-500/50 hover:shadow-xl dark:hover:shadow-xl"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '800px',
              transform: 'perspective(800px) rotateY(0deg) translateZ(0px)',
              transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, background-color 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'perspective(800px) rotateY(-3deg) translateZ(15px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'perspective(800px) rotateY(0deg) translateZ(0px)' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 px-6 py-3 rounded text-sm font-medium border bg-gray-100 dark:bg-zinc-900 modern:bg-stone-100 border-gray-200 dark:border-zinc-800 modern:border-stone-200 hover:border-gray-400 dark:hover:border-zinc-600 modern:hover:border-emerald-400 hover:bg-gray-200 dark:hover:bg-zinc-800 modern:hover:bg-stone-200 hover:shadow-xl dark:hover:shadow-xl"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '800px',
              transform: 'perspective(800px) rotateY(0deg) translateZ(0px)',
              transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, background-color 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'perspective(800px) rotateY(-3deg) translateZ(15px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'perspective(800px) rotateY(0deg) translateZ(0px)' }}
          >
            <Mail size={18} />
            Email
          </a>
          <div className="flex items-center gap-2 px-6 py-3 text-sm text-gray-400 dark:text-zinc-600 modern:text-stone-400">
            <MapPin size={16} />
            {profile.location}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
