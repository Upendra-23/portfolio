import { useState, useEffect } from "react";
import { Sun, Moon, Sparkles, Menu, X } from "lucide-react";
import { profile } from "../data/profile";

const NAV_ITEMS = [
  "Experience",
  "Profiles",
  "Projects",
  "Skills",
  "Honors",
  "Publications",
  "Certifications",
  "Education",
  "Contact",
];

const ICONS = { dark: Moon, light: Sun, modern: Sparkles };

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ThemeIcon = ICONS[theme];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/90 modern:bg-white/90 backdrop-blur-lg border-b border-gray-200 dark:border-zinc-800 modern:border-stone-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="text-xl font-bold tracking-tight text-netflix dark:text-netflix modern:text-emerald-500"
        >
          {profile.initials}
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm font-medium text-gray-500 dark:text-zinc-400 modern:text-stone-400 hover:text-gray-900 dark:hover:text-white modern:hover:text-stone-800 transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 modern:hover:bg-stone-200 transition-colors text-gray-500 dark:text-zinc-400 modern:text-stone-400"
            aria-label="Toggle theme"
          >
            <ThemeIcon size={18} />
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 modern:hover:bg-stone-200 transition-colors text-gray-500 dark:text-zinc-400 modern:text-stone-400"
            aria-label="Toggle theme"
          >
            <ThemeIcon size={18} />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-gray-500 dark:text-zinc-400 modern:text-stone-400"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-black modern:bg-white border-t border-gray-200 dark:border-zinc-800 modern:border-stone-200 px-4 py-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm font-medium text-gray-500 dark:text-zinc-400 modern:text-stone-400 hover:text-gray-900 dark:hover:text-white modern:hover:text-stone-800 text-left"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
