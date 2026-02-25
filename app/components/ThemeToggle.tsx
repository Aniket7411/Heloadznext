"use client";

type Theme = "bright" | "dark";

export function ThemeToggle({
  onToggle,
}: {
  onToggle?: (next: Theme) => void;
}) {
  function toggle() {
    const html = document.documentElement;
    let next: Theme;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      html.classList.add("light-mode");
      localStorage.theme = "light";
      next = "bright";
    } else {
      html.classList.add("dark");
      html.classList.remove("light-mode");
      localStorage.theme = "dark";
      next = "dark";
    }

    console.log("Theme toggled to:", next);
    onToggle?.(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 transition-colors"
      aria-label="Toggle theme"
    >
      {/* Moon: active in light theme (dark icon for contrast) */}
      <span className="material-icons-outlined text-xl text-slate-800 dark:text-slate-500">
        dark_mode
      </span>
      {/* Sun: active in dark theme (bright icon) */}
      <span className="material-icons-outlined text-xl text-slate-400 dark:text-white">
        light_mode
      </span>
    </button>
  );
}
