import { useRef, useState, useEffect } from 'react'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { profile } from '../data/profile'
import portfolioImg from '../assets/portfolio.png'
import bbankThumb from '../assets/BBank-thumbnail.png'
import formatHubScreen from '../assets/format-hub-screen.png'
import drawspaceThumb from '../assets/drawspace-thumbnail.png'
import avatarImg from '../assets/animie-avatar.jpg'
import drawSpaceIcon from '../assets/draw-space-project-icon.jpg'
import formatHubLogo from '../assets/format-hub-logo.png'
import githubLogo from '../assets/github-logo.webp'
import githubLogoLight from '../assets/github-logo-light-theme.webp'
import Reveal from './Reveal'

const THUMBNAILS = { BBank: bbankThumb, FormatHub: formatHubScreen, DrawSpace: drawspaceThumb, 'Portfolio Dashboard': portfolioImg }
const ICONS = { FormatHub: formatHubLogo, DrawSpace: drawSpaceIcon, 'Portfolio Dashboard': avatarImg }

function shortDesc(text) {
  return text.length > 90 ? text.slice(0, 90) + '…' : text
}

export default function Projects() {
  const scrollRef = useRef(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  const updateArrows = () => {
    const el = scrollRef.current
    if (!el) return
    setShowLeft(el.scrollLeft > 4)
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows)
    return () => el.removeEventListener('scroll', updateArrows)
  }, [])

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector('div[class*="flex-shrink-0"]')
    const amount = card ? card.getBoundingClientRect().width + 16 : 320
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="py-16 bg-white dark:bg-black modern:bg-emerald-50">
      <Reveal className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white modern:text-stone-800">Projects</h2>
        <span className="block w-10 h-1 mb-12 bg-netflix dark:bg-netflix modern:bg-emerald-500" />

        <div className="relative group">
          {showLeft && (
            <button
              onClick={() => scroll(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-zinc-800/80 modern:bg-white/80 shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity border border-gray-200 dark:border-zinc-700 modern:border-stone-300 text-gray-700 dark:text-zinc-300 modern:text-stone-700 hover:text-netflix dark:hover:text-netflix modern:hover:text-emerald-500"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {showRight && (
            <button
              onClick={() => scroll(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-zinc-800/80 modern:bg-white/80 shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity border border-gray-200 dark:border-zinc-700 modern:border-stone-300 text-gray-700 dark:text-zinc-300 modern:text-stone-700 hover:text-netflix dark:hover:text-netflix modern:hover:text-emerald-500"
            >
              <ChevronRight size={20} />
            </button>
          )}

          <div
            id="projects-scroll"
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`#projects-scroll::-webkit-scrollbar { display: none; }`}</style>
            {profile.projects.map((project) => (
              <div
                key={project.title}
                className="flex-shrink-0 w-[380px] rounded-lg border flex flex-col overflow-hidden bg-white dark:bg-zinc-900 modern:bg-white border-gray-200 dark:border-zinc-800 modern:border-stone-200 hover:border-netflix/40 dark:hover:border-netflix/40 modern:hover:border-emerald-400 hover:shadow-2xl dark:hover:shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                  transform: 'perspective(1000px) rotateY(0deg) translateZ(0px)',
                  transition: 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(-4deg) translateZ(25px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateZ(0px)'
                }}
              >
                <div className="relative aspect-[16/9] bg-gray-100 dark:bg-zinc-800 modern:bg-stone-100 rounded-t-lg overflow-hidden">
                  <img
                    src={THUMBNAILS[project.title] || avatarImg}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-3" style={{ transformStyle: 'preserve-3d' }}>
                    <div
                      className="w-8 h-8 rounded-md flex items-center justify-center bg-netflix/20 dark:bg-netflix/30 modern:bg-emerald-200"
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      <img
                        src={ICONS[project.title] || avatarImg}
                        alt=""
                        className="w-5 h-5 object-contain rounded-sm"
                        style={{ transform: 'translateZ(20px)' }}
                      />
                    </div>
                    <div style={{ transformStyle: 'preserve-3d' }}>
                      <h3
                        className="text-lg font-bold text-white drop-shadow-lg"
                        style={{ transform: 'translateZ(20px)' }}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col gap-3">
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-zinc-400 modern:text-stone-500">
                    {shortDesc(project.description)}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono border bg-gray-50 dark:bg-black/50 modern:bg-stone-100 border-gray-200 dark:border-zinc-800 modern:border-stone-200 text-gray-500 dark:text-zinc-400 modern:text-stone-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto pt-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-gray-200 dark:border-zinc-700 modern:border-stone-300 bg-gray-50 dark:bg-zinc-800 modern:bg-stone-100 text-gray-700 dark:text-zinc-300 modern:text-stone-700 hover:bg-netflix hover:text-white dark:hover:bg-netflix modern:hover:bg-emerald-500 hover:border-netflix dark:hover:border-netflix modern:hover:border-emerald-500 transition-colors"
                      style={{ transform: 'translateZ(15px)' }}
                    >
                      <img src={githubLogoLight} alt="" className="w-3 h-3 object-contain block dark:hidden modern:block" />
                      <img src={githubLogo} alt="" className="w-3 h-3 object-contain hidden dark:block modern:hidden" />
                      GitHub
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-gray-200 dark:border-zinc-700 modern:border-stone-300 bg-gray-50 dark:bg-zinc-800 modern:bg-stone-100 text-gray-700 dark:text-zinc-300 modern:text-stone-700 hover:bg-netflix hover:text-white dark:hover:bg-netflix modern:hover:bg-emerald-500 hover:border-netflix dark:hover:border-netflix modern:hover:border-emerald-500 transition-colors"
                        style={{ transform: 'translateZ(15px)' }}
                      >
                        <ExternalLink size={12} />
                        Try Now
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
