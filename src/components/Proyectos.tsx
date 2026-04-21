import { useState, useEffect } from "react";
import { translations, type Lang } from "../i18n/translations";
import { proyectos } from "../constants";

export default function Proyectos() {
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

  const t = translations[lang].proyectos;

  return (
    <section id="proyectos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-orange-500 text-sm">
            &gt; {lang === "es" ? "proyectos" : "projects"}
          </span>
          <h2 className="text-3xl font-bold mt-2 text-[var(--text-primary)]">
            {t.titulo}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="flex flex-col bg-[var(--bg-card)] border border-[var(--bg-border)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange-500 hover:scale-[1.02]"
            >
              <div className="w-full overflow-hidden flex-shrink-0">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                  {proyecto.titulo}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-3">
                  {t.descripciones[index] || proyecto.descripcion}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {proyecto.tecnologias
                    .toSorted((a, b) => a.localeCompare(b))
                    .map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[var(--bg-primary)] text-orange-300 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
                <div className="mt-auto flex gap-4 items-center">
                  <a
                    href={proyecto.enlace}
                    target="_blank"
                    className="text-orange-500 text-sm font-medium px-4 py-2 rounded-xl hover:text-orange-400 transition-colors"
                  >
                    {t.verMas}
                  </a>
                  <a
                    href={proyecto.repo}
                    target="_blank"
                    className="border border-orange-500 text-orange-500 text-sm px-4 py-2 rounded-xl transition-all duration-300 hover:bg-orange-500 hover:text-neutral-900"
                  >
                    {t.codigo}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
