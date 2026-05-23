import { BookOpen, ExternalLink } from 'lucide-react'
import { profile } from '../data/profile'
import ieeeLogo from '../assets/ieee-logo.png'
import ssrnLogo from '../assets/ssrn-logo.png'
import Reveal from './Reveal'

const LOGOS = {
  IEEE: ieeeLogo,
  SSRN: ssrnLogo,
}

function getLogo(venue, venueShort, url) {
  if (venue.includes('IEEE') || venueShort.startsWith('IEEE')) return LOGOS.IEEE
  if (venue.includes('ICICC') || venueShort === 'ICICC 2024' || (url && url.includes('ssrn.com'))) return LOGOS.SSRN
  return null
}

export default function Publications() {
  return (
    <section id="publications" className="py-16 px-4 bg-gray-50 dark:bg-zinc-950 modern:bg-white">
      <Reveal className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white modern:text-stone-800">
          Publications & Research
          <span className="block w-10 h-1 mt-3 bg-netflix dark:bg-netflix modern:bg-emerald-500" />
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          {profile.publications.map((pub, idx) => (
            <div
              key={idx}
              className="rounded p-6 border bg-white dark:bg-zinc-900 modern:bg-white border-gray-200 dark:border-zinc-800 modern:border-stone-200 hover:border-gray-300 dark:hover:border-zinc-700 modern:hover:border-emerald-300 hover:shadow-2xl dark:hover:shadow-2xl"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                transform: 'perspective(1000px) rotateY(0deg) translateZ(0px)',
                transition: 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, border-color 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'perspective(1000px) rotateY(-4deg) translateZ(25px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateZ(0px)' }}
            >
              <div className="flex items-start gap-3 mb-2" style={{ transformStyle: 'preserve-3d' }}>
                {getLogo(pub.venue, pub.venueShort, pub.url) ? (
                  <img
                    src={getLogo(pub.venue, pub.venueShort, pub.url)}
                    alt={pub.venue}
                    className="w-8 h-8 rounded-md object-contain shrink-0"
                    style={{ transform: 'translateZ(15px)' }}
                  />
                ) : (
                  <div
                    className="p-2 rounded-lg shrink-0 bg-netflix/5 dark:bg-netflix/10 modern:bg-emerald-100"
                    style={{ transform: 'translateZ(15px)' }}
                  >
                    <BookOpen size={16} className="text-netflix dark:text-netflix modern:text-emerald-600" />
                  </div>
                )}
                <h3 className="font-semibold text-sm leading-snug text-gray-900 dark:text-white modern:text-stone-800">{pub.title}</h3>
              </div>
              <div className="ml-11">
                <p className="text-sm font-medium text-netflix dark:text-netflix modern:text-emerald-600" title={pub.venue}>{pub.venueShort || pub.venue}</p>
                <p className="text-xs text-gray-500 dark:text-zinc-500 modern:text-stone-500">{pub.focus}</p>
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded border text-netflix dark:text-netflix modern:text-emerald-600 border-netflix/30 dark:border-netflix/30 modern:border-emerald-500/30 hover:bg-netflix/5 dark:hover:bg-netflix/10 modern:hover:bg-emerald-500/10 transition-colors cursor-pointer"
                  >
                    <ExternalLink size={12} />
                    View Paper
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
