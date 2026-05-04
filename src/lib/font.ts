const ORIGIN = "https://api.fontshare.com";
const CSS_URL = `${ORIGIN}/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900&f[]=gambarino@400&display=swap`;

export function loadFonts(): void {
  if (typeof document === "undefined") return;
  if (document.documentElement.hasAttribute("data-fonts")) return;
  document.documentElement.setAttribute("data-fonts", "");

  const preload = Object.assign(document.createElement("link"), {
    rel: "preload",
    as: "style",
    href: CSS_URL,
    fetchpriority: "high",
    onload() { this.rel = "stylesheet"; },
    onerror() { this.rel = "stylesheet"; },
  });

  const noscript = document.createElement("noscript");
  noscript.innerHTML = `<link rel="stylesheet" href="${CSS_URL}">`;

  document.head.append(
    Object.assign(document.createElement("link"), { rel: "preconnect", href: ORIGIN, crossOrigin: "anonymous" }),
    Object.assign(document.createElement("link"), { rel: "dns-prefetch", href: ORIGIN }),
    preload,
    noscript,
  );
}

loadFonts();
