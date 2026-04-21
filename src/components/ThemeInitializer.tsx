import { useEffect } from 'react';
import { initTheme } from '../hooks/useTheme';

export default function ThemeInitializer() {
  useEffect(() => {
    initTheme();
  }, []);

  return null;
}