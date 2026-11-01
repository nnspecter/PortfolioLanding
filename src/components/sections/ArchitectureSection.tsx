import { Badge } from "@/components/ui/badge";
import { Layers, Zap, Check } from "lucide-react";

export function ArchitectureSection() {
  const fsdLayers = [
    {
      layer: "app/",
      title: "App Layer",
      desc: "Инициализация приложения, провайдеры контекста, глобальный роутинг и стили.",
    },
    {
      layer: "pages/",
      title: "Pages",
      desc: "Композиция экранов приложения: канбан воронок, окно диалогов, складской учет.",
    },
    {
      layer: "widgets/",
      title: "Widgets",
      desc: "Самостоятельные крупные блоки интерфейса (WebRTC софтфон, омниканальный чат).",
    },
    {
      layer: "features/",
      title: "Features",
      desc: "Пользовательские сценарии: отправка AI-ответа, переадресация вызова, фильтрация лидов.",
    },
    {
      layer: "entities/",
      title: "Entities",
      desc: "Бизнес-модели данных домена: Lead, Deal, AudioRecord, User, Message.",
    },
    {
      layer: "shared/",
      title: "Shared",
      desc: "Переиспользуемый UI-kit (shadcn/ui), API-клиенты, валидаторы, утилиты и типы.",
    },
  ];

  const deliveryPrinciples = [
    {
      step: "01",
      title: "Декомпозиция по слоям FSD",
      desc: "Каждая задача изолирована в своем слое (feature/entity/widget). Отсутствуют циклические импорты и скрытые побочные эффекты при доработках.",
    },
    {
      step: "02",
      title: "Строгая типизация TypeScript & ESLint",
      desc: "Ошибки типов и логики перехватываются компилятором на этапе написания кода, а не в продакшене. Нулевое время на отлов тривиальных багов.",
    },
    {
      step: "03",
      title: "Безопасные миграции PostgreSQL (Zero-Downtime)",
      desc: "Добавление индексов без блокировок таблиц, разделение этапов добавления колонок и модификации логики для непрерывной работы клиентов.",
    },
    {
      step: "04",
      title: "Автономное управление бэклогом",
      desc: "Самостоятельный анализ бизнес-требований, предсказуемая реализация сложных фич и оперативный деплой на Linux VPS с минимальным time-to-market.",
    },
  ];

  return (
    <section id="architecture" className="py-20 md:py-28 border-b border-[#26262B]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <Badge variant="outline">
            Инженерная методология
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-[-0.04em]">
            Архитектура FSD и предсказуемый Time-to-Market
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Короткий цикл поставки (Time-to-Market) достигается не конвейерной спешкой, а системной организацией кодовой базы по методологии Feature-Sliced Design и строгим контролем качества.
          </p>
        </div>

        {/* Asymmetric 2-column layout per Design.md */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* FSD Hierarchy (6 cols) */}
          <div className="lg:col-span-6 surface-card p-6 border border-[#2E2E32] rounded-lg space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#26262B]">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-white" />
                <span className="font-mono text-xs font-semibold text-white">
                  Feature-Sliced Design (FSD)
                </span>
              </div>
              <span className="font-mono text-[11px] text-neutral-400">
                Однонаправленный поток
              </span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Слои зависят строго сверху вниз: нижние слои ничего не знают о верхних. Это позволяет нескольким разработчикам параллельно развивать модули ERP без конфликтов слияния и регрессий.
            </p>

            <div className="space-y-2 pt-2">
              {fsdLayers.map((layer, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-md bg-[#161618] border border-[#26262B] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-white px-2 py-0.5 rounded bg-[#202024] border border-[#2E2E32]">
                      {layer.layer}
                    </span>
                    <span className="text-xs font-semibold text-neutral-200">
                      {layer.title}
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-400 sm:text-right max-w-xs">
                    {layer.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Speed Factors (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="surface-card p-6 border border-[#2E2E32] rounded-lg space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#26262B]">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-white" />
                  <span className="font-mono text-xs font-semibold text-white">
                    Факторы сокращения Time-to-Market
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#4ADE80]">
                  Fast & Predictable
                </span>
              </div>

              <div className="space-y-4">
                {deliveryPrinciples.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-md bg-[#161618] border border-[#26262B] space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-white">
                        {item.title}
                      </span>
                      <span className="font-mono text-xs text-neutral-500">
                        {item.step}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] font-mono text-neutral-400 flex items-center gap-2 border-t border-[#26262B]">
                <Check className="w-3.5 h-3.5 text-white" />
                <span>Обеспечивает быстрое закрытие спринтов без накопления технического долга</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
