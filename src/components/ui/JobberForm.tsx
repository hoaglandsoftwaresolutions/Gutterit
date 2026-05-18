import { useEffect, useRef } from "react";

const JOBBER_CLIENTHUB_ID = "3dd5be29-ba00-4fd2-af50-a387adf10a67-2436215";
const JOBBER_FORM_URL =
  "https://clienthub.getjobber.com/client_hubs/3dd5be29-ba00-4fd2-af50-a387adf10a67/public/work_request/embedded_work_request_form?form_id=2436215";
const JOBBER_STYLES =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
const JOBBER_SCRIPT_SRC =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";

function ensureStylesheet() {
  if (typeof document === "undefined") return;
  if (document.querySelector(`link[href="${JOBBER_STYLES}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = JOBBER_STYLES;
  link.media = "screen";
  document.head.appendChild(link);
}

type Props = {
  className?: string;
};

// The Jobber embed snippet is an IIFE that does an async XHR to fetch the
// form HTML and then appends an iframe into the element with the matching
// clienthub_id. The XHR can outlive the React component that started it —
// StrictMode's mount→unmount→mount cycle and SPA back-navigation can both
// leave one or more pending XHRs that resolve into the next host and create
// duplicate iframes. We solve this with a MutationObserver that ensures only
// the first iframe ever survives inside the host.
export function JobberForm({ className }: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ensureStylesheet();

    const host = hostRef.current;
    if (!host) return;

    host.id = JOBBER_CLIENTHUB_ID;

    // Kill any iframe past the first that gets appended to the host.
    const dedupe = new MutationObserver(() => {
      const iframes = host.querySelectorAll("iframe.jobber-work-request");
      for (let i = 1; i < iframes.length; i++) {
        iframes[i].remove();
      }
    });
    dedupe.observe(host, { childList: true });

    // Only inject a script if no iframe is already present. (A stale XHR from
    // a previous page may have resolved into us first, in which case we have
    // nothing to do.)
    let script: HTMLScriptElement | null = null;
    if (!host.querySelector("iframe.jobber-work-request")) {
      script = document.createElement("script");
      script.src = `${JOBBER_SCRIPT_SRC}?t=${Date.now()}`;
      script.async = true;
      script.setAttribute("clienthub_id", JOBBER_CLIENTHUB_ID);
      script.setAttribute("form_url", JOBBER_FORM_URL);
      document.body.appendChild(script);
    }

    return () => {
      dedupe.disconnect();
      script?.remove();
      host.removeAttribute("id");
      host.replaceChildren();
      host.classList.remove(
        "jobber-inline-work-request",
        "jobber-spinner",
      );
    };
  }, []);

  return <div ref={hostRef} className={className} />;
}
