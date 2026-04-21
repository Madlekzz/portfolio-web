import { useState, useEffect } from "react";
import { translations, type Lang } from "../i18n/translations";
import { experienciaItems } from "../constants";

export default function Experiencia() {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const storedLang = (localStorage.getItem("lang") as Lang) || "es";
    setLang(storedLang);

    const handleLangChange = (e: CustomEvent<Lang>) => {
      setLang(e.detail);
    };

    window.addEventListener("lang-change", handleLangChange as EventListener);
    return () =>
      window.removeEventListener(
        "lang-change",
        handleLangChange as EventListener,
      );
  }, []);

  const t = translations[lang].experiencia;
  const items = experienciaItems.map((item, i) => ({
    ...item,
    ...t.items[i],
  }));

  return (
    <section id="experiencia" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-orange-500 text-sm">&gt; {t.category}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[var(--text-primary)]">
            {t.titulo}
          </h2>
          <p className="text-[var(--text-secondary)] mt-2">{t.subtitle}</p>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-[2.4rem] top-6 md:mt-16 mt-28 md:mb-12 mb-16 bottom-6 w-0.5 bg-orange-500" />
          {items.map((exp) => (
            <div key={exp.id} className="relative min-h-[120px] pb-6 last:pb-0">
              <div className="absolute left-2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-orange-500 rounded-full border-4 border-[var(--bg-primary)] shadow-[0_0_10px_rgba(249,115,22,0.4)]" />

              <div className="ml-12 bg-[var(--bg-card)] border border-[var(--bg-border)] p-6 rounded-xl transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(249,115,22,0.2)] group">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-orange-500/20 text-orange-500 px-3 py-1 rounded-full text-xs">
                    {exp.periodo}
                  </span>
                </div>
                <h3 className="text-[var(--text-primary)] font-bold text-lg group-hover:text-orange-500 transition-colors duration-300">
                  {exp.cargo}
                </h3>
                <p className="text-orange-500 text-sm">
                  {exp.empresa} • <span>{exp.ubicacion}</span>
                </p>
                <p className="text-[var(--text-secondary)] text-sm mt-2">
                  {exp.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
