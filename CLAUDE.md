# Sage Creek Kitchen — Claude Context

## Project
Upscale-casual farm-to-table restaurant website for Sage Creek Kitchen, Twin Falls, Idaho.
Chef/owner: Elena Vasquez. Tagline: "Idaho on a Plate."

## Stack
- Next.js 16 App Router, TypeScript, Tailwind CSS v4
- Supabase (reservations + orders tables)
- Resend (email confirmations)
- Framer Motion + Lenis (animations)

## Design System
- **Fonts:** Cormorant Garamond (headings, italic) + Lato (body)
- **Colors:** Sage #5C7A5C | Cream #F5ECD7 | Charcoal #2C2C2C | Gold #D4A853
- **Tailwind classes:** .text-sage, .bg-sage, .text-gold, .bg-cream, .text-charcoal, etc.
- **Image source:** Unsplash CDN — all IDs verified

## Critical Rules
1. Tailwind v4: All custom CSS must be in @layer base or @layer utilities
2. Framer Motion: All whileInView must use viewport={{ once: true, amount: 0 }}
3. next/image: Use fill + object-cover inside relative container
4. Named OR default exports — never mix in same file

## Commands
- npm run dev (localhost:3000)
- npm run build
- npm run lint
