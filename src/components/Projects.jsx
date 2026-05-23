import { useRef, useState, useEffect } from 'react'
import { FolderGit, ChevronLeft, ChevronRight } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Projects() {
  const scrollRef = useRef(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.children[0]
    if (!card) return
    const amount = card.getBoundingClientRect().width + 16
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  const updateArrows = () => {
    const el = scrollRef.current
    if (!el) return
    setShowLeft(el.scrollLeft > 8)
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateArrows, { passive: true })
    updateArrows()
    return () => el.removeEventListener('scroll', updateArrows)
  }, [])

  return (
    <section id="projects" className="py-16 bg-white dark:bg-black modern:bg-emerald-50">
      <Reveal className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white modern:text-stone-800">Projects</h2>
        <span className="block w-10 h-1 mb-12 bg-netflix dark:bg-netflix modern:bg-emerald-500" />

        <div className="relative">
          {showLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-0 bottom-0 z-10 w-12 flex items-center justify-start bg-gradient-to-r from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80 to-transparent modern:from-emerald-50 modern:via-emerald-50/80 cursor-pointer"
            >
              <ChevronLeft size={20} className="ml-1 text-gray-600 dark:text-white modern:text-stone-500" />
            </button>
          )}
          {showRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-0 bottom-0 z-10 w-12 flex items-center justify-end bg-gradient-to-l from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80 to-transparent modern:from-emerald-50 modern:via-emerald-50/80 cursor-pointer"
            >
              <ChevronRight size={20} className="mr-1 text-gray-600 dark:text-white modern:text-stone-500" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {profile.projects.map((project) => (
              <div
                key={project.title}
                className="min-w-[260px] w-[260px] rounded-lg border shrink-0 flex flex-col overflow-hidden bg-white dark:bg-zinc-900 modern:bg-white border-gray-200 dark:border-zinc-800 modern:border-stone-200 hover:border-netflix/40 dark:hover:border-netflix/40 modern:hover:border-emerald-400 hover:shadow-2xl dark:hover:shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                  transform: 'perspective(1000px) rotateY(0deg) translateZ(0px)',
                  transition: 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) translateZ(35px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateZ(0px)'
                }}
              >
                <div className="h-1.5 shrink-0 bg-gradient-to-r from-netflix to-netflix/60 dark:from-netflix dark:to-netflix/60 modern:from-emerald-500 modern:to-emerald-400" />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3" style={{ transformStyle: 'preserve-3d' }}>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors bg-netflix/10 dark:bg-netflix/10 modern:bg-emerald-100"
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      <FolderGit size={14} className="text-netflix dark:text-netflix modern:text-emerald-600" />
                    </div>
                    <h3 className="font-semibold text-sm leading-snug text-gray-900 dark:text-white modern:text-stone-800">{project.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed mb-4 flex-1 text-gray-500 dark:text-zinc-400 modern:text-stone-500">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono border bg-gray-50 dark:bg-black/50 modern:bg-stone-100 border-gray-200 dark:border-zinc-800 modern:border-stone-200 text-gray-400 dark:text-zinc-600 modern:text-stone-400"
                      >
                        {t}
                      </span>
                    ))}
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
