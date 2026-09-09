import type { CSSProperties } from "react";

// RideInSync convoy-chevron mark (Direction A). Lead chevron in the lime
// accent, per design/. Scales cleanly — drive size with the `size` prop.
export function Mark({ size = 40, title = "RideInSync" }: { size?: number; title?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      role="img"
      aria-label={title}
    >
      <polyline points="22,30 56,60 22,90" stroke="#3A3A3C" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="44,30 78,60 44,90" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="66,30 100,60 66,90" stroke="var(--color-accent, #C4F82A)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type LogoProps = {
  /** Mark height in px; the wordmark scales to match. */
  size?: number;
  /** Show the "RideInSync" wordmark beside the mark. */
  wordmark?: boolean;
  style?: CSSProperties;
};

/** Horizontal lockup: convoy mark + optional wordmark. */
export function Logo({ size = 40, wordmark = true, style }: LogoProps) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: size * 0.3, ...style }}>
      <Mark size={size} />
      {wordmark && (
        <span
          style={{
            fontFamily: "var(--font-brand)",
            fontWeight: "var(--weight-semibold)",
            fontSize: size * 0.66,
            letterSpacing: "var(--tracking-brand)",
            lineHeight: 1,
          }}
        >
          RideInSync
        </span>
      )}
    </span>
  );
}
