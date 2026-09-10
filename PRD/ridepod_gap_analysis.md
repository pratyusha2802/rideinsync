# Gap Analysis: Solution Space vs. Problem Statements

## Summary
The solution space is narrower than the problem statements, with major feature areas deferred or missing. Below are gaps organized by severity.

---

## CRITICAL GAPS (P0 in problem space, missing from solution space)

### 1. **Multi-leader Support (Part 1 decision: "confirmed from day one")**
**Status in solution space:** "One lead, one sweep per ride"
**Problem:** Part 1 explicitly states co-leader role is confirmed, not deferred. Solution space shows only lead + sweep, no explicit co-leader flow.
**Impact:** Conflict between product decisions and solution scope. Need to clarify:
- Is sweep role the co-leader, or are they distinct?
- Does co-leader have full ride-creation/approval permissions?
- Can a rider switch between lead and co-lead during a ride?
**Owner:** Rajat (Flow 3) should confirm.

---

### 2. **Route Planning & POI Overlay (Problem E, P0)**
**Status in solution space:** Not mentioned
**Problem:** Leaders need to plan routes and see fuel, hospitals, mechanics, scenic stops before departure. Solution space shows "display route details and map" but not proactive route *building* with POI overlay.
**Impact:** 
- Leaders cannot visualize POI along their route
- No pre-ride hazard or resource awareness
**Missing from solution:** Route builder tool with Google Maps POI integration
**Owner:** Needs assignment (likely Rajat or design/PM)

---

### 3. **Weather & Traffic Warnings (Problem E, P1)**
**Status in solution space:** Not mentioned
**Problem:** Riders want weather and traffic notifications during rides.
**Impact:** No push for hazards, congestion, or detours
**Missing from solution:** Weather/traffic integration from Google Weather + Google Maps
**Owner:** Needs assignment

---

### 4. **Hazard & Route Change Alerts (Problem D, P0)**
**Status in solution space:** Not mentioned
**Problem:** Lead rider needs to signal hazards or route changes to trailing riders. Solution space shows pitstop signals (Flow 4) but not mid-ride hazard or dynamic route-change alerts.
**Impact:** Trailing riders are not warned of sudden obstacles or plan changes
**Missing from solution:** Hazard alert trigger (voice or button) → all riders
**Owner:** Could be Pratyusha (Flow 4) or Shubham (Flow 5 SOS variant)

---

### 5. **Voice-First Interaction Model (Part 1 decision)**
**Status in solution space:** Mentioned only as "stoppage reasons via voice"; not as a first-class input method
**Problem:** Part 1 states "Interaction model: Voice-first. Priority is minimal touch and minimal visual distraction while riding." Solution space treats voice as one option (stoppage "other" reason) but doesn't design for voice as primary.
**Impact:** 
- No explicit voice command hierarchy (stop, help, hazard, etc.)
- No voice feedback design
- Haptic patterns pending but no voice feedback spec
**Missing from solution:** Voice command set, voice feedback design, hardware button mapping
**Owner:** Design/Pratyusha (Flow 4 signals) + Shubham (Flow 5 SOS)

---

### 6. **Rider Profile: Document Storage (Problem F, P1)**
**Status in solution space:** Flow 2 mentions "Profile view: name, phone, emergency contacts, vehicle details, avatar (CRUD)" but no document storage
**Problem:** Riders need to store identity details, health info, permits, and bike documents in one place. Current solution only captures structured fields, not documents.
**Impact:** Riders cannot upload/store permits, vehicle registration, insurance, medical records
**Missing from solution:** Document upload/storage in profile, encryption, access controls
**Owner:** Mithul (Flow 2) should extend

---

### 7. **Privacy Controls & Visibility Settings (Problem F, P0)**
**Status in solution space:** Not mentioned
**Problem:** Riders want control over which data is visible to whom (group vs. lead-only, etc.). Medical profile, location history, contact info should have granular controls.
**Impact:** 
- No visibility settings (who can see medical info, emergency contacts, location history)
- No explicit consent flows
- Potential privacy/safety risk if all data is visible to all riders
**Missing from solution:** Privacy preference UI, per-data-type visibility toggles
**Owner:** Mithul (Flow 2) or separate privacy/security owner

---

### 8. **Location Sharing Hard Stop at Ride End (Problem F, P0)**
**Status in solution space:** Not mentioned, though implied by "stop sharing location"
**Problem:** Riders must explicitly not be tracked after ride ends. Solution space shows live location sharing but doesn't specify stop behavior or persistence model.
**Impact:** 
- Unclear when/how location sharing terminates
- Could violate privacy expectations
**Missing from solution:** Explicit "location sharing stops at ride end" UI, confirmation, historical data retention policy aligned with this
**Owner:** Pratyusha (Flow 4) or Mithul (general lifecycle)

---

