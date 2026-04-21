import { useState, useEffect, useCallback } from 'react';
import { translations, type Lang } from '../i18n/translations';
import { navItems } from '../constants';
import { useTheme, type Theme } from '../hooks/useTheme';

export default function Navbar() {
  const [lang, setLang] = useState<Lang>('es');
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedLang = (localStorage.getItem('lang') as Lang) || 'es';
    setLang(storedLang);
  }, []);

  const handleThemeToggle = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  const handleLangChange = useCallback((newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    window.dispatchEvent(new CustomEvent('lang-change', { detail: newLang }));
  }, []);

  const t = translations[lang].nav;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-card)]/90 backdrop-blur-sm border-b border-[var(--bg-border)] animate-fade-in-down">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold group">
          <span className="text-orange-500 transition-transform duration-300 group-hover:scale-110 inline-block">&lt;</span>
          <span className="text-[var(--text-primary)]">Italo Apruzzese</span>
          <span className="text-orange-500 transition-transform duration-300 group-hover:scale-110 inline-block">/&gt;</span>
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.labelKey}
              href={item.href}
              className="text-sm text-[var(--text-secondary)] hover:text-orange-500 relative transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all hover:after:w-full"
            >
              {t[item.labelKey]}
            </a>
          ))}
          
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-orange-500 hover:bg-[var(--bg-card)] transition-all duration-300"
            title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <div className="flex items-center gap-1 bg-[var(--bg-card)] rounded-lg p-1">
            <button
              onClick={() => handleLangChange('es')}
              className={`px-2 py-1 text-sm rounded transition-all duration-300 ${
                lang === 'es'
                  ? 'bg-orange-500 text-neutral-900'
                  : 'text-[var(--text-secondary)] hover:text-orange-500'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => handleLangChange('en')}
              className={`px-2 py-1 text-sm rounded transition-all duration-300 ${
                lang === 'en'
                  ? 'bg-orange-500 text-neutral-900'
                  : 'text-[var(--text-secondary)] hover:text-orange-500'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-orange-500 transition-all duration-300"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <div className="flex items-center gap-1 bg-[var(--bg-card)] rounded-lg p-1">
            <button
              onClick={() => handleLangChange('es')}
              className={`px-2 py-1 text-sm rounded transition-all duration-300 ${
                lang === 'es' ? 'bg-orange-500 text-neutral-900' : 'text-[var(--text-secondary)]'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => handleLangChange('en')}
              className={`px-2 py-1 text-sm rounded transition-all duration-300 ${
                lang === 'en' ? 'bg-orange-500 text-neutral-900' : 'text-[var(--text-secondary)]'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[var(--text-secondary)] hover:text-orange-500 transition-colors duration-300 p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-[var(--bg-card)] border-t border-[var(--bg-border)]`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.labelKey}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--text-secondary)] hover:text-orange-500 transition-all duration-300"
            >
              {t[item.labelKey]}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}