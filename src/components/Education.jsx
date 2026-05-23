import { profile } from '../data/profile'
import srmLogo from '../assets/education-srm-logo.png'
import chaitanyaCollegeLogo from '../assets/education-chaitanya-college-logo.webp'
import chaitanyaSchoolLogo from '../assets/education-chaitanya-school-logo.webp'
import Reveal from './Reveal'

const LOGOS = [srmLogo, chaitanyaCollegeLogo, chaitanyaSchoolLogo]

export default function Education() {
  const { education } = profile

  return (
    <section id="education" className="py-16 px-4 bg-gray-50 dark:bg-zinc-950 modern:bg-white">
      <Reveal className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white modern:text-stone-800">
          Education
          <span className="block w-10 h-1 mt-3 bg-netflix dark:bg-netflix modern:bg-emerald-500" />
        </h2>

        <div className="relative mt-12">
          <div className="absolute left-[7px] sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gray-300 dark:bg-zinc-700 modern:bg-stone-300" />

          <div className="space-y-10">
            {education.map((edu, idx) => {
              const isLeft = idx % 2 === 0

              return (
                <div key={idx} className={`relative ${idx > 0 ? 'mt-10' : ''}`}>
                  <div className={`pl-8 sm:pl-0 sm:w-1/2 ${isLeft ? 'sm:pr-10' : 'sm:ml-auto sm:pl-10'}`}>
                    <div
                      title={edu.institution}
                      className="w-full text-left rounded-lg p-5 border bg-white dark:bg-zinc-900 modern:bg-white border-gray-200 dark:border-zinc-800 modern:border-stone-200 hover:border-gray-300 dark:hover:border-zinc-700 modern:hover:border-emerald-300 hover:shadow-2xl dark:hover:shadow-2xl"
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
                              alt={edu.institution}
                              className="w-8 h-8 rounded-md object-contain shrink-0"
                              style={{ transform: 'translateZ(15px)' }}
                            />
                          <div className="min-w-0">
                            <h3 className="text-base font-semibold text-gray-900 dark:text-white modern:text-stone-800 truncate" title={edu.institution}>
                              {edu.institution}
                            </h3>
                            <p className="text-sm font-medium text-netflix dark:text-netflix modern:text-emerald-600">
                              {edu.degree}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-mono shrink-0 text-gray-400 dark:text-zinc-600 modern:text-stone-400">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm mt-2 ml-11 text-gray-500 dark:text-zinc-400 modern:text-stone-500">
                        Grade: {edu.grade}{edu.location ? ` · ${edu.location}` : ''}
                      </p>
                    </div>
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
