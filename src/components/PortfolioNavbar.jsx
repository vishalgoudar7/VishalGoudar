import { useEffect, useState } from "react";
import { navItems } from "../constants/navItems";

const getInitialActiveHash = () => {
  if (typeof window === "undefined" || !window.location.hash) {
    return "#home";
  }

  return window.location.hash;
};

const PortfolioNavbar = ({ brandName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(getInitialActiveHash);

  useEffect(() => {
    const updateActiveFromScroll = () => {
      const scrollOffset = 130;
      const current = navItems
        .map((item) => item.href)
        .reduce((selected, href) => {
          const section = document.querySelector(href);
          if (!section) {
            return selected;
          }

          const sectionTop = section.offsetTop;
          if (window.scrollY + scrollOffset >= sectionTop) {
            return href;
          }
          return selected;
        }, "#home");

      setActiveHash(current);
    };

    const updateFromHash = () => {
      setActiveHash(window.location.hash || "#home");
    };

    updateActiveFromScroll();
    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, []);

  const getLinkClasses = (href) =>
    `text-sm font-medium transition ${
      activeHash === href
        ? "text-neon"
        : "text-slate-300 hover:text-neon"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-tight text-slate-100"
        >
          {brandName}
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-slate-100 transition hover:border-neon hover:text-neon lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={getLinkClasses(item.href)}
                onClick={() => setActiveHash(item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={getLinkClasses(item.href)}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveHash(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default PortfolioNavbar;
