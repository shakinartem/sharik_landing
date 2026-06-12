import { BarChart3, FileText, MapPin, MessageCircle, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { FallbackImage } from "../FallbackImage";
import { assetUrl } from "../../lib/assets";

const systemItems = [
  {
    icon: MonitorSmartphone,
    title: "Сайты и посадочные",
    text: "Страницы, которые объясняют ценность услуги, снимают сомнения и ведут к записи.",
  },
  {
    icon: MapPin,
    title: "Карты и локальный поиск",
    text: "Карточки клиники, которые хорошо выглядят в Яндекс Картах, 2ГИС и других точках выбора.",
  },
  {
    icon: ShieldCheck,
    title: "Репутация и отзывы",
    text: "Укрепляем доверие через отзывы, ответы, доказательства и внятные сценарии коммуникации.",
  },
  {
    icon: FileText,
    title: "Контент и соцсети",
    text: "Материалы, которые закрывают вопросы пациента до обращения и поддерживают решение.",
  },
  {
    icon: MessageCircle,
    title: "CRM и обработка",
    text: "Настраиваем обработку заявок, чтобы обращения не терялись между каналами и людьми.",
  },
  {
    icon: BarChart3,
    title: "Аналитика и стратегия",
    text: "Понимаем, какие каналы дают результат, и усиливаем то, что действительно работает.",
  },
];

const systemDecorSources = [assetUrl("assets/system/system-shield.svg")];

export function DigitalSystemSection() {
  return (
    <section id="system" className="sh-section sh-system reveal">
      <div className="sh-container">
        <div className="sh-section__heading">
          <p className="sh-kicker">Система</p>
          <h2>Собираем digital-систему для роста записей</h2>
          <p>
            Не настраиваем отдельные инструменты по отдельности. Строим цепочку от первого касания до записи и повторного визита.
          </p>
        </div>

        <div className="sh-system__layout">
          <div className="sh-system__cards">
            {systemItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="sh-card sh-system__card">
                  <span className="sh-icon-pill" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>

          <aside className="sh-system__aside">
            <div className="sh-system__decor" aria-hidden="true">
              <FallbackImage
                sources={systemDecorSources}
                alt=""
                className="sh-system__decor-img"
                fallback={<div className="sh-system__decor-fallback" />}
              />
            </div>

            <div className="sh-system__summary">
              <p className="sh-system__summary-label">Как это работает</p>
              <ul>
                <li>Сайт объясняет услугу и снимает тревогу.</li>
                <li>Карты и отзывы подхватывают доверие.</li>
                <li>CRM и аналитика помогают не терять заявки.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
