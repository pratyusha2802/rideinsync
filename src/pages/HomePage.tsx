import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";

const nav: { label: string; to: string; variant?: "primary" | "secondary" }[] = [
  { label: "Create ride", to: "/create", variant: "primary" },
  { label: "Join ride", to: "/join", variant: "secondary" },
  { label: "Rider view", to: "/ride/demo", variant: "secondary" },
  { label: "Lead / sweep view", to: "/ride/demo/lead", variant: "secondary" },
  { label: "Demo controls", to: "/demo", variant: "secondary" },
];

export function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1
        style={{
          fontFamily: "var(--font-brand)",
          fontSize: "var(--text-display)",
          lineHeight: "var(--lh-display)",
          fontWeight: "var(--weight-semibold)",
          letterSpacing: "var(--tracking-brand)",
          margin: 0,
        }}
      >
        RideInSync
      </h1>
      <p style={{ color: "var(--color-text-secondary)", marginTop: "var(--space-xs)" }}>
        Voice-first group-ride coordination. Scaffold only — no functionality yet.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-sm)",
          marginTop: "var(--space-xl)",
        }}
      >
        {nav.map((item) => (
          <Button key={item.to} variant={item.variant} onClick={() => navigate(item.to)}>
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
