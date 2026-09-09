---
name: rideinsync-design
description: Use this skill to generate well-branded interfaces and assets for RideInSync (a voice-first, accessibility-focused wheelchair navigation app), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key facts: dark-first UI with an opt-in light theme (`[data-theme="light"]`), single lime accent (#C4F82A), Poppins (brand) + Inter (UI) — both substituted. Tokens live in tokens/*.css; components under components/; the app recreation under ui_kits/wayix-app/. The product was renamed from Wayix to RideInSync — brand copy reads RideInSync, but the component namespace (`window.WayixDesignSystem_d17f72`) and some internal paths keep the original stem. Fonts, icons (Lucide), and logo are all substitutions — see the Substitutions section of README.md.
