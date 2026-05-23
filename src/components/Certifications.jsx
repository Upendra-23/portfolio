import { Award } from 'lucide-react'
import { profile } from '../data/profile'
import nptelLogo from '../assets/nptel-logo.jpg'
import udemyLogo from '../assets/udemy-logo.png'
import Reveal from './Reveal'

const LOGOS = { NPTEL: nptelLogo, Udemy: udemyLogo }

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-4 bg-white dark:bg-black modern:bg-emerald-50">
      <Reveal className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white modern:text-stone-800">
          Licenses & Certifications
          <span className="block w-10 h-1 mt-3 bg-netflix dark:bg-netflix modern:bg-emerald-500" />
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {profile.certifications.map((cert, idx) => (
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
              <div className="flex items-start gap-3" style={{ transformStyle: 'preserve-3d' }}>
                {LOGOS[cert.issuer] ? (
                  <img
                    src={LOGOS[cert.issuer]}
                    alt={cert.issuer}
                    className="w-8 h-8 rounded-md object-contain shrink-0"
                    style={{ transform: 'translateZ(15px)' }}
                  />
                ) : (
                  <div
                    className="p-2 rounded-lg shrink-0 bg-netflix/5 dark:bg-netflix/10 modern:bg-emerald-100"
                    style={{ transform: 'translateZ(15px)' }}
                  >
                    <Award size={16} className="text-netflix dark:text-netflix modern:text-emerald-600" />
                  </div>
                )}
                <h3 className="font-semibold text-sm text-gray-900 dark:text-white modern:text-stone-800">
                  {cert.title}
                </h3>
              </div>
              <div className="ml-11">
                <p className="text-sm font-medium text-netflix dark:text-netflix modern:text-emerald-600">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-400 dark:text-zinc-600 modern:text-stone-400">
                  Issued {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
