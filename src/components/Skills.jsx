import { motion } from "framer-motion";
import { BsColumnsGap } from "react-icons/bs";
import { SiReact } from "react-icons/si";
import {
  TbBrowserCheck,
  TbDatabase,
  TbServerCog,
  TbStack2,
  TbViewportWide,
} from "react-icons/tb";
import SkillCard from "./SkillCard";
import { skillCategories, totalSkillCount } from "../data/skillsData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const introVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const sectionClass = "mx-auto w-full max-w-7xl px-6 py-20 scroll-mt-24";

const Skills = ({
  title = "MERN Stack Skills",
  subtitle = "A focused snapshot of the frontend, backend, data, and deployment tools I use to design and ship modern web products.",
  categories = skillCategories,
}) => (
  <section id="skills" className={sectionClass}>
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(11,17,32,0.98))] px-6 py-12 shadow-2xl shadow-black/30 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-32 rounded-full bg-emerald-400/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-36 w-80 -translate-x-1/2 rounded-full bg-cyan-400/8 blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={introVariants}
        className="relative mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200 sm:text-sm">
          <SiReact className="text-base" />
          React.js + Tailwind CSS
        </span>

        <h2 className="mt-5 font-display text-3xl font-bold text-slate-50 sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
            <span className="font-semibold text-white">{categories.length}</span>{" "}
            categories
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
            <span className="font-semibold text-white">{totalSkillCount}</span>{" "}
            skills
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
            <TbServerCog />
            Backend highlighted
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {categories.map((category, index) => (
          <SkillCard key={category.id} category={category} index={index} />
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={introVariants}
        className="relative mt-10 flex flex-wrap justify-center gap-3"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 sm:text-sm">
          <TbViewportWide className="text-neon" />
          Mobile-first layouts
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 sm:text-sm">
          <TbStack2 className="text-emerald-300" />
          MERN architecture
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 sm:text-sm">
          <TbDatabase className="text-emerald-300" />
          API and database flow
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 sm:text-sm">
          <BsColumnsGap className="text-cyan-300" />
          Reusable component cards
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 sm:text-sm">
          <TbBrowserCheck className="text-emerald-300" />
          Smooth interactive states
        </span>
      </motion.div>
    </div>
  </section>
);

export default Skills;
