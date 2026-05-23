import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { profile } from '../data/profile'
import bnpLogo from '../assets/expereince-bnp-logo.webp'
import gfgLogo from '../assets/expereince-gfg-logo.webp'
import Reveal from './Reveal'

const LOGOS = [bnpLogo, bnpLogo, gfgLogo]

export default function Experience() {
  const { experience } = profile
  const [expanded, setExpanded] = useState(null)

  const toggle = (idx) => {
    setExpanded(expanded === idx ? null : idx)
  }

  return (
    <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-zinc-950 modern:bg-emerald-50">
      <Reveal className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white modern:text-stone-800">
          Experience
          <span className="block w-10 h-1 mt-3 bg-netflix dark:bg-netflix modern:bg-emerald-500" />
        </h2>

        <div className="relative mt-12">
          <div className="absolute left-[7px] sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gray-300 dark:bg-zinc-700 modern:bg-stone-300" />

          <div className="space-y-10">
            {experience.map((exp, idx) => {
              const isLeft = idx % 2 === 0
              const isActive = expanded === idx

              return (
                <div key={idx} className={`relative ${idx > 0 ? 'mt-10' : ''}`}>
                  <div className={`pl-8 sm:pl-0 sm:w-1/2 ${isLeft ? 'sm:pr-10' : 'sm:ml-auto sm:pl-10'}`}>
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full text-left rounded-lg p-5 border bg-white dark:bg-zinc-900 modern:bg-white border-gray-200 dark:border-zinc-800 modern:border-stone-200 hover:border-gray-300 dark:hover:border-zinc-700 modern:hover:border-emerald-300 hover:shadow-2xl dark:hover:shadow-2xl cursor-pointer"
                      style={{
                        transformStyle: 'preserve-3d',
                        perspective: '1000px',
                        transform: 'perspective(1000px) rotateY(0deg) translateZ(0px)',
                        transition: 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, border-color 0.3s ease',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'perspective(1000px) rotateY(-4deg) translateZ(25px)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateZ(0px)' }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3 flex-1 min-w-0" style={{ transformStyle: 'preserve-3d' }}>
                          <img
                            src={LOGOS[idx]}
                            alt={exp.company}
                            className="w-8 h-8 rounded-md object-contain shrink-0"
                            style={{ transform: 'translateZ(15px)' }}
                          />
                          <div className="min-w-0">
                            <h3 className="text-base font-semibold text-gray-900 dark:text-white modern:text-stone-800 truncate">
                              {exp.role}
                            </h3>
                            <p className="text-sm font-medium text-netflix dark:text-netflix modern:text-emerald-600 truncate">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-xs font-mono text-gray-400 dark:text-zinc-600 modern:text-stone-400">
                            {exp.period}
                          </span>
                          {exp.responsibilities?.length > 0 && (
                            isActive ? <ChevronUp size={14} className="text-gray-400 dark:text-zinc-600 modern:text-stone-400" />
                                     : <ChevronDown size={14} className="text-gray-400 dark:text-zinc-600 modern:text-stone-400" />
                          )}
                        </div>
                      </div>

                      {isActive && exp.responsibilities && (
                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-zinc-800 modern:border-stone-200">
                          <ul className="space-y-2">
                            {exp.responsibilities.map((r, i) => (
                              <li key={i} className="text-sm text-gray-500 dark:text-zinc-400 modern:text-stone-500 flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-gray-300 dark:bg-zinc-700 modern:bg-stone-300" />
                                <span className="flex-1">{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </button>
                  </div>

                  <div className={`absolute top-5 z-10 w-[15px] h-[15px] rounded-full border-2
                    ${idx === 0
                      ? 'bg-netflix border-netflix shadow-[0_0_0_4px_rgba(229,9,20,0.2)] dark:shadow-[0_0_0_4px_rgba(229,9,20,0.2)] modern:bg-emerald-500 modern:border-emerald-500 modern:shadow-[0_0_0_4px_rgba(16,185,129,0.2)]'
                      : 'bg-white dark:bg-zinc-950 modern:bg-stone-50 border-gray-400 dark:border-zinc-600 modern:border-stone-400'
                    }
                    left-[7px] -translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2`}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
