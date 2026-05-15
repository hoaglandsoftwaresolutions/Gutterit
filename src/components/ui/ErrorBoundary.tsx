import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = { hasError: boolean; error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary]", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="rounded-xl border border-red-500/40 bg-white p-6 text-sm text-navy">
            <p className="font-semibold">This section failed to load.</p>
            <p className="mt-2 text-muted">
              Please call us directly at{" "}
              <a
                href="tel:+14234753158"
                className="font-semibold text-navy underline"
              >
                (423) 475-3158
              </a>
              .
            </p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
