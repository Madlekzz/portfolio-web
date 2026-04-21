export type Theme = "dark" | "light";

export const themeStyles = {
  dark: {
    bg: "#0d1117",
    card: "#161b22",
    border: "#30363d",
    text: "#e6edf3",
    textSecondary: "#9ca3af",
    gradient:
      "linear-gradient(to bottom, #0d1117 0%, #0d1117 60%, #1a0f05 100%)",
  },
  light: {
    bg: "#f8fafc",
    card: "#ffffff",
    border: "#e2e8f0",
    text: "#1e293b",
    textSecondary: "#64748b",
    gradient:
      "linear-gradient(to bottom, #f8fafc 0%, #f8fafc 60%, #fef3c7 100%)",
  },
} as const;

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme: Theme): void {
  if (typeof window === "undefined") return;

  const root = document.documentElement;
  const styles = themeStyles[theme];

  root.classList.remove("dark", "light");
  root.classList.add(theme);

  root.style.setProperty("--bg-primary", styles.bg);
  root.style.setProperty("--bg-card", styles.card);
  root.style.setProperty("--bg-border", styles.border);
  root.style.setProperty("--text-primary", styles.text);
  root.style.setProperty("--text-secondary", styles.textSecondary);
  root.style.setProperty("--bg-gradient", styles.gradient);

  const themeBg = document.getElementById("theme-bg");
  if (themeBg) {
    themeBg.style.background = styles.gradient;
  }
}

export function toggleTheme(): Theme {
  const current = getStoredTheme();
  const next = current === "dark" ? "light" : "dark";
  localStorage.setItem("theme", next);
  applyTheme(next);
  return next;
}

export function initTheme(): void {
  if (typeof window === "undefined") return;
  const theme = getStoredTheme();
  applyTheme(theme);
}
