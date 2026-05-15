import { useEffect, useRef, useState } from "react";

const JOBBER_CLIENTHUB_ID = "3dd5be29-ba00-4fd2-af50-a387adf10a67-2436215";
const JOBBER_FORM_URL =
  "https://clienthub.getjobber.com/client_hubs/3dd5be29-ba00-4fd2-af50-a387adf10a67/public/work_request/embedded_work_request_form?form_id=2436215";
const JOBBER_STYLES =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
const JOBBER_SCRIPT_SRC =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";

let scriptLoaded = false;
let activeHost: HTMLElement | null = null;

function ensureStylesheet() {
  if (typeof document === "undefined") return;
  if (document.querySelector(`link[href="${JOBBER_STYLES}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = JOBBER_STYLES;
  link.media = "screen";
  document.head.appendChild(link);
}

function loadScript() {
  if (scriptLoaded) return;
  scriptLoaded = true;
  const script = document.createElement("script");
  script.src = JOBBER_SCRIPT_SRC;
  script.setAttribute("clienthub_id", JOBBER_CLIENTHUB_ID);
  script.setAttribute("form_url", JOBBER_FORM_URL);
  document.body.appendChild(script);
}

type Props = {
  className?: string;
};

export function JobberForm({ className }: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [taken, setTaken] = useState(false);

  useEffect(() => {
    try {
      ensureStylesheet();
    } catch (err) {
      console.error("[JobberForm] stylesheet error", err);
    }

    const host = hostRef.current;
    if (!host) return;

    if (activeHost && activeHost !== host && document.contains(activeHost)) {
      setTaken(true);
      return;
    }

    host.id = JOBBER_CLIENTHUB_ID;
    activeHost = host;

    try {
      loadScript();
    } catch (err) {
      console.error("[JobberForm] script load error", err);
    }

    return () => {
      if (activeHost === host) {
        activeHost = null;
      }
      host.removeAttribute("id");
    };
  }, []);

  if (taken) {
    return (
      <div
        className={
          "rounded-xl border border-navy/15 bg-white p-6 text-sm text-navy " +
          (className ?? "")
        }
      >
        <p className="font-semibold">A quote form is already open elsewhere on the page.</p>
        <p className="mt-2 text-muted">
          Scroll up to fill it out, or call{" "}
          <a
            href="tel:+14234753158"
            className="font-semibold text-navy underline"
          >
            (423) 475-3158
          </a>
          .
        </p>
      </div>
    );
  }

  return <div ref={hostRef} className={className} />;
}
