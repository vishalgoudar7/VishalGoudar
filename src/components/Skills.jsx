import { BsColumnsGap, BsFiletypeJson } from "react-icons/bs";
import {
  SiAxios,
  SiBootstrap,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNetlify,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";
import {
  TbApi,
  TbArrowsHorizontal,
  TbBrowserCheck,
  TbDatabase,
  TbDeviceDesktopCode,
  TbLayoutGrid,
  TbSeo,
  TbStack2,
  TbTopologyStar3,
  TbViewportWide,
} from "react-icons/tb";

const defaultSkillCategories = [
  {
    title: "Languages",
    description: "Semantic markup, modern styling, and interactive JavaScript.",
    skills: [
      { name: "HTML5", icon: SiHtml5, accent: "text-orange-400" },
      { name: "CSS3", icon: SiCss, accent: "text-sky-400" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, accent: "text-yellow-300" },
    ],
  },
  {
    title: "Frameworks",
    description: "Component-driven UI work across modern frontend libraries.",
    skills: [
      { name: "React.js", icon: SiReact, accent: "text-cyan-300" },
      { name: "Vue.js (Basic)", icon: SiVuedotjs, accent: "text-emerald-300" },
    ],
  },
  {
    title: "Styling",
    description: "Utility-first systems, layout primitives, and reusable UI patterns.",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, accent: "text-cyan-300" },
      { name: "Bootstrap", icon: SiBootstrap, accent: "text-violet-300" },
      { name: "Flexbox", icon: TbArrowsHorizontal, accent: "text-emerald-300" },
      { name: "CSS Grid", icon: TbLayoutGrid, accent: "text-pink-300" },
    ],
  },
  {
    title: "State Management",
    description: "Predictable shared state with lightweight app-level patterns.",
    skills: [
      { name: "Redux Toolkit", icon: SiRedux, accent: "text-fuchsia-300" },
      { name: "Context API", icon: TbTopologyStar3, accent: "text-amber-300" },
    ],
  },
  {
    title: "Backend",
    description: "Server-side application logic for scalable MERN workflows.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, accent: "text-emerald-300" },
      { name: "Express.js", icon: SiExpress, accent: "text-slate-200" },
    ],
  },
  {
    title: "Database",
    description: "Document modeling and persistence for full-stack applications.",
    skills: [
      { name: "MongoDB", icon: SiMongodb, accent: "text-emerald-400" },
      { name: "Mongoose", icon: SiMongoose, accent: "text-red-300" },
    ],
  },
  {
    title: "Tools",
    description: "Version control, deployment workflows, and production hosting.",
    skills: [
      { name: "Git", icon: SiGit, accent: "text-orange-400" },
      { name: "GitHub", icon: SiGithub, accent: "text-slate-200" },
      { name: "Postman", icon: SiPostman, accent: "text-orange-300" },
      { name: "Vercel", icon: SiVercel, accent: "text-white" },
      { name: "Netlify", icon: SiNetlify, accent: "text-cyan-300" },
    ],
  },
  {
    title: "API",
    description: "Reliable client-side data integration and JSON-driven workflows.",
    skills: [
      { name: "REST API", icon: TbApi, accent: "text-emerald-300" },
      { name: "Axios", icon: SiAxios, accent: "text-violet-300" },
      { name: "JSON", icon: BsFiletypeJson, accent: "text-yellow-300" },
    ],
  },
  {
    title: "Other",
    description: "Polished delivery standards for real-world frontend projects.",
    skills: [
      {
        name: "Responsive Design",
        icon: TbViewportWide,
        accent: "text-cyan-300",
      },
      {
        name: "Cross-browser Compatibility",
        icon: TbBrowserCheck,
        accent: "text-emerald-300",
      },
      { name: "SEO Basics", icon: TbSeo, accent: "text-pink-300" },
    ],
  },
];

const sectionClass = "mx-auto w-full max-w-7xl px-6 py-16 scroll-mt-24";

const Skills = ({
  title = "Frontend + Full Stack Skills",
  subtitle = "A combined view of the frontend, backend, database, and deployment technologies I use to build modern MERN web applications.",
  categories = defaultSkillCategories,
}) => (
  <section id="skills" className={sectionClass}>
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 px-6 py-12 shadow-2xl shadow-black/25 backdrop-blur-xl sm:px-8 lg:px-10">
      <div className="absolute inset-x-10 top-0 h-32 rounded-full bg-neon/10 blur-3xl" />
      <div className="absolute -right-10 top-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center opacity-0 animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-neon sm:text-sm">
          <TbDeviceDesktopCode className="text-base" />
          Frontend & MERN Stack
        </span>

        <h2 className="mt-5 font-display text-3xl font-bold text-slate-50 sm:text-4xl">
          {title}
        </h2>

        <div className="mx-auto mt-4 h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
          <span className="block h-full w-full origin-left animate-pulse rounded-full bg-gradient-to-r from-neon via-emerald-300 to-cyan-300" />
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {subtitle}
        </p>
      </div>

      <div className="relative mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {categories.map((category, categoryIndex) => (
          <article
            key={category.title}
            className="group rounded-3xl border border-white/10 bg-slate-950/45 p-6 shadow-lg shadow-black/30 opacity-0 animate-fade-up transition duration-500 hover:-translate-y-2 hover:border-neon/40 hover:bg-slate-950/70 hover:shadow-neon"
            style={{ animationDelay: `${categoryIndex * 110}ms` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neon/80">
                  {category.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {category.description}
                </p>
              </div>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                {category.skills.length} Skills
              </span>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {category.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:scale-[1.03] hover:border-neon/40 hover:bg-white/[0.08]"
                  >
                    <div className="flex h-full flex-col justify-between gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/12 via-white/5 to-neon/15 text-2xl shadow-lg shadow-black/20">
                        <Icon className={skill.accent} />
                      </span>

                      <div>
                        <h3 className="text-sm font-semibold leading-6 text-slate-100">
                          {skill.name}
                        </h3>
                        <div className="mt-2 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                          Full Stack
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>

      <div className="relative mt-8 flex flex-wrap justify-center gap-3 text-xs font-medium text-slate-300 sm:text-sm">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
          <TbViewportWide className="text-neon" />
          Mobile-first layouts
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
          <TbStack2 className="text-amber-300" />
          MERN architecture
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
          <TbDatabase className="text-emerald-300" />
          API and database flow
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
          <BsColumnsGap className="text-cyan-300" />
          Reusable component cards
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
          <TbBrowserCheck className="text-emerald-300" />
          Smooth interactive states
        </span>
      </div>
    </div>
  </section>
);

export default Skills;
