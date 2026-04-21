import { useState, useEffect } from 'react';
import { translations, type Lang } from '../i18n/translations';
import { socialLinks } from '../constants';

export default function Footer() {
  const [lang, setLang] = useState<Lang>('es');

  useEffect(() => {
    const storedLang = (localStorage.getItem('lang') as Lang) || 'es';
    setLang(storedLang);

    const handleLangChange = (e: CustomEvent<Lang>) => {
      setLang(e.detail);
    };

    window.addEventListener('lang-change', handleLangChange as EventListener);
    return () => window.removeEventListener('lang-change', handleLangChange as EventListener);
  }, []);

  const t = translations[lang].footer;

  return (
    <footer id="contacto" className="py-12 px-6 border-t border-[var(--bg-border)]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-orange-500 text-sm">&gt; {lang === 'es' ? 'contacto' : 'contact'}</span>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-2">
            {t.titulo}
          </h2>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href={socialLinks.github}
            target="_blank"
            className="text-[var(--text-secondary)] transition-all duration-300 hover:text-orange-500 hover:scale-110"
          >
            {t.github}
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            className="text-[var(--text-secondary)] transition-all duration-300 hover:text-orange-500 hover:scale-110"
          >
            {t.linkedin}
          </a>
          <a
            href={socialLinks.email}
            className="text-[var(--text-secondary)] transition-all duration-300 hover:text-orange-500 hover:scale-110"
          >
            {t.email}
          </a>
        </div>
      </div>
    </footer>
  );
}