const fallbackProfile = {
  name: "VISHALGOUDA GOUDAR",
  role: "Frontend Developer",
  summary:
    "Frontend Developer with 2+ years of hands-on experience building responsive web applications and dashboards using React.js, Vue.js, Redux, and JavaScript.",
  location: "Belagavi, Karnataka 590016",
  email: "vishalgoudar05@gmail.com",
  phone: "+91-7892660979",
  avatarUrl: "https://github.com/vishalgoudar7.png",
};

const ContactRow = ({ icon, label, value }) => (
  <p className="flex items-center gap-3 text-sm text-slate-300 sm:text-base">
    <span className="text-neon" aria-hidden="true">
      {icon}
    </span>
    <span className="sr-only">{label}: </span>
    <span>{value}</span>
  </p>
);

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-slate-200 transition hover:border-neon hover:text-neon hover:shadow-neon"
  >
    {children}
  </a>
);

const PortfolioHero = ({ profile, loading, error, onRetry }) => {
  if (loading) {
    return (
      <section
        id="home"
        className="mx-auto flex min-h-[calc(100vh-74px)] w-full max-w-7xl items-center justify-center px-6"
      >
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4">
          <span className="h-3 w-3 animate-pulse rounded-full bg-neon" />
          <span className="text-sm text-slate-300 sm:text-base">
            Loading portfolio data...
          </span>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="home"
        className="mx-auto flex min-h-[calc(100vh-74px)] w-full max-w-7xl items-center justify-center px-6"
      >
        <div className="w-full max-w-xl rounded-2xl border border-red-500/40 bg-slate-900/80 p-6 text-center">
          <h2 className="font-display text-2xl font-bold text-slate-100">
            Unable to load profile
          </h2>
          <p className="mt-2 text-slate-300">{error}</p>
          <button
            type="button"
            onClick={onRetry}
            className="mt-6 rounded-lg bg-neon px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  const fullName = profile?.name || fallbackProfile.name;
  const role = fallbackProfile.role;
  const summary = fallbackProfile.summary;
  const location = profile?.location || fallbackProfile.location;
  const avatarUrl = profile?.avatar_url || fallbackProfile.avatarUrl;
  const email = fallbackProfile.email;
  const phone = fallbackProfile.phone;
  const githubUrl = profile?.html_url || "https://github.com/vishalgoudar7";
  const linkedinUrl = "https://www.linkedin.com/in/vishalgoudar";

  return (
    <section
      id="home"
      className="mx-auto grid min-h-[calc(100vh-74px)] w-full max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.12fr_0.88fr] lg:items-center"
    >
      <div className="opacity-0 animate-fade-up">
        <span className="inline-flex rounded-full border border-neon/60 bg-neon/10 px-4 py-1.5 text-sm font-semibold text-neon">
          Hello I&apos;m
        </span>

        <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-slate-50 text-glow sm:text-5xl lg:text-6xl">
          {fullName}
        </h1>

        <p className="mt-4 text-lg font-semibold text-neon sm:text-xl">{role}</p>
        <p className="mt-3 max-w-2xl text-slate-300">{summary}</p>

        <div className="mt-8 space-y-4">
          <ContactRow
            label="Email"
            value={email}
            icon={
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 5h18v14H3z" />
                <path d="m3 7 9 7 9-7" />
              </svg>
            }
          />
          <ContactRow
            label="Phone"
            value={phone}
            icon={
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92V20a2 2 0 0 1-2.18 2 19.84 19.84 0 0 1-8.63-3.07 19.53 19.53 0 0 1-6-6A19.84 19.84 0 0 1 2.12 4.18 2 2 0 0 1 4.1 2h3.09a2 2 0 0 1 2 1.72c.12.89.34 1.76.66 2.6a2 2 0 0 1-.45 2.11L8 9.83a16 16 0 0 0 6.17 6.17l1.4-1.4a2 2 0 0 1 2.11-.45c.84.32 1.71.54 2.6.66A2 2 0 0 1 22 16.92Z" />
              </svg>
            }
          />
          <ContactRow
            label="Location"
            value={location}
            icon={
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            }
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#portfolio"
            className="rounded-xl bg-neon px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-emerald-400"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-neon/70 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-neon transition hover:bg-neon/10"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <SocialIcon href={githubUrl} label="GitHub profile">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-1.03-.01-1.87-2.5.46-3.15-.61-3.35-1.18-.11-.29-.59-1.18-1-1.41-.34-.18-.83-.63-.01-.64.77-.01 1.32.71 1.5 1 .88 1.48 2.29 1.06 2.85.81.09-.64.35-1.06.63-1.31-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.57 9.57 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.82-2.34 4.66-4.57 4.91.36.31.68.91.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
            </svg>
          </SocialIcon>

          <SocialIcon href={linkedinUrl} label="LinkedIn profile">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 1 0-.02 5 2.5 2.5 0 0 0 .02-5ZM2.8 9.3h4.3v11.2H2.8V9.3Zm6.9 0H14v1.53h.06c.6-1.08 2.06-2.23 4.24-2.23 4.53 0 5.36 2.98 5.36 6.86v7.04h-4.3v-6.24c0-1.49-.03-3.4-2.07-3.4-2.08 0-2.4 1.62-2.4 3.3v6.34h-4.3V9.3Z" />
            </svg>
          </SocialIcon>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-sm opacity-0 animate-fade-in">
        <div className="absolute inset-4 rounded-full bg-neon/30 blur-3xl animate-glow-pulse" />
        <div className="relative rounded-full bg-gradient-to-br from-neon via-emerald-300 to-green-500 p-1.5 shadow-neon">
          <div className="rounded-full bg-slate-900 p-2">
            <img
              src={avatarUrl}
              alt={`${fullName} profile`}
              className="aspect-square w-full rounded-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
