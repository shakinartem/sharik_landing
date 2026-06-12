import { AlertTriangle, Eye, HandCoins, MessageSquareMore, Search } from "lucide-react";
import { FallbackImage } from "../FallbackImage";
import { assetUrl } from "../../lib/assets";

const lossItems = [
  {
    icon: Eye,
    title: "Сайт не объясняет ценность",
    text: "Пользователь не понимает, почему стоит выбрать именно эту клинику.",
  },
  {
    icon: Search,
    title: "Карты и отзывы не убеждают",
    text: "Карточка клиники выглядит слабее конкурентов и не поддерживает доверие.",
  },
  {
    icon: MessageSquareMore,
    title: "Контент не прогревает",
    text: "Тексты не отвечают на вопросы пациента и не ведут к следующему шагу.",
  },
  {
    icon: HandCoins,
    title: "Заявки теряются",
    text: "Слабая обработка обращений ломает путь между интересом и записью.",
  },
];

const pathSources = [assetUrl("assets/loss-map/loss-map-path.svg")];

export function LossMapSection() {
  return (
    <section id="loss-map" className="sh-section sh-loss reveal">
      <div className="sh-container">
        <div className="sh-section__heading sh-section__heading--split">
          <div>
            <p className="sh-kicker">Потери</p>
            <h2>Где клиника теряет пациентов</h2>
            <p>
              Проблема редко бывает в одной рекламе. Потери возникают на сайте, в карточках, отзывах, переписке и обработке заявок.
            </p>
          </div>

          <div className="sh-loss__callout">
            <AlertTriangle size={18} />
            <span>Сначала находим узкое место, потом усиливаем именно его.</span>
          </div>
        </div>

        <div className="sh-loss__layout">
          <div className="sh-loss__cards">
            {lossItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="sh-card sh-loss__card">
                  <span className="sh-icon-pill" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>

          <aside className="sh-loss__path" aria-label="Путь пациента">
            <FallbackImage
              sources={pathSources}
              alt=""
              className="sh-loss__path-img"
              fallback={<div className="sh-loss__path-fallback" />}
            />
            <div className="sh-loss__path-grid">
              {["Увидел клинику", "Изучил сайт", "Проверил отзывы", "Оставил заявку", "Записался"].map((step, index) => (
                <div key={step} className="sh-loss__step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
            <p className="sh-loss__note">
              На каждом шаге можно терять внимание. Мы показываем, где именно это происходит, и что исправлять в первую очередь.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
