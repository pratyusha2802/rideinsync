import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode[];
  /** Auto-advance interval in ms. 0 disables. */
  autoAdvanceMs?: number;
  "aria-label"?: string;
};

/**
 * Scroll-snap carousel: swipeable track + clickable dots, auto-advance that
 * pauses on interaction. Token-driven per design/ (lime dot = active slide).
 */
export function Carousel({ children, autoAdvanceMs = 5000, ...rest }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = children.length;

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = ((i % count) + count) % count;
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  // Keep the active dot in sync with manual scrolling.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const i = Math.round(track.scrollLeft / track.clientWidth);
      setActive(i);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-advance.
  useEffect(() => {
    if (!autoAdvanceMs || paused) return;
    const id = setInterval(() => goTo(active + 1), autoAdvanceMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, paused, autoAdvanceMs]);

  return (
    <div
      {...rest}
      role="group"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          gap: 0,
        }}
      >
        {children.map((child, i) => (
          <div
            key={i}
            aria-hidden={active !== i}
            style={{ flex: "0 0 100%", scrollSnapAlign: "center", minWidth: 0 }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "var(--space-xs)",
          marginTop: "var(--space-md)",
        }}
      >
        {children.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={active === i}
            onClick={() => goTo(i)}
            style={{
              width: active === i ? 24 : 8,
              height: 8,
              padding: 0,
              border: "none",
              cursor: "pointer",
              borderRadius: "var(--radius-full)",
              background: active === i ? "var(--color-accent)" : "var(--color-surface-4)",
              transition: "width .2s ease, background .2s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
