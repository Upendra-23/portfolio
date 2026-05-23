import { Mail, Server, Bot, Network, Cable } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'

const expertise = [
  { icon: Server, label: 'Backend Engineering', desc: 'Java \u00B7 Spring Boot' },
  { icon: Bot, label: 'AI & Automation', desc: 'Agents \u00B7 MCP \u00B7 OpenCode' },
  { icon: Network, label: 'Microservices', desc: 'Distributed Systems' },
  { icon: Cable, label: 'Enterprise Integration', desc: 'Camel \u00B7 Kafka \u00B7 MQ' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-[500px] h-[500px] rounded-full bg-netflix/[0.03] dark:bg-netflix/[0.02] modern:bg-emerald-500/[0.05] blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 w-[500px] h-[500px] rounded-full bg-netflix/[0.03] dark:bg-netflix/[0.02] modern:bg-emerald-500/[0.05] blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          <div className="w-full lg:w-5/12 text-center lg:text-left">
            <Reveal>
              <p className="inline-flex items-center gap-1.5 text-sm font-medium text-netflix dark:text-netflix modern:text-emerald-500 mb-5 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-netflix dark:bg-netflix modern:bg-emerald-500" />
                Based in {profile.location}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-gray-900 dark:text-white modern:text-stone-800 mb-3 whitespace-nowrap">
                {profile.name}
              </h1>

              <p className="text-lg sm:text-xl text-gray-500 dark:text-zinc-400 modern:text-stone-500 mb-1">
                {profile.role}
              </p>
              <p className="text-sm text-gray-400 dark:text-zinc-500 modern:text-stone-400 mb-4">
                at{' '}
                <span className="font-semibold text-netflix dark:text-netflix modern:text-emerald-500">
                  {profile.company}
                </span>
              </p>

              <p className="text-sm leading-relaxed text-gray-400 dark:text-zinc-500 modern:text-stone-400 max-w-md mb-6 mx-auto lg:mx-0">
                {profile.summary.split('.')[0]}.
              </p>

              <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm text-white bg-netflix dark:bg-netflix modern:bg-emerald-500 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <Mail size={15} />
                  Get in Touch
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-netflix/30 dark:border-netflix/30 modern:border-emerald-500/30 text-netflix dark:text-netflix modern:text-emerald-600 bg-netflix/5 dark:bg-netflix/10 modern:bg-emerald-500/10 hover:bg-netflix/10 dark:hover:bg-netflix/20 modern:hover:bg-emerald-500/20 hover:border-netflix/50 dark:hover:border-netflix/50 modern:hover:border-emerald-500/50 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          <div className="w-full lg:w-6/12 lg:ml-auto">
            <Reveal delay={0.2}>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-64 h-64 rounded-full border border-netflix/10 dark:border-netflix/10 modern:border-emerald-500/20" />
                <div className="absolute -bottom-4 -left-4 w-48 h-48 rounded-full border border-netflix/5 dark:border-netflix/[0.08] modern:border-emerald-500/10" />

                <div className="grid grid-cols-2 gap-4 relative">
                  {expertise.map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.label}
                        className="rounded-xl border bg-white dark:bg-zinc-900/60 modern:bg-white border-gray-200 dark:border-zinc-800 modern:border-stone-200 p-5 transition-all duration-300 hover:border-netflix/30 dark:hover:border-netflix/40 modern:hover:border-emerald-500/40"
                        style={{
                          transformStyle: 'preserve-3d',
                          perspective: '1000px',
                          transition: 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'rotateY(-4deg) translateZ(25px)'
                          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'rotateY(0deg) translateZ(0px)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-netflix/10 dark:bg-netflix/20 modern:bg-emerald-500/10 flex items-center justify-center mb-3">
                          <Icon size={20} className="text-netflix dark:text-netflix modern:text-emerald-500" />
                        </div>
                        <h3 className="font-bold text-sm text-gray-900 dark:text-white modern:text-stone-800 mb-1">{item.label}</h3>
                        <p className="text-xs text-gray-400 dark:text-zinc-500 modern:text-stone-400">{item.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
