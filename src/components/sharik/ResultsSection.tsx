import { ArrowUpRight, CheckCircle2, LayoutDashboard, LineChart, ListChecks } from "lucide-react";
import { FallbackImage } from "../FallbackImage";
import { assetUrl } from "../../lib/assets";

const resultCards = [
  {
    icon: CheckCircle2,
    title: "Повысить доверие до обращения",
    text: "Усиливаем сайт, отзывы и карточки клиники до того, как пациент нажмёт на кнопку записи.",
  },
  {
    icon: LayoutDashboard,
    title: "Упростить путь до записи",
    text: "Убираем лишние шаги и делаем маршрут понятным с первого экрана.",
  },
  {
    icon: LineChart,
    title: "Понять, какие каналы приводят пациентов",
    text: "Делаем аналитику, в которой видно не только трафик, но и качество обращений.",
  },
];

const dashboardSources = [assetUrl("assets/results/results-dashboard.svg")];

const auditItems = ["Сайт и посадочные", "Карты и геопозиции", "Отзывы и репутация", "Путь пациента до записи", "Обработку заявок", "CRM и аналитику"];

export function ResultsSection() {
  return (
    <section id="results" className="sh-section sh-results reveal">
      <div className="sh-container">
        <div className="sh-section__heading">
          <p className="sh-kicker">Результаты</p>
          <h2>Показываем не красивые отчеты, а точки роста клиники</h2>
          <p>
            На разборе видно, какие элементы мешают пациенту дойти до записи и что стоит усилить в первую очередь.
          </p>
        </div>

        <div className="sh-results__layout">
          <div className="sh-results__cards">
            {resultCards.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="sh-card sh-results__card">
                  <span className="sh-icon-pill" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>

          <aside className="sh-results__dashboard">
            <FallbackImage
              sources={dashboardSources}
              alt=""
              className="sh-results__dashboard-img"
              fallback={<div className="sh-results__dashboard-fallback" />}
            />
            <div className="sh-results__audit">
              <p className="sh-results__audit-label">Проверяем</p>
              <ul>
                {auditItems.map((item) => (
                  <li key={item}>
                    <ListChecks size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className="sh-button sh-button--primary sh-results__button">
                Получить разбор
                <ArrowUpRight size={18} />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
