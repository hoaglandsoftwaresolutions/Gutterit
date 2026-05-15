import { useEffect, useRef } from "react";

// Replace JOBBER_FORM_URL with the actual embedded work request form URL
// from your Jobber Client Hub when ready. Until then, a placeholder is shown.
const JOBBER_FORM_URL = ""; // e.g. "https://clienthub.getjobber.com/client_hubs/.../public/work_request/embedded_work_request_form"
const JOBBER_RESIZER_SRC =
  "https://d3ey4dbjkrb0bt.cloudfront.net/0.1.x/static/js/iframeResizer.min.js";

type Props = {
  className?: string;
};

export function JobberForm({ className }: Props) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (!JOBBER_FORM_URL) return;

    const existing = document.querySelector(
      `script[src="${JOBBER_RESIZER_SRC}"]`,
    );
    if (existing) {
      tryResize();
      return;
    }

    const script = document.createElement("script");
    script.src = JOBBER_RESIZER_SRC;
    script.async = true;
    script.onload = tryResize;
    document.body.appendChild(script);

    function tryResize() {
      const w = window as unknown as {
        iFrameResize?: (opts: object, target: HTMLIFrameElement) => void;
      };
      if (iframeRef.current && typeof w.iFrameResize === "function") {
        w.iFrameResize(
          { log: false, checkOrigin: false },
          iframeRef.current,
        );
      }
    }
  }, []);

  if (!JOBBER_FORM_URL) {
    return (
      <div
        className={
          "rounded-xl border border-navy/15 bg-white p-6 text-center " +
          (className ?? "")
        }
      >
        <p className="text-sm font-semibold text-navy">
          Jobber request form goes here.
        </p>
        <p className="mt-2 text-sm text-muted">
          Paste your Jobber embedded work-request URL into{" "}
          <code className="rounded bg-navy/5 px-1 py-0.5 text-navy">
            JOBBER_FORM_URL
          </code>{" "}
          in <code>src/components/ui/JobberForm.tsx</code> to enable the live
          form.
        </p>
      </div>
    );
  }

  return (
    <iframe
      ref={iframeRef}
      src={JOBBER_FORM_URL}
      title="Request a Quote"
      className={"w-full border-0 " + (className ?? "")}
      style={{ minHeight: 600 }}
    />
  );
}
