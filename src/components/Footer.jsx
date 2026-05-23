import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="pt-8 pb-6 px-4 modern:bg-white bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-zinc-400 modern:text-stone-500">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 text-sm transition-colors text-gray-500 dark:text-zinc-400 modern:text-stone-500 hover:text-netflix dark:hover:text-netflix modern:hover:text-emerald-500"
        >
          Back to top
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  )
}
