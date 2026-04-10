import PortfolioHero from "./components/PortfolioHero";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  PricingSection,
} from "./components/PortfolioInfoSections";
import PortfolioNavbar from "./components/PortfolioNavbar";
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";
import { useGithubProfile } from "./hooks/useGithubProfile";

const App = () => {
  const { profile, loading, error, retry } = useGithubProfile("vishalgoudar7");
  const displayName = profile?.name || "Vishal Goudar";

  return (
    <div className="min-h-screen text-slate-100">
      <PortfolioNavbar brandName={displayName} />

      <main>
        <PortfolioHero
          profile={profile}
          loading={loading}
          error={error}
          onRetry={retry}
        />
        <AboutSection profile={profile} />
        <Skills />
        <ExperienceSection />
        <ProjectsSection />
        <PricingSection />
        <ContactSection profile={profile} />
      </main>
    </div>
  );
};

export default App;