### 9. **Legal/Compliance Documentation (Problem F, P0)**
**Status in solution space:** Mentioned only in passing (T&C for medical profile); not a distinct deliverable
**Problem:** App must comply with DPDP Act, have T&C, privacy policy, community guidelines. Part 1 says this is "hard prerequisite before launch."
**Impact:** 
- Cannot launch without legal docs
- Unclear ownership and timeline
**Missing from solution:** Explicit legal documentation phase, policy drafting, compliance review
**Owner:** Mithul (Flow 7 GTM) + Legal/PM (needs assignment)

---

## SIGNIFICANT GAPS (P1 in problem space, missing or deferred from solution)

### 10. **Trip Discovery Feed (Problem C, P0)**
**Status in solution space:** "Browse and request open rides (future, nice-to-have)"
**Problem:** Riders discover trips by location, date, travel mode, difficulty, etc. Solution space defers this to "future."
**Impact:** 
- MVP riders cannot find new groups or trips
- Monetization strategy unclear (paywall on discovery?)
**Missing from solution:** Discovery feed, search/filter, ride browsing
**Scope decision:** Is this truly MVP-out-of-scope, or does it ship with demo data?
**Owner:** Mithul (Flow 1+) or separate

---

### 11. **Group Directory & Join Requests (Problem C, P1)**
**Status in solution space:** Not mentioned
**Problem:** Riders want to find and join established groups. Solution space shows "join via invite link" but not group discovery or standing groups.
**Impact:** 
- No way to discover communities
- Riders must be invited; cannot request to join groups
**Missing from solution:** Group/community profiles, membership requests, group history
**Owner:** Needs assignment

---

### 12. **Bluetooth Mesh Fallback (Problem A, P2)**
**Status in solution space:** Not mentioned at all
**Problem:** Part 1 decision: "Use device-to-device mesh network (Bluetooth) as a fallback for status and location sharing when cellular fails. High effort, distinct technical build."
**Impact:** 
- No offline/low-connectivity resilience
- Mesh is deferred but marked high priority
**Missing from solution:** Mesh architecture, Bluetooth range testing, battery impact, fallback behavior
**Owner:** Needs assignment (likely Rajat for tech stack, or separate infrastructure owner)
**Timeline:** Not in Phase 1-4; needs roadmap slot

---

### 13. **Ride History & Stats as Discoverable Feature (Problem G, P1)**
**Status in solution space:** Flow 6 mentions "Ride stats update: distances, times, badges" and Flow 2 mentions "Ride stats: rides completed, distance covered, rides led, badges earned" but no explicit "ride history" view or past-ride replay
**Problem:** Riders want historical records, past ride details, and to share routes.
**Impact:** 
- Riders cannot browse their past rides
- Cannot export or share previous routes
- Stats are mentioned but not the historical browsing experience
**Missing from solution:** Ride history log/gallery, past-route display, ride playback, route export/share
**Owner:** Mithul (Flow 2) should extend, or separate history owner

---

### 14. **Route Sharing from History (Problem G, P1)**
**Status in solution space:** Not mentioned
**Problem:** Riders want to share a route they've ridden so others can explore it (feeds back into discovery).
**Impact:** 
- No way to broadcast popular routes
- Closes the loop between history and discovery
**Missing from solution:** Route export, share to discovery feed, route review/ratings
**Owner:** Needs assignment (discovery + history integration)

---

### 15. **Solo Rider Safety (Problem H, P1)**
**Status in solution space:** Not mentioned
**Problem:** Solo riders need to share live location with emergency contact and have SOS. Solution space is explicitly group-ride only.
**Impact:** 
- MVP does not serve solo riders
- Feature parity with group ride safety is missing
**Scope decision:** Is solo rider safety in-scope for MVP, or v2?
**Missing from solution:** Solo ride location sharing, solo SOS (reuse, but needs distinct flow)
**Owner:** Needs assignment or explicit deferral

---

### 16. **Nearby-Device Rider Addition (Problem C, P0)**
**Status in solution space:** "Lead shares: invite link or QR" (mentioned, but not nearby-device detection)
**Problem:** Fast add-rider flow should support QR, link, **or nearby-device detection**. Solution space only shows QR/link.
**Impact:** 
- Cannot quickly add riders via Bluetooth/NFC at ride start
- Slows down the fast onboarding goal
**Missing from solution:** Bluetooth or NFC nearby-device pairing for invite
**Owner:** Rajat or Mithul (Flow 1)

---

### 17. **Voice Chat Channel (Problem D, P2)**
**Status in solution space:** Not mentioned
**Problem:** Riders want constant communication during rides (distinct from status signals). Part 1 marks this as P2, requiring a feasibility spike first.
**Impact:** 
- Missing from MVP, but needs to be on roadmap
- Spike needed before committing to build timeline
**Scope decision:** Is spike included in Phase 1-4?
**Missing from solution:** Voice chat architecture, connectivity feasibility, battery impact, headset compatibility
**Owner:** Needs assignment + spike resources

---

## CONFLICTS & CLARIFICATIONS NEEDED

