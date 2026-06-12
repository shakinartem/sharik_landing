import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FallbackImage } from "../FallbackImage";
import { assetUrl } from "../../lib/assets";

const navItems = [
  { href: "#system", label: "Система" },
  { href: "#loss-map", label: "Потери" },
  { href: "#process", label: "Процесс" },
  { href: "#results", label: "Результаты" },
  { href: "#cta", label: "Контакты" },
];

const logoSources = [assetUrl("assets/brand/logo-main.png"), assetUrl("assets/brand/logo-main.svg")];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={`sh-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="sh-container sh-header__inner">
        <a href="#top" className="sh-brand" onClick={() => setOpen(false)}>
          <FallbackImage
            sources={logoSources}
            alt="ШАРиК digital"
            className="sh-brand__logo"
            fallback={<span className="sh-brand__logo-fallback" aria-hidden="true">Ш</span>}
          />
          <span className="sh-brand__text">
            <strong>ШАРиК</strong>
            <span>digital</span>
          </span>
        </a>

        <nav className="sh-header__nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="sh-header__link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#cta" className="sh-button sh-button--primary sh-header__cta">
          Получить разбор
        </a>

        <button
          type="button"
          className="sh-header__menu"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="sh-container sh-header__mobile">
          <nav className="sh-header__mobile-nav" aria-label="Мобильная навигация">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="sh-header__mobile-link" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#cta" className="sh-button sh-button--primary sh-header__mobile-cta" onClick={() => setOpen(false)}>
              Получить разбор
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
