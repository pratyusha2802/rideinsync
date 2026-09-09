import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

// Typed port of design/components/surfaces/Card.jsx — keep the two in sync.
type Props = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  elevated?: boolean;
  glow?: boolean;
  padding?: string;
};

export function Card({
  children,
  elevated,
  glow,
  padding = "var(--space-md)",
  style,
  ...rest
}: Props) {
  const s: CSSProperties = {
    background: elevated ? "var(--color-surface-1)" : "var(--color-surface-2)",
    borderRadius: "var(--radius-lg)",
    padding,
    boxShadow: glow ? "var(--glow-accent)" : "var(--shadow-card)",
    color: "var(--color-text-primary)",
    ...style,
  };
  return (
    <div style={s} {...rest}>
      {children}
    </div>
  );
}