### Conflict 1: Multi-Leader vs. Lead+Sweep Only
**Part 1 Decision:** "Multi-leader supported. Co-leader role confirmed from day one, not deferred."
**Solution Space:** "One lead, one sweep per ride."
**Clarification needed:** 
- Are lead and co-leader the same role? 
- Or is sweep the co-leader?
- Can there be multiple co-leaders?
- Does co-leader have full ride-creation permissions or just monitoring?
**Impact:** Unclear authority model for ride management

---

### Conflict 2: Single Ride vs. Full Feature Set
**Core Scope:** "Android app, one ride, one pod, 4-8 riders per pod"
**Problem Space:** Assumes multi-ride discovery, group membership, route sharing, etc.
**Clarification needed:**
- Is "one ride" referring to v1 launch scope only, or a permanent constraint?
- Does demo data include multiple rides, or just one?
- When does multi-ride management ship?
**Impact:** Major assumption difference between problem space and solution scope

---

### Conflict 3: Location Data Retention
**Part 1 Note:** "Location sharing must hard-stop at ride end... Live location visibility to the group should stop the moment the ride ends... Historical route data retention (used for stats, past ride records) is a separate stored dataset."
**Solution Space:** Not explicitly addressed
**Clarification needed:**
- When ride ends, does the app wipe live-location subscriptions immediately?
- How long is historical data retained by default?
- Can leader customize retention window?
- Is historical data visible to riders after ride ends, or lead-only?
**Impact:** Privacy and data handling assumptions

---

## MISSING FEATURE AREAS (No Owner Assigned)

| Feature | Problem Space | Priority | Solution Space Status | Owner |
|---------|---|----------|---|---|
| Route builder + POI overlay | E | P0 | Not mentioned | Unassigned |
| Weather/traffic integration | E | P1 | Not mentioned | Unassigned |
| Hazard/route-change alerts | D | P0 | Not mentioned | Unassigned |
| Trip discovery feed | C | P0 | Future/Nice-to-have | Unassigned |
| Group directory + join requests | C | P1 | Not mentioned | Unassigned |
| Document storage in profile | F | P1 | Not mentioned | Unassigned |
| Privacy controls & visibility | F | P0 | Not mentioned | Unassigned |
| Ride history & browsing | G | P1 | Partial (stats only) | Unassigned |
| Route export/sharing | G | P1 | Not mentioned | Unassigned |
| Solo rider safety | H | P1 | Not mentioned | Unassigned |
| Bluetooth mesh fallback | A | P2 | Not mentioned | Unassigned |
| Voice chat channel | D | P2 | Not mentioned | Unassigned |
| Legal/compliance docs | F | P0 | Not mentioned | Unassigned |

---

## DEFERRED vs. MVP: Clarification Needed

**Part 1 explicitly marks these as scope decisions, not MVP deferrals:**
- Multi-leader: "confirmed from day one"
- PWA (not native): locked in
- Voice-first interaction: locked in
- Privacy controls: P0 (not deferred)
- Legal docs: "hard prerequisite before launch"

**Solution Space marks these as nice-to-have/future:**
- Browse open rides
- Trip discovery
- Offline maps
- Bluetooth mesh
- Voice chat
- Document storage
- Privacy controls

**Recommendation:** Align the two docs on what is truly v1 vs. post-v1. The problem space and Part 1 decisions suggest a richer scope than the solution space's "one ride, one pod" MVP.

---

## Owner Load & Sequencing Impact

**Current owners per flow:**
- Mithul: Flows 1, 2, 7 (onboarding, dashboard, GTM + analytics) + potential legal docs
- Rajat: Flow 3 (trip view + android setup)
- Pratyusha: Flow 4 (signals + voice-first if assigned)
- Shubham: Flow 5 (SOS)
- Gaurav: Flow 6 (ending journey)

**Unassigned high-priority features:**
- Route builder (E, P0)
- Weather/traffic (E, P1)
- Hazard alerts (D, P0)
- Discovery (C, P0)
- Document storage (F, P1)
- Privacy controls (F, P0)
- Legal docs (F, P0)
- Ride history browsing (G, P1)

**Impact:** Either these features are deferred (and problem space needs updating), or owners need to be assigned and sequencing needs to adjust.

---

## Recommended Next Steps

1. **Clarify scope:** Is the solution space genuinely v1-only, or does Part 1 represent a larger target state? Align problem space, Part 1 decisions, and solution space on MVP boundaries.

2. **Multi-leader:** Define co-leader role explicitly. Is it distinct from sweep, or overlapping? What are permissions?

3. **Assign missing owners:** Route builder, discovery, document storage, privacy, legal docs, history browsing all need owners and timeline slots.

4. **Bluetooth mesh spike:** Assign and schedule. Part 1 marks it high priority and high effort; needs a dedicated research phase.

5. **Voice-first design:** Expand from "stoppage reasons via voice" to full voice command hierarchy and feedback design. Pratyusha needs brief on interaction model.

6. **Legal prerequisites:** Confirm timeline and owner for T&C, privacy policy, DPDP compliance, community guidelines. Part 1 says "hard prerequisite before launch."

7. **Update solution space table:** Add rows for deferred features so they're tracked against problem space.
