<sub>*Hero made by [@ybouane](https://x.com/ybouane).*</sub>
<p align="center">
  <img src="https://crazygl.com/heroes/hero-dropcap/banner-full.png" alt="Drop Cap" width="640">
</p>

# @crazygl/hero-dropcap

Editorial paragraph with a single, oversized serif drop-cap that overhangs the leading margin — drop straight into a magazine layout.

## Demo
[Drop Cap](https://crazygl.com/hero/dropcap)

## Install

```bash
npm install @crazygl/hero-dropcap
```

## Usage

```tsx
import DropCap from '@crazygl/hero-dropcap';

export default function Hero() {
  return (
    <DropCap
      body="It begins with a single letter — a quiet kind of restraint."
      dropCapColor="#ffd86b"
      dropCapSize={5}
    />
  );
}
```

## Customise

- **Content** — `body` paragraph text (the first character becomes the drop-cap).
- **Drop-cap** — `dropCapColor`, `dropCapSize` (em scale), `dropCapLines` (lines spanned).
- **Typography** — `textColor`, `fontSize`, `headingFontFamily` (Google font), `headingFontWeight`, `lineHeight`.
- **Backdrop** — `transparentBackground`, `bgColor`.

## Best for

- Editorial / magazine landing pages and long-form intros.
- Blog or essay headers that want a literary, print feel.
- Brand stories where typography carries the tone.



This hero is part of [CrazyGL](https://crazygl.com), a collection of production-ready WebGL, canvas, 3D, and typography effects. Every CrazyGL hero ships with an agent-ready `SKILL.md` file that helps developers and coding agents adapt the effect into custom landing pages and interactive experiences.
