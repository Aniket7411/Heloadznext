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
      className="p-2 rounded-full bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-white/20 transition-colors"
      aria-label="Toggle theme"
    >
      <span className="material-icons-outlined text-xl dark:hidden">dark_mode</span>
      <span className="material-icons-outlined text-xl hidden dark:block">light_mode</span>
    </button>
  );
}
