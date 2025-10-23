# PIXEL-PERFECT REPLICATION PROTOCOL

## CORE PRINCIPLE
Fix → Screenshot → Verify → Next. No theory. No documentation without testing.

---

## STEP 0: ASSET AUDIT (5 minutes max)

**Fonts:**
```bash
# Check index.html for Google Fonts
# Check public/fonts/ for custom fonts
# List: ✓ exists | ❌ missing
```

**Images:**
```bash
# For each image in source, use lov-view:
public/images/[filename]
# Create mapping: source-path.webp → /images/actual-path.webp
```

**Action:** Document missing assets. Map paths. Move on.

---

## STEP 1: CSS IMPORT (Copy, don't think)

1. `lov-copy public/css/lightspeed.css → src/elementor-lightspeed.css`
2. Add to `index.css` FIRST LINE: `@import url('./elementor-lightspeed.css');`
3. Fix `@font-face` paths: `../fonts/` → `/fonts/`
4. Search for `var(--` in CSS → add ALL missing variables to `:root` in `index.css`

**Screenshot immediately** → Does layout appear? If no, check console logs.

---

## STEP 2: REFERENCE SCREENSHOT

`lov-fetch-website` https://ufreewebsites.com/ → Take screenshot

Note:
- Hero heading color/size
- FREE word color (blue)
- Button gradient (orange-red)
- Icons (green circles)
- Gallery (9 images, 3 cols)

---

## STEP 3: HTML TO REACT (Exact copy, zero thinking)

Read `reference-index.php` lines 155-580 (hero section)

**Copy rules:**
- `class` → `className`
- `data-src` → `src`
- Keep ALL `<i>`, `<b>`, `<span>` tags
- Keep ALL `data-*` attributes
- Map image paths from Step 0

**Write component** → `src/components/HeroSectionExact.tsx`

---

## STEP 4: VISIBILITY FIX LOOP (Max 3 attempts per issue)

**Screenshot first** → `sandbox-screenshot /`

### Issue: Text Invisible

**Attempt 1:** Add to `index.css`
```css
h1.ekit-fancy-text,
.ekit-fancy-prefix-text,
.ekit-fancy-suffix-text {
  color: #090909 !important;
}
```
Screenshot → Still invisible? Try 2.

**Attempt 2:** Add aggressive override
```css
.elementor * {
  color: inherit !important;
}
h1.ekit-fancy-text * {
  color: #090909 !important;
}
```
Screenshot → Still invisible? Try 3.

**Attempt 3:** Inline styles in React
```tsx
<h1 style={{color: '#090909'}}>
  <span style={{color: '#090909'}}>Get Your</span>
```
Screenshot → Still invisible? Document failure, move to next issue.

---

### Issue: Icons Invisible

**Attempt 1:** Fix font path in `index.css`
```css
@font-face {
  font-family: elementskit;
  src: url(/fonts/elementskit.woff) format("woff");
}
```
Screenshot → Still invisible? Try 2.

**Attempt 2:** Force icon class
```css
.icon::before {
  font-family: elementskit !important;
  font-style: normal !important;
}
.icon-check::before {
  content: "\eaaf" !important;
}
```
Screenshot → Still invisible? Try 3.

**Attempt 3:** Replace with SVG
```tsx
<img src="/images/icon-check.svg" alt="check" className="w-6 h-6" />
```
Screenshot → Move on.

---

### Issue: Images Not Loading (404s)

**Attempt 1:** Check console logs → fix paths
```tsx
// Wrong: src="/images/2024/09/demo.webp"
// Right: src="/images/demo1.webp"
```
Screenshot → Fixed? Move on.

**Attempt 2:** Verify files exist with `lov-view public/images/demo1.webp`
Download missing images or use placeholders.

---

### Issue: Background Image Missing

**Attempt 1:** Check element has correct class from CSS
Screenshot → No? Try 2.

**Attempt 2:** Inline background
```tsx
<div style={{backgroundImage: 'url(/images/bg.webp)'}}>
```
Screenshot → Move on.

---

## STEP 5: PIXEL-PERFECT MATCHING (Only after ALL visible)

Compare screenshots side-by-side:

**Quick checks:**
- Heading font size: Add `font-size: 48px` to CSS
- Button gradient: Verify class names match exactly
- Spacing: Check padding/margin classes match source
- Colors: Extract hex from screenshot if needed

**Fix → Screenshot → Compare → Repeat**

Max 3 iterations per element. If still wrong, document and move on.

---

## STEP 6: NEXT SECTION

Hero done? Read next section from `reference-index.php` (lines 580-800 for CTA section)

Repeat Steps 3-5 for each section:
1. CTA section (FREE animation)
2. Features
3. Testimonials
4. Footer

---

## CRITICAL RULES

1. **Screenshot after EVERY change** - No exceptions
2. **Max 3 attempts per issue** - Then move on
3. **Visibility before perfection** - Can't perfect what's invisible
4. **Check console logs first** - Don't guess
5. **Preserve structure** - `<i>` tags are for animations
6. **Use absolute paths** - `/fonts/` not `../fonts/`
7. **One section at a time** - Verify before moving to next

---

## FAILURE DOCUMENTATION (If stuck after 3 attempts)

```
ISSUE: [Element] invisible
TRIED:
1. CSS variable override - no change
2. !important on class - no change  
3. Inline style - no change
SCREENSHOT: [shows issue]
NEXT: User needs DevTools inspection
```

---

## SUCCESS CHECKLIST (Per section)

- [ ] Screenshot taken
- [ ] All text readable
- [ ] All icons visible
- [ ] All images loaded
- [ ] All buttons styled correctly
- [ ] Console has zero errors
- [ ] Looks identical to reference

**If ANY unchecked → Go back to Step 4**

---

END OF PROTOCOL
