# 🏁 CLINE HANDOFF: Aurora Rebrand & Deployment

> **Date:** 2026-02-08 | 21:28 UTC
> **Status:** ⚠️ Build Failing (CSS/Tailwind)

## 1. Current Objective
Deploy the **Aurora Rebrand** of JonnyAI to Hostinger (`jonny-ai.com`).

## 2. Key Updates Made
- **Palette:** Switched to Aurora (Void/Purple/Pink/Blue)
- **Logos:** Updated `Navigation.tsx` and `Hero.tsx` with new Prism SVG icon
- **Portraits:** 
  - `public/agents/dup1.png` → Reserved for female agent
  - `public/agents/dup3.png` - `dup10.png` → Reserved for future agents
  - `public/agents/patrick.png` → Replaced with `dup2.png` (to fix look-alike issue with Alex)

## 3. 🚨 CRITICAL ISSUES (For You to Fix)
The build is failing due to Tailwind v4 `@apply` issues in `globals.css`.

- **Error:** `Cannot apply unknown utility class text-gradient-aurora`
- **Location:** `src/app/globals.css`
- **Attempted Fix:** I tried inlining the styles for `.text-gradient-citrus` and `.btn-citrus`, but more might be lurking.

**Action Required:**
1. Fix any remaining CSS build errors.
2. Run `npm run build` locally to verify.
3. Deploy using `python execution/deploy_jonnyai.py`.


## 4. Deployment Status
- **Manual Script:** `deploy_jonnyai.py` FAILED (Auth/Timeout).
- **GitHub Actions:** Added `.github/workflows/deploy-jonnyai.yml`.

**Action Required:**
1. Configure GitHub Secrets for `jonnyai.co.uk` repo:
   - `HOSTINGER_HOST`: uk-fast-web703.main-hosting.eu
   - `HOSTINGER_USER`: u384342620
   - `HOSTINGER_PORT`: 65002
   - `SSH_PRIVATE_KEY`: [The private key corresponding to the public key needed]
2. Push changes to `main` to trigger build.

## 5. Brand Guidelines
- **Primary:** Void (`#030308`)
- **Accents:** Vivid Purple (`#8b5cf6`), Hot Pink (`#ec4899`), Electric Blue (`#3b82f6`)
- **Font:** Outfit (Headers), Inter (Body)

