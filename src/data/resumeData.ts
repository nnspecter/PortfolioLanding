export interface ProjectCase {
  id: string;
  title: string;
  role: string;
  period: string;
  company: string;
  tagline: string;
  problem: string;
  solution: string;
  businessResult: string;
  techDetails: string[];
  tags: string[];
  metaBadge?: string;
}

export const personalInfo = {
  name: "nnspecter",
  handle: "nnspecter",
  role: "Fullstack-разработчик / Инженер AI-автоматизаций",
  roleSubtitle: "Fullstack Developer & AI Automation Engineer",
  location: "Казахстан (Удаленная работа)",
  experienceYears: "1.5 года",
  age: "21 год",
  github: "https://github.com/nnspecter",
  telegram: "https://t.me/gitspecter",
  telegramHandle: "@gitspecter",
  email: "nnspecter@gmail.com",
  resumePdfUrl: "/Danil_Resume_Fullstack_AI.pdf",
  bio: "Разработчик программного обеспечения для бизнеса с фокусом на создание B2B SaaS-продуктов, масштабируемую архитектуру и интеграцию искусственного интеллекта. Практический опыт разработки сложных экосистем: от ERP-систем до омниканальных коммуникационных платформ. Короткий time-to-market доставки сложных фич в продакшен, применение методологии Feature-Sliced Design (FSD) и внедрение AI-агентов, кратно сокращающих операционные расходы компании.",
};

export const keyMetrics = [
  {
    value: "AI-разработка",
    label: "Высокая скорость работы",
    desc: "Быстрый цикл разработки благодаря профессиональному использованию AI-агентов (Claude Code, Antigravity) в написании кода.",
  },
  {
    value: "Meta Api",
    label: "WhatsApp | Threads | Instagram",
    desc: "Успешно проходил технический и юридический аудит экосистемы Meta Platforms. Работал с Api интеграциями WhatsApp, Instagram, Threads",
  },
  {
    value: "AI-консультанты",
    label: "Работа с клиентами",
    desc: "Настройка ИИ асистентов для бизнес задач. Автономная обработка обращений клиентов через LLM и распознавание голосовых сообщений (STT).",
  },
  {
    value: "Работа с БД",
    label: "Безопасность и оптимизация",
    desc: " Успешно поддерживаю и оптимизирую работу бекенд-серверной части. Работаю со сложными фичами и миграциями.",
  },
];

export const sellingCases: ProjectCase[] = [
  {
    id: "meta-tech-provider",
    title: "Официальный статус Meta Technology Provider",
    role: "Lead Integrator & Fullstack",
    period: "2026 — Настоящее время",
    company: "",
    tagline: "Прохождение аудита безопасности и внедрение Meta Cloud API",
    problem:
      "Для прямого подключения B2B клиентов к WhatsApp Business API и Instagram Direct требовалось пройти аудит Meta Platforms и обеспечить уровень безопасности enterprise-стандарта.",
    solution:
      "Спроектировал защищенный шлюз с криптографической верификацией подписей вебхуков (HMAC-SHA256), безопасной ротацией токенов доступа OAuth 2.0 и изоляцией данных между клиентами.",
    businessResult:
      "Компания успешно прошла технический и правовой аудит Meta, получила официальный статус Tech Provider и открыла легальный канал интеграции без риска блокировок.",
    techDetails: [
      "Официальный Meta Cloud API (WhatsApp Business, Instagram Graph API, Threads)",
      "Верификация вебхуков с криптографической подписью HMAC-SHA256",
      "Безопасная обработка и хранение токенов в Node.js / PostgreSQL",
      "Соблюдение регламентов GDPR и политик безопасности Meta Platforms",
    ],
    tags: ["Meta Cloud API", "Node.js", "Security Audit", "OAuth 2.0", "Webhooks HMAC", "Linux VPS"],
    metaBadge: "Аудит пройден",
  },
  {
    id: "omnichannel-ai",
    title: "Омниканальная платформа с AI-ассистентом",
    role: "Fullstack & AI Engineer",
    period: "2026 — Настоящее время",
    company: "IT-компания (B2B SaaS, NDA)",
    tagline: "Единое окно оператора и автономный AI-менеджер (LLM + STT)",
    problem:
      "Высокий фонд оплаты труда (ФОТ) операторов первой линии поддержки и потеря потенциальных клиентов в нерабочие часы.",
    solution:
      "Разработал единое приложение для агрегации сообщений (WhatsApp, Instagram, Telegram) и внедрил гибридного AI-агента на базе LLM с модулем распознавания речи (Speech-to-Text) и Api интеграцией с ERP системой.",
    businessResult:
      "Автоматизация 90% первичных обращений клиентов, распознавание намерений клиентов из голосовых сообщений и кратное снижение расходов бизнеса на сторонние подписки. Ускорение и систематизация работы менеджеров с клиентами. ",
    techDetails: [
      "Гибридный AI-менеджер на базе LLM с поддержкой диалогового контекста",
      "Обработка аудиофайлов через модуль Speech-to-Text (STT) для голосовых сообщений",
      "Двунаправленная синхронизация чатов в реальном времени через WebSockets",
      "Автоматическая квалификация лидов и передача данных в CRM",
      "Интеграция ERP системы в приложение, получение списка товаров для бота продажника",
      "Управление рассылками и шаблонами WhatsApp "
    ],
    tags: ["React", "TypeScript", "Node.js", "LLM", "Speech-to-Text", "WebSockets", "FSD"],
    metaBadge: "Аудит пройден",
  },
  {
    id: "erp-crm-fsd",
    title: "Рефакторинг и развитие ERP/CRM экосистемы",
    role: "Fullstack / Архитектура",
    period: "2025 — Настоящее время",
    company: "IT-компания (B2B SaaS, NDA)",
    tagline: "рефакторинг, безопасность и оптимизация PostgreSQL",
    problem:
      "С ростом функционала система управления бизнесом столкнулась с перегрузкой базы данных и сложностью добавления новых модулей из-за legacy html/js/supabase кода.",
    solution:
      "Перенес фронтенд на React/TypeScript, внедрил методологию FSD, изолировал бизнес-логику по слоям, переписал критические SQL-запросы и функции supabase, настроил миграции схем бд без остановки системы.",
    businessResult:
      "Повысилась отказоустойчивость, исключены простои пользователей, исправлены критичные баги и ошибки. Система масштабирована на складской учет, финансы и воронки продаж. Экосистема полностью подготовлена к масштабированию.",
    techDetails: [
      "Рефакторинг legacy фронтенд кода на современный стек",
      "Сложные аналитические запросы и индексы в PostgreSQL",
      "Миграции схемы базы данных без простоя пользователей",
      "Многоуровневая ролевая модель доступа для разных отделов компании"
    ],
    tags: ["Next.js", "React", "TypeScript", "Zustand", "Tanstack Query", "Supabase"],
    metaBadge: "Аудит пройден",
  },
  {
    id: "webrtc-mobile",
    title: "WebRTC-телефония и десктоп приложения",
    role: "Telecom & Fullstack Developer",
    period: "2026 — Настоящее время",
    company: "IT-компания ",
    tagline: "Браузерный софтфон и windows/macOs приложение",
    problem:
      "Необходимость совершать звонки клиентам без сторонних телефонных аппаратов и потребность в подтвержденном опыте публикации мобильных продуктов.",
    solution:
      "Реализовал Web-софтфон на WebRTC прямо в браузере с умной каскадной переадресацией и живым журналом через WebSockets. Разработал десктоп приложения для большей стабильности соединений.",
    businessResult:
      "Менеджеры получили возможность звонить в один клик из карточки CRM. Мобильное приложение прошло полную модерацию Google с соблюдением требований безопасности.",
    techDetails: [
      "Передача звука через WebRTC в реальном времени с низкой задержкой",
      "Умная каскадная маршрутизация входящих вызовов по свободным операторам",
      "Express, кросплатформенное десктопное реакт приложение для windows/macos",
    ],
    tags: ["WebRTC", "WebSockets", "React Native", "Expo", "Google Play", "Node.js"],
    metaBadge: "Аудит пройден",
  },
];

