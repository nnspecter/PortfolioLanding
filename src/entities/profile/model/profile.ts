import type { Profile, ProfileHighlight, TechStackItem } from "./types";

export const profile: Profile = {
  name: "nnspecter",
  title: "Fullstack & AI Engineer",
  roleSubtitle: "Fullstack Developer & AI Automation Engineer",
  location: "Казахстан (Удаленная работа)",
  github: "https://github.com/nnspecter",
  telegram: "https://t.me/gitspecter",
  telegramHandle: "@gitspecter",
  email: "nnspecter@gmail.com",
  phone: "+7 771 664 10 02",
  whatsapp: "https://wa.me/77716641002",
  resume: {
    url: `${import.meta.env.BASE_URL}Danil_Resume_Fullstack_AI.pdf`,
    fileName: "Danil_Resume_Fullstack_AI.pdf",
  },
};

export const profileHighlights: ProfileHighlight[] = [
  {
    value: "AI-разработка",
    label: "Высокая скорость работы",
    description:
      "Быстрый цикл разработки благодаря профессиональному использованию AI-агентов (Claude Code, Antigravity) в написании кода.",
  },
  {
    value: "Meta Api",
    label: "WhatsApp | Threads | Instagram",
    description:
      "Успешно проходил технический и юридический аудит экосистемы Meta Platforms. Работал с Api интеграциями WhatsApp, Instagram, Threads",
  },
  {
    value: "AI-консультанты",
    label: "Работа с клиентами",
    description:
      "Настройка ИИ асистентов для бизнес задач. Автономная обработка обращений клиентов через LLM и распознавание голосовых сообщений (STT).",
  },
  {
    value: "Работа с БД",
    label: "Безопасность и оптимизация",
    description:
      "Успешно поддерживаю и оптимизирую работу бекенд-серверной части. Работаю со сложными фичами и миграциями.",
  },
];

export const techStack: TechStackItem[] = [
  { area: "Frontend", tools: "React, Next.js, FSD" },
  { area: "Backend", tools: "Node.js, Express, Supabase" },
  { area: "Database", tools: "PostgreSQL, mongoDb" },
  { area: "Integrations", tools: "Meta Cloud API, LLM + STT" },
  { area: "DevTools", tools: "Docker | Claude Code, Antigravity" },
];
