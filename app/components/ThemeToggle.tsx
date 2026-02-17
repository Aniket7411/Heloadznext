"use client";

export function ThemeToggle() {
  function toggle() {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      html.classList.add("light-mode");
      localStorage.theme = "light";
    } else {
      html.classList.add("dark");
      html.classList.remove("light-mode");
      localStorage.theme = "dark";
    }
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
