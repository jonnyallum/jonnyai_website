---
description: The official standard for all betting-related AI agents, based on the Opus (Cline) Deterministic Framework.
---

# 🏇 Betting Algorithm Standards (The Opus Framework)

All betting-related agents (@Gaffer, @Handicapper, @Bookie, @Delboy) must adhere to the deterministic, reasoned methodology established during the **Opus_Bets_v4.6** Duel. The "Probabilistic Randomness" era (Gaffer_v3.0) is officially deprecated.

## 1. Selection Methodology (No Randomness)
- **Leg Independence**: Analyze each match independently using objective data.
- **Conviction Scoring**: Use a 0.0 to 1.0 scale calculated from real statistical proxies (e.g., goals/90, form momentum, H2H).
- **Rule of No-Guessing**: If data is missing (e.g., odds), the agent must fetch it or skip the selection rather than using placeholders (like 2.25 for everything).
- **Legacy Random Logic Ban**: `random.sample`, `random.choice`, `random.uniform` are prohibited in production prediction generators.

## 2. Combination Logic (Accumulators)
- **Conviction-Weighted**: Composite conviction MUST be the product of individual leg convictions.
- **Mathematical Integrity**: Composite odds must be the product of individual leg odds.
- **Divergent Markets**: Do not default to "Home Win". Use BTTS, Over/Under, and "Win & Both Teams to Score" to find edge.

## 3. Data-Driven Formulas
- **Goalscorers (Opus Standard)**:
  - `goals_per_90 = goals / (minutes_played / 90)`
  - `minutes_factor = min(1.0, expected_minutes / 90)`
  - `set_piece_bonus = 0.08 if on_penalties else 0.03 if on_direct_freekicks else 0`
  - `conviction_raw = (goals_per_90 * opp_vulnerability * minutes_factor) + set_piece_bonus`
  - `conviction = max(0.50, min(0.92, conviction_raw))`
- **Horse Racing (Class-Weighted Standard)**:
  - `class_edge = horse_last3_class_avg - race_class`
  - `going_score = 1.00 if preferred_going else 0.92 if neutral else 0.82`
  - `trainer_score = venue_trainer_win_rate / 100`
  - `jockey_score = venue_jockey_win_rate / 100`
  - `pace_draw_score` = draw and expected pace suitability (0.80-1.05)
  - `conviction_raw = (0.30 * normalize(class_edge)) + (0.20 * going_score) + (0.20 * trainer_score) + (0.20 * jockey_score) + (0.10 * pace_draw_score)`
  - `conviction = max(0.48, min(0.90, conviction_raw))`

## 4. Documentation & Traceability
Every prediction logged to the Supabase Brain MUST include:
- **Reasoning**: A concise tactical breakdown (e.g., "Anfield home record + press Trap vs City transition").
- **Metric**: The primary statistical driver (e.g., "0.68 g/90, penalty taker").
- **Algorithm Version**: Must clearly state the version (e.g., `Opus_Bets_v5.0`).
- **Source Timestamp**: UTC timestamp and source reference snapshot for reproducibility.

## 5. Shell & Tool Consistency (Windows)
- **PowerShell Compliance**: Use `;` for command chaining.
- **Tool Integrity**: Always verify `list_tools` for parameter names (never guess).

## 6. Versioning & Table Hygiene
- Production writes must use a deterministic version tag (e.g., `Opus_Bets_v4.6+`).
- Legacy randomized records (`Gaffer_v3.0`, `Handicapper_v3.0`) must be archived before deletion.
- New algorithm versions require a short methodology delta in commit notes.

---
*Enforced by @Marcus (Conductor) | Standardized: 2026-02-06*
