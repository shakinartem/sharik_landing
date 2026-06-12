import { ArrowRight, Sparkles, TrendingUp, Shield, Route } from "lucide-react";
import { FallbackImage } from "../FallbackImage";
import { assetUrl } from "../../lib/assets";

const heroStats = [
  { label: "Фокус", value: "Сайт, карты, CRM" },
  { label: "Результат", value: "Больше записей" },
  { label: "Подход", value: "Живой HTML" },
];

const heroPoints = [
  "Показываем, где пациент теряется на пути к записи.",
  "Собираем удобную систему из страниц, карточек, отзывов и CRM.",
  "Сайт остаётся читаемым, даже если декоративная графика не загрузится.",
];

const decorSources = [assetUrl("assets/hero/hero-balloon.svg")];
const routeSources = [assetUrl("assets/hero/hero-route.svg")];

export function HeroSection() {
  return (
    <section id="top" className="sh-hero">
      <div className="sh-container sh-hero__grid">
        <div className="sh-hero__copy reveal">
          <p className="sh-kicker">ШАРиК digital для клиник</p>
          <h1 className="sh-hero__title">
            Маркетинг, который
            <span>приводит пациентов</span>
          </h1>
          <p className="sh-hero__lead">
            Строим понятную digital-систему: сайт, карты, отзывы, контент, CRM и аналитику. Тексты и сценарии живут в HTML,
            а графика остаётся только аккуратным декором.
          </p>

          <div className="sh-hero__actions">
            <a href="#cta" className="sh-button sh-button--primary">
              Получить разбор
              <ArrowRight size={18} />
            </a>
            <a href="#system" className="sh-button sh-button--secondary">
              Смотреть систему
            </a>
          </div>

          <ul className="sh-hero__points">
            {heroPoints.map((point) => (
              <li key={point}>
                <Sparkles size={16} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="sh-hero__panel reveal">
          <div className="sh-hero__panel-top">
            <div className="sh-hero__panel-copy">
              <p className="sh-hero__panel-label">Что видит владелец</p>
              <h2>Быстрый и понятный рост без магии</h2>
            </div>

            <div className="sh-hero__ornament sh-hero__ornament--balloon" aria-hidden="true">
              <FallbackImage
                sources={decorSources}
                alt=""
                className="sh-hero__ornament-img"
                fallback={<div className="sh-hero__ornament-fallback" />}
              />
            </div>
          </div>

          <div className="sh-hero__signals">
            <div className="sh-hero__signal">
              <TrendingUp size={18} />
              <h3>Рост заявки</h3>
              <p>Понимаем, какие каналы и страницы реально двигают обращение.</p>
            </div>
            <div className="sh-hero__signal">
              <Shield size={18} />
              <h3>Доверие</h3>
              <p>Усиливаем сайт, отзывы и карточки клиники в точках принятия решения.</p>
            </div>
            <div className="sh-hero__signal">
              <Route size={18} />
              <h3>Маршрут</h3>
              <p>Собираем путь от первого касания до записи без лишних потерь.</p>
            </div>
          </div>

          <div className="sh-hero__route" aria-hidden="true">
            <FallbackImage
              sources={routeSources}
              alt=""
              className="sh-hero__route-img"
              fallback={<div className="sh-hero__route-fallback" />}
            />
          </div>

          <div className="sh-hero__stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="sh-hero__stat">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