export const technicalSkills = [
  {
    domain: "Frontend & Architecture",
    items: [
      { name: "React (Vite, Webpack)", note: "Коммерческий опыт разработки сложных SPA" },
      { name: "Next.js", note: "SSR, SSG и оптимизация производительности" },
      { name: "TypeScript", note: "Строгая типизация в масштабе всего проекта" },
      { name: "Feature-Sliced Design (FSD)", note: "Модульная архитектура для легкого масштабирования" },
      { name: "React Native (Expo)", note: "Разработка и публикация в Google Play" },
      { name: "Zustand / Redux Toolkit", note: "Управление глобальным состоянием" },
      { name: "Tailwind CSS & shadcn/ui", note: "Компонентный дизайн системного уровня" },
    ],
  },
  {
    domain: "Backend & Базы данных",
    items: [
      { name: "Node.js & Express", note: "Разработка высоконагруженных API и шлюзов" },
      { name: "PostgreSQL", note: "Сложные SQL-запросы, оптимизация и индексация" },
      { name: "Zero-Downtime Migrations", note: "Обновление схем баз данных без простоя" },
      { name: "WebSockets", note: "Двунаправленная передача данных в реальном времени" },
      { name: "RESTful API & Webhooks", note: "Разработка и верификация интеграций" },
    ],
  },
  {
    domain: "AI, Интеграции & Безопасность",
    items: [
      { name: "Meta Cloud API", note: "WhatsApp Business API, Instagram Graph, Threads" },
      { name: "Статус Meta Tech Provider", note: "Практика прохождения аудитов Meta Platforms" },
      { name: "LLM & AI-агенты", note: "Автономные менеджеры с ведением контекста" },
      { name: "Speech-to-Text (STT)", note: "Распознавание речи из голосовых сообщений" },
      { name: "Claude Code & Antigravity", note: "AI-Assisted разработка и ускорение time-to-market" },
      { name: "HMAC-SHA256 & OAuth 2.0", note: "Криптографическая защита вебхуков и токенов" },
    ],
  },
  {
    domain: "Инфраструктура & Процессы",
    items: [
      { name: "Linux VPS & Nginx", note: "Развертывание и системное администрирование" },
      { name: "WebRTC Телефония", note: "Голосовая связь прямо в окне браузера" },
      { name: "Google Play Console", note: "Полный релизный цикл Android-приложений" },
      { name: "ESLint в продакшене", note: "Строгий статический анализ без предупреждений" },
      { name: "Короткий Time-to-Market", note: "Быстрая и предсказуемая доставка сложных фич в продакшен" },
    ],
  },
];
