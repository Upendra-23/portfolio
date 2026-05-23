import { profile } from '../data/profile'
import leetcodeImg from '../assets/leetcode-profile.png'
import githubImg from '../assets/github-profile.png'
import resumeImg from '../assets/resume-thumb.jpg'
import leetcodeLogo from '../assets/leetcode-logo.png'
import githubLogo from '../assets/github-logo.webp'
import driveLogo from '../assets/drive-logo.jpg'
import Reveal from './Reveal'

const IMAGES = { LeetCode: leetcodeImg, GitHub: githubImg, Resume: resumeImg }
const LOGOS = { LeetCode: leetcodeLogo, GitHub: githubLogo, Resume: driveLogo }

export default function Profiles() {
  return (
    <section id="profiles" className="py-16 bg-white dark:bg-black modern:bg-white">
      <Reveal className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white modern:text-stone-800">Profiles</h2>
        <span className="block w-10 h-1 mb-12 bg-netflix dark:bg-netflix modern:bg-emerald-500" />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {profile.profiles.map((p) => (
            <a
              key={p.platform}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
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
                  src={p.thumbnail || IMAGES[p.platform]}
                  alt={p.platform}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-3" style={{ transformStyle: 'preserve-3d' }}>
                  <img
                    src={LOGOS[p.platform]}
                    alt={p.platform}
                    className="w-8 h-8 rounded-md object-contain"
                    style={{ transform: 'translateZ(20px)' }}
                  />
                  <div style={{ transformStyle: 'preserve-3d' }}>
                    <h3
                      className="text-lg font-bold text-white drop-shadow-lg"
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      {p.platform}
                    </h3>
                    <p
                      className="text-xs font-mono text-white/80 drop-shadow"
                      style={{ transform: 'translateZ(15px)' }}
                    >
                      @{p.username}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm leading-relaxed text-gray-500 dark:text-zinc-400 modern:text-stone-500" dangerouslySetInnerHTML={{ __html: p.description }} />
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
