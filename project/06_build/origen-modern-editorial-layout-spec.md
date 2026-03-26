# ORIGEN — Modern Editorial Layout Spec

## 1. Hero
- **layout:** Asymmetrical split. Text container floats on one side with generous padding; a high-quality editorial image sits adjacent, slightly overlapping the text container or breaking the grid to create depth.
- **content hierarchy:** Eyebrow ("RETIRO ORIGEN") → Large, elegant Serif Headline → Geometrically tracked Sans-serif Subheadline → Meta details (Valle del Elqui, 16–20 abril) → CTAs.
- **image behavior:** Static, high-resolution editorial portrait or landscape. Clean crop, no heavy filters, just slight desaturation or moody color grading for premium feel.
- **CTA placement:** Primary CTA ("Reserva tu lugar") as a solid minimalist button. Secondary CTA ("Ver programa") as an elegant text link with a hairline underline adjacent to or strictly below the primary button.

## 2. Qué es ORIGEN
- **layout:** High-whitespace container, content pushed slightly off-center (for example, restricted to a 6-column max-width out of 12) to force reading focus.
- **content hierarchy:** Elegant Serif Title → Three clean paragraphs of body copy. Typography carries the visual weight.
- **supporting visual treatment:** Minimalist. No distracting background images. A very subtle 1px hairline divider separating it from the Hero section.

## 3. Para quién es
- **layout:** Vertically aligned text block juxtaposed against a vast expanse of negative space.
- **content hierarchy:** Serif Title → Three paragraphs of text.
- **supporting visual treatment:** Use of a deep, moody, or highly textured background image (for example, stone, shadow, or natural light) that fades seamlessly into the off-white background, providing an elegant backdrop without obscuring the text.

## 4. La experiencia
- **layout:** Text on the left (Title + Intro paragraph), 5-point list offset to the right.
- **card/list treatment:** Borderless. The 5 pillars are presented as a refined, indented text list. Bold titles for the pillar names, with normal body weight for the descriptions. No bulky cards.
- **visual rhythm:** Generous line-height between list items (for example, 2rem spacing). A subtle 1px divider line between each item if necessary to aid scanning without cluttering the UI.

## 5. El lugar
- **layout:** Cinematic, full-width or oversized editorial image breaking the standard container width, with the text block overlaying a corner or resting gracefully beneath it.
- **image treatment:** High-definition environmental shot of Alcohuaz (contrast of mountains/sky or intimate retreat spaces). Clean, sharp, no distracting overlays.
- **text placement:** Contained within a strict, narrow column to maintain readability against the scale of the sanctuary image.

## 6. Programa
- **layout:** Clean timeline or sequential list format.
- **day-by-day presentation style:** Typographical hierarchy. "Día X — Título" in an elegant Serif acting as the anchor, with the description sitting tightly below it in Sans-serif. No boxed cards. Deep margins separating each day.
- **mobile behavior:** Stacked cleanly with significant top/bottom padding between days to ensure the user does not feel rushed while scrolling.

## 7. Paula + equipo
- **layout:** Staggered or asymmetrical grid.
- **profile treatment:** Unified text list. Bold names ("Paula Suryaflow:", "Paula Pesse:", "Paz Urra:") followed inline by their concise bios. Do not split them into individual bloated profile cards with multiple headshots; keep it as an elegant, unified editorial column.
- **visual hierarchy:** Title → Intro text → Clean list of the three facilitators. An optional, single, highly curated atmospheric group/team photo adjacent to the text.

## 8. Reserva
- **layout:** Side-by-side (desktop) minimalist pricing columns or a clean vertical stack.
- **pricing option treatment:** Borderless or near-borderless (for example, 1px solid subtle border). Clear hierarchical distinction between "Habitación compartida" and "Habitación suite" using typography size rather than loud background colors. Price in dominant Serif.
- **CTA placement:** One unified Primary CTA ("Reserva tu lugar") placed below the pricing options, centered or left-aligned with the column.

## 9. FAQ + cierre
- **layout:** Narrow, centered column for maximum readability.
- **accordion style:** Minimalist. Just the question acting as the toggle (bold, sans-serif), a subtle "+" or "↓" icon, opening to reveal the answer with smooth, unhurried animation. A hairline 1px divider separates questions.
- **final CTA treatment:** A clean, spacious closing block. The phrase "Una pausa real para soltar, reconectar y volver a ti." presented in large, elegant Serif, with the final "Reserva tu lugar" minimalist button resting perfectly beneath it.

## 10. Global UI notes
- **spacing system:** Macro-margins (120px+ between sections on desktop). Unhurried vertical rhythm. Content should never feel cramped within its container.
- **typography system:** High-contrast, elegant modern Serif for all headings (H1, H2, Titles, Pricing). Clean, geometrically tracked Sans-serif for body copy, meta details, and buttons.
- **color behavior:** Highly restrained. Dominant pearl/off-white background. Deep charcoal or soft black for text. Earthy accents (for example, a subdued terracotta or olive) used strictly and sparsely for CTAs or vital links.
- **interaction style:** Refined and slow. Smooth parallax on major images, subtle and slow fade-ins for text blocks as they enter the viewport. Hover states on buttons use slow CSS transitions (for example, 0.3s ease) rather than instant, jarring flashes.