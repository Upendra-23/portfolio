import { profile } from '../data/profile'
import Reveal from './Reveal'

const TAG_COLORS = [
  'bg-netflix/10 text-netflix border-netflix/20 dark:bg-netflix/10 dark:text-netflix dark:border-netflix/20 modern:bg-emerald-100 modern:text-emerald-700 modern:border-emerald-200',
  'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800/30 modern:bg-sky-100 modern:text-sky-700 modern:border-sky-200',
  'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800/30 modern:bg-teal-100 modern:text-teal-700 modern:border-teal-200',
  'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800/30 modern:bg-violet-100 modern:text-violet-700 modern:border-violet-200',
  'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/30 modern:bg-amber-100 modern:text-amber-700 modern:border-amber-200',
  'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/20 dark:text-cyan-400 dark:border-cyan-800/30 modern:bg-cyan-100 modern:text-cyan-700 modern:border-cyan-200',
  'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-900/20 dark:text-rose-400 dark:border-rose-800/30 modern:bg-rose-100 modern:text-rose-700 modern:border-rose-200',
]

export default function Skills() {
  const categories = Object.entries(profile.skills)

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-zinc-950 modern:bg-white">
      <Reveal className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white modern:text-stone-800">
          Skills
          <span className="block w-10 h-1 mt-3 bg-netflix dark:bg-netflix modern:bg-emerald-500" />
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          {categories.map(([category, skills], idx) => (
            <div
              key={category}
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
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] mb-4 text-gray-400 dark:text-zinc-600 modern:text-stone-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded text-sm font-medium border ${
                      TAG_COLORS[idx % TAG_COLORS.length]
                    }`}
                    style={{ transform: 'translateZ(10px)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
