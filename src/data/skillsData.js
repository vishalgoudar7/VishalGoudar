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
  TbBrush,
  TbDatabase,
  TbDeviceDesktopCode,
  TbLayoutGrid,
  TbSeo,
  TbServerCog,
  TbTool,
  TbTopologyStar3,
  TbViewportWide,
} from "react-icons/tb";
import { BsFiletypeJson } from "react-icons/bs";

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    description:
      "Component-first interfaces with modern JavaScript, semantic markup, and progressive framework knowledge.",
    icon: TbDeviceDesktopCode,
    accent: "cyan",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "React.js", icon: SiReact },
      { name: "Vue.js", icon: SiVuedotjs, badge: "Basic" },
    ],
  },
  {
    id: "styling",
    title: "Styling",
    description:
      "Utility-first systems, layout primitives, and scalable visual implementation for polished interfaces.",
    icon: TbBrush,
    accent: "fuchsia",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Flexbox", icon: TbArrowsHorizontal },
      { name: "CSS Grid", icon: TbLayoutGrid },
    ],
  },
  {
    id: "state-management",
    title: "State Management",
    description:
      "Predictable client-side state flows for medium to large React applications.",
    icon: TbTopologyStar3,
    accent: "violet",
    skills: [
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Context API", icon: TbTopologyStar3 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description:
      "Core MERN strength focused on API design, server logic, and dependable application behavior.",
    icon: TbServerCog,
    accent: "emerald",
    featured: true,
    featuredLabel: "Core Strength",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    id: "database",
    title: "Database",
    description:
      "Document-oriented modeling and query workflows tailored for MERN applications.",
    icon: TbDatabase,
    accent: "green",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
    ],
  },
  {
    id: "api-integration",
    title: "API & Integration",
    description:
      "Structured data exchange, HTTP workflows, and frontend-backend connectivity.",
    icon: TbApi,
    accent: "sky",
    skills: [
      { name: "REST API", icon: TbApi },
      { name: "Axios", icon: SiAxios },
      { name: "JSON", icon: BsFiletypeJson },
    ],
  },
  {
    id: "tools-deployment",
    title: "Tools & Deployment",
    description:
      "Source control, testing workflows, and shipping production-ready frontend builds.",
    icon: TbTool,
    accent: "amber",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
    ],
  },
  {
    id: "other-skills",
    title: "Other Skills",
    description:
      "Delivery-focused practices that improve usability, reach, and production quality.",
    icon: TbBrowserCheck,
    accent: "rose",
    skills: [
      { name: "Responsive Design", icon: TbViewportWide },
      { name: "Cross-browser Compatibility", icon: TbBrowserCheck },
      { name: "SEO Basics", icon: TbSeo },
    ],
  },
];

export const totalSkillCount = skillCategories.reduce(
  (count, category) => count + category.skills.length,
  0
);
