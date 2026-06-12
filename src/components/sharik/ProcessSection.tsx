import { Compass, SearchCheck, Shapes, Workflow, Rocket } from "lucide-react";
import { FallbackImage } from "../FallbackImage";
import { assetUrl } from "../../lib/assets";

const processSteps = [
  {
    icon: SearchCheck,
    step: "01",
    title: "Аудит",
    text: "Смотрим сайт, карточки, отзывы, контент, заявки и аналитику.",
  },
  {
    icon: Compass,
    step: "02",
    title: "Стратегия",
    text: "Выбираем точки роста и собираем план без лишних гипотез.",
  },
  {
    icon: Shapes,
    step: "03",
    title: "Упаковка",
    text: "Усиливаем смыслы, страницы, карточки и доверительные блоки.",
  },
  {
    icon: Workflow,
    step: "04",
    title: "Внедрение",
    text: "Настраиваем CRM-связки, обработку заявок и аналитику.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Рост",
    text: "Смотрим динамику и усиливаем только работающие связки.",
  },
];

const lineSources = [assetUrl("assets/process/process-line.svg")];

export function ProcessSection() {
  return (
    <section id="process" className="sh-section sh-process reveal">
      <div className="sh-container">
        <div className="sh-section__heading">
          <p className="sh-kicker">Процесс</p>
          <h2>Спокойный процесс без маркетингового шума</h2>
          <p>
            Сначала разбираем реальную механику клиники, потом усиливаем только те точки, которые влияют на запись.
          </p>
        </div>

        <div className="sh-process__wrap">
          <FallbackImage
            sources={lineSources}
            alt=""
            className="sh-process__line"
            fallback={<div className="sh-process__line-fallback" />}
          />

          <div className="sh-process__grid">
            {processSteps.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.step} className="sh-card sh-process__card">
                  <div className="sh-process__step">
                    <span>{item.step}</span>
                    <Icon size={18} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
