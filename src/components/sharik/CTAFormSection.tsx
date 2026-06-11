import { LeadForm } from "./LeadForm";
import { ReferenceCanvas } from "./shared";

const ctaLayers = [
  { src: "Ассеты сайт/СТА/Хотите понять, где клиника теряет пациентов_.svg", x: 79, y: 23, w: 417, h: 128 },
  { src: "Ассеты сайт/СТА/Оставьте заявку — проведём первичный разбор digital-системы и покажем, какие точки стоит усилить в первую очередь..svg", x: 79, y: 165, w: 381, h: 56 },
  { src: "Ассеты сайт/СТА/Rectangle 9.svg", x: 75, y: 238, w: 504, h: 257 },
  { src: "Ассеты сайт/СТА/Что проверим на разборе.svg", x: 74, y: 238, w: 498, h: 250 },
  { src: "Ассеты сайт/СТА/Rectangle 10.svg", x: 646, y: 20, w: 549, h: 475 },
  { src: "Ассеты сайт/СТА/Имя.svg", x: 674, y: 49, w: 27, h: 10 },
  { src: "Ассеты сайт/СТА/Rectangle 11.svg", x: 674, y: 68, w: 482, h: 40 },
  { src: "Ассеты сайт/СТА/Введите ваше имя.svg", x: 688, y: 82, w: 125, h: 12 },
  { src: "Ассеты сайт/СТА/ТелефонTelegram.svg", x: 674, y: 134, w: 130, h: 15 },
  { src: "Ассеты сайт/СТА/Rectangle 12.svg", x: 674, y: 153, w: 482, h: 40 },
  { src: "Ассеты сайт/СТА/+7 (___) ___-__-__ или @username.svg", x: 688, y: 167, w: 201, h: 14 },
  { src: "Ассеты сайт/СТА/Название клиники.svg", x: 674, y: 220, w: 128, h: 10 },
  { src: "Ассеты сайт/СТА/Rectangle 13.svg", x: 674, y: 238, w: 482, h: 40 },
  { src: "Ассеты сайт/СТА/Введите название клиники.svg", x: 688, y: 252, w: 186, h: 12 },
  { src: "Ассеты сайт/СТА/Город.svg", x: 674, y: 304, w: 39, h: 13 },
  { src: "Ассеты сайт/СТА/Rectangle 14.svg", x: 674, y: 324, w: 482, h: 40 },
  { src: "Ассеты сайт/СТА/Введите ваш город.svg", x: 688, y: 338, w: 130, h: 13 },
  { src: "Ассеты сайт/СТА/Кнопка.svg", x: 674, y: 386, w: 482, h: 50 },
  { src: "Ассеты сайт/СТА/замок 1.svg", x: 775, y: 450, w: 13, h: 18 },
  { src: "Ассеты сайт/СТА/Данные не передаются третьим лицам..svg", x: 797, y: 453, w: 231, h: 11 },
  { src: "Ассеты сайт/СТА/logo-clear 1.svg", x: 83, y: 533, w: 244, h: 63 },
  { src: "Ассеты сайт/СТА/тг 1.svg", x: 438, y: 559, w: 18, h: 18 },
  { src: "Ассеты сайт/СТА/Telegram.svg", x: 466, y: 566, w: 58, h: 17 },
  { src: "Ассеты сайт/СТА/телефон 2.svg", x: 600, y: 559, w: 18, h: 18 },
  { src: "Ассеты сайт/СТА/WhatsApp.svg", x: 628, y: 566, w: 74, h: 17 },
  { src: "Ассеты сайт/СТА/почта 1.svg", x: 772, y: 560, w: 18, h: 15 },
  { src: "Ассеты сайт/СТА/Email.svg", x: 800, y: 566, w: 39, h: 17 },
  { src: "Ассеты сайт/СТА/Политика конфиденциальности.svg", x: 920, y: 566, w: 207, h: 17 },
];

export function CTAFormSection() {
  return (
    <ReferenceCanvas id="cta" height={623} background="СТА/фон.svg" layers={ctaLayers} className="cta-ref">
      <div className="ref-text cta-title">
        Хотите понять,
        <br />
        где клиника
        <br />
        <span>теряет пациентов?</span>
      </div>
      <p className="ref-text cta-copy">
        Оставьте заявку — проведём первичный разбор digital-системы и покажем, какие точки стоит усилить в первую очередь.
      </p>
      <div className="cta-form-shell">
        <LeadForm exact />
      </div>
      <a href="https://t.me/sharikdigital" className="ref-hotspot cta-tg" aria-label="Telegram" />
      <a href="https://wa.me/79873576071" className="ref-hotspot cta-wa" aria-label="WhatsApp" />
      <a href="mailto:hello@sharik.digital" className="ref-hotspot cta-mail" aria-label="Email" />
      <a href="/privacy.html" className="ref-hotspot cta-policy" aria-label="Политика конфиденциальности" />
    </ReferenceCanvas>
  );
}
