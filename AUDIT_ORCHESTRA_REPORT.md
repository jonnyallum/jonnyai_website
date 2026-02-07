# AUDIT_ORCHESTRA_REPORT.md

## Mission
AgOS/Jai.OS ecosystem deep audit covering orchestra integrity, governance drift, betting data integrity, and UI quality gates.

Date: 2026-02-07  
Auditor: @Cline (Opus 4.6)

---

## 1) 39-Agent Orchestra Verification

### Findings
- `docs/TEAM.md` currently defines **40** handles (not 39).
- `.agent/skills/` currently has **42** skill directories (excluding `methodology`).
- Skill-vs-roster diff:
  - Missing skill files for roster handles: **none**
  - Extra skill files not in `docs/TEAM.md`: **`milo`, `vivienne`**
- Shared Brain runtime audit (`execution/audit_orchestra.py`) reports:
  - `Total Agents in Brain: 30/39`
  - **29 idle/ghosted agents** (last activity stale)
  - **10 pending tasks**

### Interpretation
- **Ghost Agents (defined with no skill file):** none in local file system.
- **Zombie/Drift Agents:** multiple forms of drift exist:
  1. Roster mismatch (39 target vs 40 documented)
  2. Skills mismatch (42 skills vs 40 roster)
  3. Brain registry lagging behind local registry (30 in DB)

### Action Items for @Quinn (Allocation)
1. Canonicalize agent count target (39 vs 40) in one source-of-truth file.
2. Reconcile `docs/TEAM.md`, `.agent/TEAM_ROSTER.md`, and `.agent/skills/*` into one consistent roster.
3. Add missing agents to Shared Brain `agents` table so DB parity = roster parity.
4. Clear idle status via heartbeat orchestration for active agents.
5. Triage the 10 pending tasks by priority and owner.

---

## 2) Protocol & Governance Audit

### Findings
- `directives/` currently contains:
  - `betting_algorithm_standards.md`
  - `general_coding_standards.md`
  - `inter_ai_communication.md`
  - `team_talk_triggers.md`
- `truth_lock_protocol.md` (explicitly referenced by mission scope) is **missing**.
- `inter_ai_communication.md` is structurally solid, but probabilistic drift is still present in execution layer:
  - `Ecosystems/Betting/execution/log_predictions.py` uses `random.sample`, `random.choice`, `random.uniform`
  - legacy randomized generation remains callable

### Governance Risk
- Truth-Lock exists as principle, but lacks a dedicated directive artifact in `directives/`.
- Deterministic betting standard exists, but old randomized scripts remain executable and can pollute production tables.

---

## 3) Database & Memory Integrity (Betting)

### Findings (Supabase Brain)
- `bet_predictions` total rows: **95**
- By `algorithm_version`:
  - `Opus_Bets_v4.6`: **49**
  - `Gaffer_v3.0`: **40**
  - `Handicapper_v3.0`: **6**

### Integrity Result
- Opus duel records are correctly tagged with `Opus_Bets_v4.6`.
- Legacy randomized records remain in same primary table.

### Deliverable
- Cleanup SQL script added: `Ecosystems/Betting/docs/OPUS_TAGGING_CLEANUP.sql`
  - Includes preview, archive, and optional delete workflow.

---

## 4) UI/UX “God-Tier” Gate Audit

### `Clients/jonnyai.website`
Findings:
- No lorem/placeholder filler content in core pages.
- Heavy repeated use of generic Tailwind shadow utility patterns (`shadow-2xl`, `shadow-lg`) across many components.
- Good baseline texture/depth in global styles (radial backgrounds + glassmorphism), but component shadow language is not yet fully bespoke.

Component-Level Tasks for @Priya:
1. Replace repeated `shadow-*` utility usage with design-tokenized depth classes (e.g. `.depth-hero`, `.depth-card`, `.depth-cta`).
2. Build a unified elevation system in `globals.css` and consume consistently.
3. Audit form placeholder contrast on Contact page for accessibility clarity.

### `Clients/kwizz`
Findings:
- No lorem/placeholder filler abuse (only expected form placeholders).
- Strong neon visual identity and glow effects.
- Noise texture currently references external URL in CSS (`grainy-gradients.vercel.app`) which introduces dependency risk.

Component-Level Tasks for @Priya:
1. Vendor-localize noise texture asset into project `public/` and reference local path.
2. Standardize glow intensities with a small token set to avoid ad-hoc visual variance.

---

## 5) Remediation Actions Taken (2026-02-07)

| # | Action | Status | Commit |
|:--|:-------|:-------|:-------|
| 1 | **Quarantined `log_predictions.py`** — replaced randomized Gaffer_v3.0/Handicapper_v3.0 generator with a hard-stop stub that redirects to `predict_next.py` | ✅ DONE | `6fc66df` |
| 2 | **Created `directives/truth_lock_protocol.md`** — formal 3-gate verification protocol (Source, Content, Technical) with enforcement table and incident history | ✅ DONE | `6fc66df` |
| 3 | **Upgraded `directives/betting_algorithm_standards.md`** — added deterministic Goals-Per-90 and Class-Weighted horse racing formulas, banned `random.*` in production, added versioning rules | ✅ DONE | `f9d7a9d` |
| 4 | **Created `Ecosystems/Betting/docs/OPUS_TAGGING_CLEANUP.sql`** — archive-first cleanup workflow for legacy randomized DB rows | ✅ DONE | `f9d7a9d` |

---

## 6) Audit Verdict

System is operational. **Critical P0 items have been remediated.** The randomized betting pipeline is now quarantined, Truth-Lock has a formal directive, and the Opus deterministic standard is codified with explicit formulas.

### Remaining Items (Not Yet Actioned)
1. **Roster/skills/brain parity reconciliation** (P0) — requires @Quinn or @Marcus to canonicalize the 39-vs-40 agent count and sync Brain DB registry
2. **Execute SQL cleanup** for legacy betting rows (P1) — SQL script ready at `Ecosystems/Betting/docs/OPUS_TAGGING_CLEANUP.sql`, awaiting Jonny's approval to run against production
3. **Tokenize UI depth/glow system** (P1) — component-level tasks assigned to @Priya in sections above
4. **Vendor-localize Kwizz noise texture** (P2) — external CDN dependency flagged for @Priya
