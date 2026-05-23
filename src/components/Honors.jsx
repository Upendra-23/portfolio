import { profile } from "../data/profile";
import Reveal from "./Reveal";

export default function Honors() {
  return (
    <section id="honors" className="py-16 px-4 modern:bg-emerald-50">
      <Reveal className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white modern:text-stone-800">
          Honors & Awards
          <span className="block w-10 h-1 mt-3 bg-netflix dark:bg-netflix modern:bg-emerald-500" />
        </h2>

        <div className="mt-12 space-y-4">
          {profile.honors.map((honor, idx) => (
            <div
              key={idx}
              className="rounded p-6 border bg-white dark:bg-zinc-900 modern:bg-white border-gray-200 dark:border-zinc-800 modern:border-stone-200 hover:border-gray-300 dark:hover:border-zinc-700 modern:hover:border-emerald-300 hover:shadow-2xl dark:hover:shadow-2xl"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
                transform: "perspective(1000px) rotateY(0deg) translateZ(0px)",
                transition:
                  "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateY(-4deg) translateZ(25px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateY(0deg) translateZ(0px)";
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-lg shrink-0 bg-netflix/5 dark:bg-netflix/10 modern:bg-emerald-100 text-2xl leading-none"
                  style={{ transform: "translateZ(15px)" }}
                >
                  {honor.badge}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white modern:text-stone-800">
                      {honor.title}
                    </h3>
                    <span className="text-xs font-mono shrink-0 text-gray-400 dark:text-zinc-600 modern:text-stone-400">
                      {honor.date}
                    </span>
                  </div>
                  <p className="text-sm text-netflix dark:text-netflix modern:text-emerald-600 font-medium">
                    {honor.issuer}
                  </p>
                  <p className="text-sm mt-2 text-gray-500 dark:text-zinc-400 modern:text-stone-500">
                    {honor.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
