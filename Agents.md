# Agents.md — RideInSync collaboration & technical guidelines

Shared guidance for any AI agent (and humans) working on the RideInSync PWA hackathon prototype. Read alongside `claude.md`, `PRD/PRD.md`, and `README.md`.

## Goal & constraints

- Ship a **reliable end-to-end demo** over completeness. Hackathon scope: one route-based group ride, join by code/QR, shared route, live GPS, simple group status, manual rider status. See `PRD/PRD.md`.
- Keep code clear and extendable after the hackathon. Small, focused changes.

## Stack

- **React + Vite + TypeScript**, served as a **PWA** (`vite-plugin-pwa`).
- **Supabase** for real-time data (`src/lib/supabase.ts`).
- **Google Maps** for maps / traffic / weather.
- Config via `.env.local` (see `.env.example`) — never commit keys.

## Sources of truth

1. `PRD/PRD.md` — scope, non-goals, MVP vs. later.
2. `design/` — the design system (see below).
3. `README.md` — setup, structure, routes.

## Design system — follow `design/`

All UI must follow the RideInSync design system in `design/`. Do not invent styling ad hoc.

- Read `design/readme.md` for the design language and component inventory; `design/rideinsync-design-system.md` and `design/SKILL.md` for the full reference.
- **Tokens are the single source of truth.** Use the CSS variables from `design/tokens/*.css` (`--color-*`, `--space-*`, `--radius-*`, `--text-*`, `--font-*`). No hard-coded hex, px, or font names in components. The app imports these token files directly in `src/styles/global.css` — don't fork or duplicate them.
- **Reuse `design/components/**` before building new UI.** Each primitive ships a `.jsx` implementation, a `.d.ts` prop contract, and a `.prompt.md`. When porting one into our TS app, preserve prop names and the visual spec, and keep the port synced with its source (`src/components/ui/`).
- **Honor the language:** dark-first with opt-in `[data-theme="light"]`; a single lime accent (`#C4F82A`) used scarcely (one accent action per screen + the route line); soft geometry (full pills, 16–20px cards); ≥56px tap targets; visible accent focus rings; sentence case; no emoji.
- **Substitutions are placeholders:** fonts (Poppins/Inter), icons (Lucide), and the logo — flag them rather than treating them as final.
- If a design rule and a product need conflict, raise it instead of silently diverging.

## Working practices

- Verify changes build (`npm run build`) before calling work done.
- Don't overexplain; keep responses tight (per `claude.md`).
- Proactively surface scope, product, and risk issues early.
