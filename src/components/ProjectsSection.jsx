const projectLinks = [
  {
    title: "Portfolio Website",
    domain: "Current Website",
    link: "#home",
    external: false,
    description:
      "Designed and built this personal portfolio website to showcase projects, frontend skills, and professional experience with a responsive React-based interface.",
  },
  {
    link: "https://hracbi.com",
    logoSrc: "https://hracbi.com/assets/images/logo.png",
  },
  {
    link: "https://anektech.com",
    logoSrc: "https://www.anektech.com/images/anektech-logo.png",
  },
  {
    link: "https://devalayas.com/",
    logoSrc: "https://devalayas.com/favicon.ico",
  },
  {
    link: "https://www.devalayas.in/",
    logoSrc: "https://www.devalayas.in/assets/images/devalaya-logo.png",
  },
  {
    title: "Temple Officer Dashboard",
    domain: "templeofficerdashboard.netlify.app",
    link: "https://templeofficerdashboard.netlify.app/",
    logoSrc: "https://templeofficerdashboard.netlify.app/favicon.ico",
    description:
      "Built a temple operations dashboard focused on streamlined administration, responsive workflows, and clear data-driven management screens.",
  },
];

const toTitleFromUrl = (url) => {
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, "");
    const [name] = hostname.split(".");

    return name
      .split(/[-_]/g)
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  } catch (_error) {
    return "Project";
  }
};

const toDomainFromUrl = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch (_error) {
    return url;
  }
};

const generateDescription = (title) =>
  `${title} is a production-ready website with a clean interface, responsive layouts, and performance-focused frontend delivery.`;

const ProjectCard = ({ project, index }) => {
  const title = project.title || toTitleFromUrl(project.link);
  const domain = project.domain || toDomainFromUrl(project.link);
  const description = project.description || generateDescription(title);
  const external = project.external ?? true;

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/35 transition duration-300 hover:-translate-y-1 hover:border-neon/60 hover:shadow-neon"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-neon/15 blur-2xl transition group-hover:bg-neon/25" />

      {project.logoSrc ? (
        <div className="relative z-10 flex h-16 w-fit max-w-[10rem] items-center justify-center rounded-2xl border border-white/10 bg-white/95 px-4 py-3 shadow-lg shadow-black/20">
          <img
            src={project.logoSrc}
            alt={`${title} logo`}
            className="max-h-full w-auto object-contain"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : null}

      <p className="relative z-10 mt-4 inline-flex rounded-full border border-neon/35 bg-neon/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neon">
        {domain}
      </p>

      <h3 className="relative z-10 mt-4 font-display text-2xl font-bold text-slate-100">
        {title}
      </h3>
      <p className="relative z-10 mt-3 text-sm leading-relaxed text-slate-300">
        {description}
      </p>

      <a
        href={project.link}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-lg border border-neon/70 px-4 py-2 text-sm font-semibold text-neon transition hover:bg-neon hover:text-slate-950"
      >
        Visit Website
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </svg>
      </a>
    </article>
  );
};

const ProjectsSection = () => (
  <section id="portfolio" className="mx-auto w-full max-w-7xl px-6 py-20 scroll-mt-24">
    <div className="mx-auto max-w-3xl text-center">
      <p className="inline-flex rounded-full border border-neon/45 bg-neon/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neon">
        Portfolio
      </p>
      <h2 className="mt-5 font-display text-3xl font-bold text-slate-50 sm:text-4xl">
        My Projects
      </h2>
      <p className="mt-3 text-slate-300">
        Selected websites built with modern engineering practices, responsive
        UX, and clean production delivery.
      </p>
    </div>

    <article className="mt-10 rounded-2xl border border-white/10 bg-slate-900/70 p-7 shadow-lg shadow-black/30">
      <p className="inline-flex rounded-full border border-neon/35 bg-neon/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neon">
        Key Project
      </p>
      <h3 className="mt-4 font-display text-2xl font-bold text-slate-100">
        Devalayas.com - Temple E-Commerce & Devotional Services Platform
      </h3>
      <p className="mt-3 text-slate-300">
        Built the complete frontend for a live temple e-commerce platform with
        temple browsing, pooja booking, and order processing. Implemented Redux
        state management, REST API integration, and lazy loading/code splitting
        strategies that improved initial page-load performance by around 40%.
      </p>
      <p className="mt-3 text-sm text-slate-400">
        Technologies: React.js, Redux, JavaScript (ES6+), HTML5, CSS3, REST
        APIs
      </p>
    </article>

    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projectLinks.map((project, index) => (
        <ProjectCard
          key={project.link}
          project={project}
          index={index}
        />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
