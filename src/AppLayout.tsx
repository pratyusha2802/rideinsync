import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div
      style={{
        maxWidth: 600,
        minHeight: "100%",
        margin: "0 auto",
        padding: "var(--space-lg) var(--gutter)",
        paddingBottom: "calc(var(--space-2xl) + env(safe-area-inset-bottom))",
      }}
    >
      <Outlet />
    </div>
  );
}
