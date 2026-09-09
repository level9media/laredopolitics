import { useEffect } from "react";
import { useLocation } from "wouter";

const viteEnvironment = (import.meta as ImportMeta & { env?: Record<string, string> }).env || {};
const GTM_ID = viteEnvironment.VITE_GTM_ID?.trim();

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function pushEvent(event: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export default function SiteAnalytics() {
  const [location] = useLocation();

  useEffect(() => {
    if (!GTM_ID || document.getElementById("laredo-politics-gtm")) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    const script = document.createElement("script");
    script.id = "laredo-politics-gtm";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    pushEvent({
      event: "virtual_page_view",
      page_path: location,
      page_title: document.title,
      page_language: document.documentElement.lang || "en",
    });
  }, [location]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) {
        pushEvent({ event: "outbound_link_click", link_url: url.href, link_text: anchor.textContent?.trim().slice(0, 120) || "" });
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
