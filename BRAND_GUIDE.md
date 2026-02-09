# 🎨 JonnyAi Brand Guide — "Nebula Forge" Palette
> **Effective: 2026-02-09 | Applies to: All marketing, website, social, print**

---

## The Concept

Inspired by abstract polygonal space — low-poly dark backgrounds with warm amber/orange node connections, rose/pink nebula glow, and deep navy foundations. Think: **a forge in deep space where ideas become reality**.

The palette communicates:
- **Intelligence** (deep navy/space black)
- **Energy & Innovation** (warm amber/orange — the forge fire)
- **Creativity** (rose/pink nebula glow)
- **Trust & Depth** (cool blue undertones)
- **Precision** (geometric polygonal mesh aesthetic)

---

## Primary Colors

### Backgrounds (Dark Foundation)
| Name | Hex | RGB | Usage |
|:-----|:----|:----|:------|
| **Void** | `#030308` | 3, 3, 8 | Primary background, deepest black |
| **Abyss** | `#080b16` | 8, 11, 22 | Secondary background, cards |
| **Midnight** | `#0c1225` | 12, 18, 37 | Tertiary background, elevated surfaces |
| **Deep Navy** | `#0f1a3a` | 15, 26, 58 | Subtle background accents |

### Accent Colors (The Forge)
| Name | Hex | RGB | Usage |
|:-----|:----|:----|:------|
| **Ember** | `#e8751a` | 232, 117, 26 | Primary accent — CTAs, highlights, links |
| **Amber** | `#f59e0b` | 245, 158, 11 | Secondary accent — hover states, warm glow |
| **Forge Gold** | `#fbbf24` | 251, 191, 36 | Tertiary accent — badges, premium indicators |
| **Molten** | `#dc5a10` | 220, 90, 16 | Deep accent — active states, emphasis |

### Nebula Colors (Atmospheric Glow)
| Name | Hex | RGB | Usage |
|:-----|:----|:----|:------|
| **Nebula Rose** | `#e84393` | 232, 67, 147 | Nebula glow, decorative accents |
| **Soft Rose** | `#f472b6` | 244, 114, 182 | Lighter rose for subtle glows |
| **Deep Blue** | `#1e3a5f` | 30, 58, 95 | Cool undertone, depth layers |
| **Electric Blue** | `#3b82f6` | 59, 130, 246 | Tech accents, data visualization |

### Text Colors
| Name | Hex | RGB | Usage |
|:-----|:----|:----|:------|
| **Titanium** | `#ffffff` | 255, 255, 255 | Headlines, primary text |
| **Ice** | `#e0e7ff` | 224, 231, 255 | Body text, descriptions |
| **Frost** | `#94a3b8` | 148, 163, 184 | Secondary text, captions |
| **Steel** | `#64748b` | 100, 116, 139 | Tertiary text, labels |

---

## Gradient Definitions

### Primary Gradient (The Forge)
```css
background: linear-gradient(135deg, #e8751a 0%, #f59e0b 50%, #fbbf24 100%);
```
Usage: Primary CTAs, hero text gradient, key highlights

### Nebula Gradient
```css
background: linear-gradient(135deg, #e8751a 0%, #e84393 50%, #3b82f6 100%);
```
Usage: Decorative backgrounds, section dividers, atmospheric effects

### Ember Glow
```css
box-shadow: 0 0 40px rgba(232, 117, 26, 0.4), 0 0 80px rgba(245, 158, 11, 0.2);
```
Usage: Hover states on primary buttons

### Card Border Glow
```css
border-color: rgba(232, 117, 26, 0.15);
/* Hover: */
border-color: rgba(232, 117, 26, 0.3);
box-shadow: 0 20px 60px rgba(232, 117, 26, 0.08);
```

---

## Background Treatment

The signature background uses:
1. **Noise texture** (subtle SVG grain at 2% opacity)
2. **Ember radial glow** (top-right, 12% opacity)
3. **Rose nebula glow** (bottom-left, 8% opacity)
4. **Blue depth glow** (center-bottom, 6% opacity)
5. **Fixed attachment** for parallax feel

```css
background-image: 
  url("noise-texture.svg"),
  radial-gradient(ellipse at 85% 20%, rgba(232, 117, 26, 0.12) 0%, transparent 40%),
  radial-gradient(ellipse at 15% 80%, rgba(232, 67, 147, 0.08) 0%, transparent 35%),
  radial-gradient(ellipse at 50% 60%, rgba(59, 130, 246, 0.06) 0%, transparent 40%);
background-attachment: fixed;
```

---

## Typography

| Element | Font | Weight | Size | Color |
|:--------|:-----|:-------|:-----|:------|
| **H1 (Hero)** | Outfit | 900 (Black) | 6xl-8xl | Titanium / Forge Gradient |
| **H2 (Section)** | Outfit | 800 (ExtraBold) | 4xl-5xl | Titanium |
| **H3 (Card)** | Outfit | 700 (Bold) | 2xl-3xl | Titanium |
| **Body** | Inter | 400 (Regular) | base-lg | Ice |
| **Caption** | Inter | 500 (Medium) | sm | Frost |
| **Label** | Inter | 700 (Bold) | xs | Steel (uppercase, tracking-widest) |

---

## Component Styles

### Glass Cards
- Background: `linear-gradient(135deg, rgba(12, 18, 37, 0.6), rgba(8, 11, 22, 0.8))`
- Border: `rgba(232, 117, 26, 0.1)` → hover: `rgba(232, 117, 26, 0.25)`
- Backdrop blur: `xl`
- Border radius: `3xl`

### Buttons
- **Primary (Forge)**: Ember gradient, white text, rounded-full
- **Secondary (Ghost)**: `bg-white/5`, border `white/10`, hover `ember/10`
- **Outline**: Transparent, border `white/10`, hover border `ember/40`

### Selection
```css
::selection {
  background-color: rgba(232, 117, 26, 0.4);
  color: white;
}
```

### Scrollbar
```css
::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #e8751a, #e84393);
}
```

---

## Do's and Don'ts

### ✅ Do
- Use Ember (#e8751a) as the primary accent everywhere
- Maintain deep dark backgrounds (never lighter than Midnight)
- Use the Forge gradient for CTAs and key highlights
- Keep text high-contrast (Ice on Void minimum)
- Use rose/pink sparingly as atmospheric decoration

### ❌ Don't
- Use citrus/lime/yellow-green anywhere
- Use pure purple as a primary accent (it's now a legacy color)
- Make backgrounds lighter than #0f1a3a
- Use low-contrast text combinations
- Mix the old Aurora palette with the new Nebula Forge palette

---

## CSS Variable Reference

```css
--color-void: #030308;
--color-abyss: #080b16;
--color-midnight: #0c1225;
--color-deep-navy: #0f1a3a;
--color-ember: #e8751a;
--color-amber: #f59e0b;
--color-forge-gold: #fbbf24;
--color-molten: #dc5a10;
--color-nebula-rose: #e84393;
--color-soft-rose: #f472b6;
--color-deep-blue: #1e3a5f;
--color-electric-blue: #3b82f6;
--color-titanium: #ffffff;
--color-ice: #e0e7ff;
--color-frost: #94a3b8;
--color-steel: #64748b;
```

---

*Nebula Forge Palette | JonnyAi | 2026-02-09*
*Designed by @Priya (The Perfectionist) & @Vivienne (The Curator)*
