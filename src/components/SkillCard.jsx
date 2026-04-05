import { motion } from "framer-motion";

const accentThemes = {
  amber: {
    panel:
      "from-amber-500/16 via-amber-400/8 to-transparent border-amber-400/30",
    iconShell:
      "from-amber-400/20 via-amber-300/10 to-slate-900/30 text-amber-200",
    badge: "border-amber-300/30 bg-amber-400/10 text-amber-200",
    glow: "group-hover:shadow-[0_0_45px_rgba(251,191,36,0.16)]",
    line: "from-amber-300 via-amber-200 to-transparent",
  },
  cyan: {
    panel:
      "from-cyan-500/16 via-cyan-400/8 to-transparent border-cyan-400/30",
    iconShell:
      "from-cyan-400/20 via-cyan-300/10 to-slate-900/30 text-cyan-200",
    badge: "border-cyan-300/30 bg-cyan-400/10 text-cyan-200",
    glow: "group-hover:shadow-[0_0_45px_rgba(34,211,238,0.16)]",
    line: "from-cyan-300 via-cyan-200 to-transparent",
  },
  emerald: {
    panel:
      "from-emerald-500/18 via-emerald-400/10 to-transparent border-emerald-400/35",
    iconShell:
      "from-emerald-400/20 via-emerald-300/10 to-slate-900/30 text-emerald-200",
    badge: "border-emerald-300/35 bg-emerald-400/10 text-emerald-200",
    glow: "group-hover:shadow-[0_0_52px_rgba(52,211,153,0.18)]",
    line: "from-emerald-300 via-emerald-200 to-transparent",
  },
  fuchsia: {
    panel:
      "from-fuchsia-500/16 via-fuchsia-400/8 to-transparent border-fuchsia-400/30",
    iconShell:
      "from-fuchsia-400/20 via-fuchsia-300/10 to-slate-900/30 text-fuchsia-200",
    badge: "border-fuchsia-300/30 bg-fuchsia-400/10 text-fuchsia-200",
    glow: "group-hover:shadow-[0_0_45px_rgba(217,70,239,0.16)]",
    line: "from-fuchsia-300 via-fuchsia-200 to-transparent",
  },
  green: {
    panel:
      "from-green-500/16 via-green-400/8 to-transparent border-green-400/30",
    iconShell:
      "from-green-400/20 via-green-300/10 to-slate-900/30 text-green-200",
    badge: "border-green-300/30 bg-green-400/10 text-green-200",
    glow: "group-hover:shadow-[0_0_45px_rgba(74,222,128,0.16)]",
    line: "from-green-300 via-green-200 to-transparent",
  },
  rose: {
    panel:
      "from-rose-500/16 via-rose-400/8 to-transparent border-rose-400/30",
    iconShell:
      "from-rose-400/20 via-rose-300/10 to-slate-900/30 text-rose-200",
    badge: "border-rose-300/30 bg-rose-400/10 text-rose-200",
    glow: "group-hover:shadow-[0_0_45px_rgba(251,113,133,0.16)]",
    line: "from-rose-300 via-rose-200 to-transparent",
  },
  sky: {
    panel:
      "from-sky-500/16 via-sky-400/8 to-transparent border-sky-400/30",
    iconShell:
      "from-sky-400/20 via-sky-300/10 to-slate-900/30 text-sky-200",
    badge: "border-sky-300/30 bg-sky-400/10 text-sky-200",
    glow: "group-hover:shadow-[0_0_45px_rgba(56,189,248,0.16)]",
    line: "from-sky-300 via-sky-200 to-transparent",
  },
  violet: {
    panel:
      "from-violet-500/16 via-violet-400/8 to-transparent border-violet-400/30",
    iconShell:
      "from-violet-400/20 via-violet-300/10 to-slate-900/30 text-violet-200",
    badge: "border-violet-300/30 bg-violet-400/10 text-violet-200",
    glow: "group-hover:shadow-[0_0_45px_rgba(167,139,250,0.16)]",
    line: "from-violet-300 via-violet-200 to-transparent",
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const SkillCard = ({ category, index }) => {
  const theme = accentThemes[category.accent] || accentThemes.cyan;

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#0f1728]/92 p-6 transition-all duration-300 ${theme.glow} ${
        category.featured
          ? "border-emerald-400/60 ring-1 ring-emerald-400/25 shadow-[0_0_40px_rgba(34,197,94,0.22)]"
          : ""
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${theme.panel}`}
      />
      <div className="pointer-events-none absolute inset-[1px] rounded-[calc(1.9rem-1px)] bg-[linear-gradient(180deg,rgba(17,24,39,0.95),rgba(10,15,30,0.98))]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/6 to-transparent" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-neon">
                {category.title}
              </h3>
              {category.featuredLabel ? (
                <span
                  className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] ${theme.badge}`}
                >
                  {category.featuredLabel}
                </span>
              ) : null}
            </div>
            <p className="mt-4 max-w-md text-base leading-8 text-slate-300">
              {category.description}
            </p>
          </div>

          <span className="flex h-14 min-w-[3.5rem] shrink-0 flex-col items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 text-xs font-semibold text-slate-300">
            <span className="text-base leading-none text-slate-100">
              {category.skills.length}
            </span>
            <span>Skills</span>
          </span>
        </div>

        <div className={`mt-6 h-px w-full bg-gradient-to-r ${theme.line}`} />

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {category.skills.map((skill) => {
            const SkillIcon = skill.icon;

            return (
              <div
                key={skill.name}
                className="min-h-[146px] rounded-[1.15rem] border border-white/10 bg-[linear-gradient(180deg,rgba(30,41,59,0.44),rgba(15,23,42,0.72))] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-[linear-gradient(180deg,rgba(30,41,59,0.55),rgba(15,23,42,0.82))]"
              >
                <div className="flex h-full flex-col justify-between gap-6">
                  <span
                    className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] border border-white/5 bg-[#172235] text-xl shadow-[0_12px_24px_rgba(2,6,23,0.35)] ${theme.iconShell}`}
                  >
                    <SkillIcon />
                  </span>

                  <div>
                    <span className="block text-[1.05rem] font-semibold leading-8 text-slate-100">
                      {skill.name}
                      {skill.badge ? (
                        <span className="ml-1 text-[0.95rem] text-slate-300">
                          ({skill.badge})
                        </span>
                      ) : null}
                    </span>

                    <div className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-neon" />
                      Full Stack
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
};

export default SkillCard;
