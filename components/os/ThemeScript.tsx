export function ThemeScript() {
  const script = `
    try {
      var stored = localStorage.getItem("theme");
      var prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      var light = stored === "light" || (!stored && prefersLight);
      document.documentElement.classList.toggle("dark", !light);
    } catch (e) {}
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
