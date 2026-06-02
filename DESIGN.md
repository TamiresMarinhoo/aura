---
name: Studio Aura Identity
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#c5c6cb'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8f9195'
  outline-variant: '#45474b'
  surface-tint: '#c2c7cf'
  primary: '#c2c7cf'
  on-primary: '#2c3137'
  primary-container: '#0f141a'
  on-primary-container: '#7a7f86'
  inverse-primary: '#5a5f66'
  secondary: '#c4c6d0'
  on-secondary: '#2d3038'
  secondary-container: '#464951'
  on-secondary-container: '#b6b8c1'
  tertiary: '#e9c176'
  on-tertiary: '#412d00'
  tertiary-container: '#1c1200'
  on-tertiary-container: '#9b7936'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dee3eb'
  primary-fixed-dim: '#c2c7cf'
  on-primary-fixed: '#171c22'
  on-primary-fixed-variant: '#42474e'
  secondary-fixed: '#e0e2ec'
  secondary-fixed-dim: '#c4c6d0'
  on-secondary-fixed: '#191c22'
  on-secondary-fixed-variant: '#44474e'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
---

## Brand & Style

The brand persona is defined by "Quiet Luxury"—an understated confidence that doesn't need to shout to be noticed. This design system draws direct inspiration from the curated silence of contemporary art galleries and the immersive, moody atmosphere of high-end boutique hotels. 

The visual language follows a strict **Minimalist** philosophy where whitespace (or in this case, "dark space") is treated as a premium material. The emotional response should be one of serenity, exclusivity, and meticulous craftsmanship. Every element on the screen must feel intentional, avoiding unnecessary decoration in favor of structural elegance and high-end typography.

## Colors

The palette is anchored in a "Deep Night" spectrum to evoke intimacy and sophistication. The primary background uses a near-black charcoal, providing a canvas that allows the metallic accents to shine.

- **Primary (Charcoal Black):** Used for main backgrounds to create depth.
- **Secondary (Deep Graphite):** Used for elevated surfaces, cards, and section containers.
- **Accent (Champagne Gold):** Reserved exclusively for high-priority calls to action, brand marks, and subtle decorative rules. It should be used sparingly to maintain its "precious" feel.
- **Support (Midnight Navy):** A very low-saturation navy used for subtle gradients or interactive states to prevent the UI from feeling flatly monochromatic.

## Typography

This design system employs a high-contrast typographic pairing to reflect the intersection of tradition and modernity. 

**EB Garamond** is utilized for headlines. It brings a literary, timeless authority to the interface. For large display titles, a slight negative letter-spacing is applied to enhance the "editorial" look.

**Manrope** serves as the functional workhorse. As a modern geometric sans-serif, it offers exceptional legibility in dark mode. Body text should maintain a generous line-height to ensure a relaxed reading rhythm, consistent with the "minimalist" brand pillars. Small labels and overlines should always be uppercase with increased tracking to mimic the signage found in art galleries.

## Layout & Spacing

The layout philosophy is built on a **Fixed Grid** for desktop to ensure a curated, "framed" appearance like a piece of art. 

- **Desktop:** A 12-column grid with wide margins (80px) to allow the content to breathe. 
- **Mobile:** A 4-column grid with 20px margins. 
- **Spacing Rhythm:** This design system utilizes an 8px base unit. However, for section vertical spacing, utilize larger increments (80px, 120px, 160px) to create the sense of luxury through "wasted" space. Content should often be asymmetrical to evoke a more bespoke, architectural feel.

## Elevation & Depth

Depth in this design system is achieved through **Tonal Layering** rather than heavy shadows. In a dark, high-end environment, shadows can often appear muddy.

1.  **Base:** The charcoal background.
2.  **Surface:** A slightly lighter graphite for cards or navigation bars.
3.  **Detail:** 1px "low-contrast outlines" using a faint gold or white with 10% opacity are used to define edges without adding visual weight.
4.  **Glassmorphism:** Reserved specifically for overlays (like mobile menus or image lightboxes), using a heavy background blur (20px+) and a 5% white tint to simulate premium frosted glass.

## Shapes

To maintain a sophisticated, architectural aesthetic, this design system utilizes **Sharp** (0px) corners for all primary UI components. 

The absence of rounded corners communicates precision, structural integrity, and a modern "edge" reminiscent of high-end cabinetry and museum plinths. If an element must be contained (like a tag or chip), use a simple 1px border with 0 radius. Circular shapes are permitted only for specific icon containers or avatars to create a singular point of organic contrast.

## Components

### Buttons
Primary buttons are solid Champagne Gold with black text, using the sharp-edged rectangle shape. Secondary buttons use a "Ghost" style: a 1px white or gold border with no fill. Interaction states should be subtle, such as a slight opacity shift or a delicate shimmer effect.

### Input Fields
Inputs should be minimalist: a single bottom border (1px) rather than a full box. Labels should use the `label-sm` style, floating above the line.

### Cards
Cards do not use shadows. They are defined by a slightly lighter background color (`#1C1F26`) and a 1px border that is only 5-10% lighter than the card itself. This creates a "whisper" of a boundary.

### Lists & Navigation
Navigation links should use Manrope with generous letter spacing. The active state is indicated by a small, 4px Champagne Gold dot beneath the text or a simple serif initial in the margin.

### Special Component: The "Gallery" Carousel
A bespoke component for Studio Aura, this carousel features high-resolution imagery with an overlapping serif headline that shifts slightly on scroll, creating a parallax "layered" depth.