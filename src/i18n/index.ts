import { translations, type Lang } from './translations';

export function getTranslation(lang: Lang = 'es') {
  return translations[lang];
}

export function initTranslations() {
  const stored = localStorage.getItem('lang') as Lang || 'es';
  return translations[stored];
}