import { Mail, MessageCircleMore, PhoneCall } from "lucide-react";
import { LeadForm } from "./LeadForm";
import { FallbackImage } from "../FallbackImage";
import { assetUrl } from "../../lib/assets";

const ctaLockSources = [assetUrl("assets/cta/cta-lock.svg")];

const contacts = [
  { label: "Telegram", href: "https://t.me/sharikdigital", icon: MessageCircleMore, value: "@sharikdigital" },
  { label: "WhatsApp", href: "https://wa.me/79873576071", icon: PhoneCall, value: "+7 (987) 357-60-71" },
  { label: "Email", href: "mailto:hello@sharik.digital", icon: Mail, value: "hello@sharik.digital" },
];

export function CTAFormSection() {
  return (
    <section id="cta" className="sh-section sh-cta reveal">
      <div className="sh-container">
        <div className="sh-cta__panel">
          <div className="sh-cta__copy">
            <p className="sh-kicker">Контакты</p>
            <h2>Хотите понять, где клиника теряет пациентов?</h2>
            <p>
              Оставьте заявку, и мы посмотрим город, нишу и задачу. После этого предложим первый понятный шаг без лишней воды.
            </p>

            <div className="sh-cta__contacts">
              {contacts.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} className="sh-cta__contact">
                    <span className="sh-icon-pill" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <div>
                      <span className="sh-cta__contact-label">{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="sh-cta__form">
            <div className="sh-cta__form-decor" aria-hidden="true">
              <FallbackImage
                sources={ctaLockSources}
                alt=""
                className="sh-cta__form-lock"
                fallback={<div className="sh-cta__form-lock-fallback" />}
              />
            </div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
