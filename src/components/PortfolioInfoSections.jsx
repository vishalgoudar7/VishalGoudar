const softSkills = [
  "Strong Communication",
  "Time Management",
  "Analytical Thinking",
  "Team Collaboration",
  "Problem Solving",
  "Adaptability",
  "Self-Motivated",
];

const languages = [
  "Kannada (Native)",
  "English (Professional)",
  "Hindi (Conversational)",
];

const experienceList = [
  {
    role: "Frontend Developer",
    company: "Anek Technologies Pvt Ltd - Belagavi, Karnataka",
    period: "Dec 2023 - Present",
    points: [
      "Developing and maintaining responsive web applications using React.js, Redux, and JavaScript (ES6+).",
      "Integrated AI-powered features into production apps to improve UX and automate workflows.",
      "Built reusable React component library and optimized performance via lazy loading and code splitting.",
      "Collaborating with backend teams to integrate REST APIs within Agile sprint cycles.",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "Avishkar Minds Pvt Ltd - Belagavi, Karnataka",
    period: "May 2023 - Dec 2023",
    points: [
      "Built React.js + Redux UI components for temple listing, search, cart, and checkout in Devalayas.com.",
      "Integrated RESTful APIs for dynamic data fetching and supported secure login/registration flows.",
    ],
  },
];

const pricingList = [
  {
    name: "Starter",
    price: "From $199",
    desc: "Portfolio pages, responsive sections, and polished UI delivery.",
  },
  {
    name: "Professional",
    price: "From $499",
    desc: "Business websites with API integration and performance optimization.",
  },
  {
    name: "Custom",
    price: "Custom Quote",
    desc: "Complex app modules with dashboard workflows and scalable architecture.",
  },
];

const blogList = [
  {
    title: "AI Features in Frontend Products",
    excerpt:
      "How production React apps can safely integrate AI workflows without hurting performance.",
  },
  {
    title: "Using Lazy Loading + Code Splitting",
    excerpt:
      "Practical methods I use to reduce initial bundle cost and improve first-load experience.",
  },
];

const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-8 text-center">
    <h2 className="font-display text-3xl font-bold text-slate-50 sm:text-4xl">
      {title}
    </h2>
    <p className="mx-auto mt-3 max-w-3xl text-slate-300">{subtitle}</p>
  </div>
);

const sectionClass = "mx-auto w-full max-w-7xl px-6 py-16 scroll-mt-24";

const PortfolioPrimarySections = ({ profile }) => {
  const name = profile?.name || "VISHALGOUDA GOUDAR";
  const location = profile?.location || "Belagavi, Karnataka 590016";

  return (
    <>
      <section id="about" className={sectionClass}>
        <SectionHeading
          title="About"
          subtitle="Professional summary, education, and personal strengths from your resume."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-7 shadow-lg shadow-black/30">
            <h3 className="font-display text-2xl font-semibold text-slate-100">
              {name}
            </h3>
            <p className="mt-3 text-slate-300">
              Frontend Developer with 2+ years of experience building responsive
              web applications using React.js, Redux, and JavaScript. Skilled
              in REST API integration, state management, and performance
              optimization. Familiar with AI-powered feature integration in
              production apps.
            </p>
            <p className="mt-4 text-sm text-slate-400">Location: {location}</p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-7 shadow-lg shadow-black/30">
            <h3 className="font-display text-xl font-semibold text-slate-100">
              Education
            </h3>
            <p className="mt-3 text-slate-300">
              Bachelor of Engineering, SG Balekundri Institute of Technology,
              Belagavi (2022)
            </p>
            <p className="mt-2 text-slate-400">GPA: 7.68 / 10</p>

            <h4 className="mt-5 font-semibold text-neon">Soft Skills</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-neon/35 bg-neon/10 px-3 py-1 text-xs font-semibold text-neon"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="experience" className={sectionClass}>
        <SectionHeading
          title="Experience"
          subtitle="Hands-on development impact across product teams."
        />
        <div className="space-y-6">
          {experienceList.map((item) => (
            <article
              key={`${item.role}-${item.period}`}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/30"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-slate-100">
                    {item.role}
                  </h3>
                  <p className="text-sm text-slate-400">{item.company}</p>
                </div>
                <span className="w-fit rounded-full border border-neon/45 bg-neon/10 px-3 py-1 text-xs font-semibold text-neon">
                  {item.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export const PortfolioSecondarySections = ({ profile }) => {
  const location = profile?.location || "Belagavi, Karnataka 590016";
  const githubUrl = profile?.html_url || "https://github.com/vishalgoudar7";
  const linkedinUrl = "https://linkedin.com/in/vishalgoudar";
  const email = "vishalgoudar05@gmail.com";
  const phone = "+91-7892660979";

  return (
    <>
      <section id="pricing" className={sectionClass}>
        <SectionHeading
          title="Pricing"
          subtitle="Flexible engagement options for website and frontend app delivery."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pricingList.map((plan) => (
            <article
              key={plan.name}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 text-center shadow-lg shadow-black/30"
            >
              <h3 className="font-display text-2xl font-bold text-slate-100">
                {plan.name}
              </h3>
              <p className="mt-2 text-neon">{plan.price}</p>
              <p className="mt-4 text-sm text-slate-300">{plan.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="blog" className={sectionClass}>
        <SectionHeading
          title="Blog"
          subtitle="Insights from day-to-day frontend and product development work."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {blogList.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/30 transition hover:border-neon/60"
            >
              <h3 className="font-display text-2xl font-semibold text-slate-100">
                {post.title}
              </h3>
              <p className="mt-3 text-slate-300">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className={sectionClass}>
        <SectionHeading
          title="Contact"
          subtitle="Reach out for collaboration, projects, or frontend consulting."
        />
        <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-7 shadow-lg shadow-black/30">
          <div className="grid gap-4 text-slate-300 sm:grid-cols-2">
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Location: {location}</p>
            <p className="break-all">GitHub: {githubUrl}</p>
            <p className="break-all sm:col-span-2">LinkedIn: {linkedinUrl}</p>
          </div>

          <h4 className="mt-5 font-semibold text-neon">Languages</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {languages.map((item) => (
              <span
                key={item}
                className="rounded-full border border-neon/35 bg-neon/10 px-3 py-1 text-xs font-semibold text-neon"
              >
                {item}
              </span>
            ))}
          </div>

          <a
            href={`mailto:${email}`}
            className="mt-6 inline-flex rounded-lg bg-neon px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Start Conversation
          </a>
        </article>
      </section>
    </>
  );
};

export default PortfolioPrimarySections;
