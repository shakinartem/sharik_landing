import { FallbackImage } from "../FallbackImage";
import { assetUrl } from "../../lib/assets";

const footerLinks = [
  { href: "#system", label: "Система" },
  { href: "#loss-map", label: "Потери" },
  { href: "#process", label: "Процесс" },
  { href: "#results", label: "Результаты" },
  { href: "#cta", label: "Контакты" },
];

const logoSources = [assetUrl("assets/brand/logo-main.png"), assetUrl("assets/brand/logo-main.svg")];

export function Footer() {
  return (
    <footer className="sh-footer">
      <div className="sh-container sh-footer__inner">
        <a href="#top" className="sh-brand sh-brand--footer" aria-label="ШАРиК digital">
          <FallbackImage
            sources={logoSources}
            alt=""
            className="sh-brand__logo"
            fallback={<span className="sh-brand__logo-fallback" aria-hidden="true">Ш</span>}
          />
          <span className="sh-brand__text">
            <strong>ШАРиК</strong>
            <span>digital</span>
          </span>
        </a>

        <nav className="sh-footer__nav" aria-label="Навигация в подвале">
          {footerLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sh-footer__meta">
          <a href="/privacy.html">Политика конфиденциальности</a>
          <span>© 2026 ШАРиК digital</span>
        </div>
      </div>
    </footer>
  );
}
