import { ExternalLink } from 'lucide-react'
import { profile } from '../data/profile'
import drawSpaceImg from '../assets/draw-space.png'
import portfolioImg from '../assets/portfolio.png'
import bbankThumb from '../assets/BBank-thumbnail.png'
import avatarImg from '../assets/animie-avatar.jpg'
import drawSpaceIcon from '../assets/draw-space-project-icon.jpg'
import githubLogo from '../assets/github-logo.webp'
import githubLogoLight from '../assets/github-logo-light-theme.webp'
import Reveal from './Reveal'

const THUMBNAILS = { BBank: bbankThumb, DrawSpace: drawSpaceImg, 'Portfolio Dashboard': portfolioImg }
const ICONS = { DrawSpace: drawSpaceIcon, 'Portfolio Dashboard': avatarImg }

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-black modern:bg-emerald-50">
      <Reveal className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white modern:text-stone-800">Projects</h2>
        <span className="block w-10 h-1 mb-12 bg-netflix dark:bg-netflix modern:bg-emerald-500" />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {profile.projects.map((project) => (
            <div
              key={project.title}
              className="flex-1 max-w-md rounded-lg border flex flex-col overflow-hidden bg-white dark:bg-zinc-900 modern:bg-white border-gray-200 dark:border-zinc-800 modern:border-stone-200 hover:border-netflix/40 dark:hover:border-netflix/40 modern:hover:border-emerald-400 hover:shadow-2xl dark:hover:shadow-2xl"
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
                  {project.description}
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
      </Reveal>
    </section>
  )
}
