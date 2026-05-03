import { useEffect, useState } from "react";
import { translations, type Lang } from "../i18n/translations";
import { categorias } from "../constants";
import * as simpleIcons from "simple-icons";

const iconMap: Record<string, simpleIcons.SimpleIcon> = {
  react: simpleIcons.siReact,
  nextdotjs: simpleIcons.siNextdotjs,
  vite: simpleIcons.siVite,
  astro: simpleIcons.siAstro,
  tailwindcss: simpleIcons.siTailwindcss,
  typescript: simpleIcons.siTypescript,
  nodedotjs: simpleIcons.siNodedotjs,
  postgresql: simpleIcons.siPostgresql,
  mongodb: simpleIcons.siMongodb,
  express: simpleIcons.siExpress,
  git: simpleIcons.siGit,
  vercel: simpleIcons.siVercel,
  supabase: simpleIcons.siSupabase,
  render: simpleIcons.siRender,
  n8n: simpleIcons.siN8n,
};

const whiteIconNames = ["vercel", "nextdotjs", "express", "render"];

function renderIcon(icon: simpleIcons.SimpleIcon, isDark: string) {
  const hex = "#" + icon.hex;
  const fill = whiteIconNames.some((name) => icon.slug === name)
    ? isDark === "dark"
      ? "#ffffff"
      : "#000000"
    : hex;
  return icon.svg.replace(/<svg/, `<svg class="w-6 h-6" fill="${fill}"`);
}

export default function Tecnologias() {
  const [lang, setLang] = useState<Lang>("es");
  const [isDark, setIsDark] = useState("dark");

  useEffect(() => {
    const storedLang = (localStorage.getItem("lang") as Lang) || "es";
    setLang(storedLang);

    const handleLangChange = (e: CustomEvent<Lang>) => {
      setLang(e.detail);
    };

    const handleThemeChange = (e: CustomEvent<string>) => {
      setIsDark(e.detail);
    };

    window.addEventListener("lang-change", handleLangChange as EventListener);
    window.addEventListener(
      "theme-changed",
      handleThemeChange as EventListener,
    );

    return () => {
      window.removeEventListener(
        "lang-change",
        handleLangChange as EventListener,
      );
      window.removeEventListener(
        "theme-changed",
        handleThemeChange as EventListener,
      );
    };
  }, []);

  const t = translations[lang].tecnologias;

  return (
    <section id="tecnologias" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-orange-500 text-sm">&gt; {t.subtitle}</span>
          <h2 className="text-3xl font-bold mt-2 text-[var(--text-primary)]">
            {t.titulo}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categorias.map((categoria, index) => (
            <div
              key={index}
              className="flex flex-col min-h-[200px] bg-[var(--bg-card)] border border-[var(--bg-border)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange-500 hover:scale-[1.02] hover:shadow-[0_10px_30px_-10px_rgba(249,115,22,0.2)]"
            >
              <div className="p-4 border-b border-[var(--bg-border)]">
                <h3 className="text-orange-500 font-medium">
                  {t.categorias[index]}
                </h3>
              </div>
              <div className="flex-1 flex items-center justify-around gap-2 p-4 flex-wrap">
                {categoria.tecnologias.map((tech) => {
                  const icon = iconMap[tech.slug];
                  if (!icon) return null;
                  return (
                    <div
                      key={tech.nombre}
                      className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 dark:bg-white/5 light:bg-black/5 p-2 transition-all duration-300 hover:scale-110 hover:rotate-3"
                      title={tech.nombre}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: renderIcon(icon, isDark),
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
