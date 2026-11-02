import type { Course, Education, Language, WorkExperience, WorkPreferences } from "./types";

export const workExperience: WorkExperience[] = [
  {
    company: "ArtTech",
    role: "Fullstack-разработчик, Team Lead",
    duration: "6 месяцев",
    focus: "B2B SaaS, Meta API, ERP-системы",
  },
  {
    company: "ТОО Жаикмунай",
    role: "Университетская практика",
    duration: "5 месяцев",
    focus: "Инженерная практика, программные решения и IT-инфраструктура",
  },
];

export const workPreferences: WorkPreferences = {
  location: "Казахстан, Уральск",
  format: "Полная удаленная работа (Full-time Remote)",
  timezone: "UTC+5 (гибкая синхронизация с UTC+3 ... UTC+6)",
};

export const education: Education = {
  institution: "Западно-Казахстанский университет им. Махамбета Утемисова",
  institutionShort: "ЗКУ им. М. Утемисова",
  institutionType: "Университет",
  specialty: "Вычислительная техника и ПО",
  specialtyCode: "ВТиПО",
  specialtyDescription: "Алгоритмическая база, базы данных и системная разработка",
  degree: "Высшее образование (диплом)",
  degreeBadge: "Бакалавриат",
  graduationYear: "2026",
  status: "Завершил обучение в 2026 году",
  faculty: "Разработка ПО и компьютерные системы",
};

export const languages: Language[] = [
  { name: "Русский", level: "Родной (Native)", description: "Свободное владение" },
  {
    name: "Английский",
    level: "B1-B2 (Upper-Intermediate)",
    description: "Техническая документация, деловая переписка, созвоны",
  },
  { name: "Казахский", level: "Начальный", description: "Небольшое понимание диалогов" },
];

export const courses: Course[] = [
  {
    title: "Generative AI",
    organization: "Vanderbilt University",
    certificateUrl: "https://coursera.org/share/0ecb3d71e7f986348846853e6d2f964b",
  },
  {
    title: "Prompt Engineering",
    organization: "Vanderbilt University",
    certificateUrl: "https://coursera.org/share/7606bae06cff2ec73131f7c0f3959a7a",
  },
  {
    title: "Leading Teams: Developing as a Leader",
    organization: "University of Illinois Urbana-Champaign",
    certificateUrl: "https://coursera.org/share/0157c6431cc4aab9a771f6312604beef",
  },
];
