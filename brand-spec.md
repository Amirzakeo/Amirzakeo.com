# Reference Brand Spec

Source: https://matanga.github.io/

Observed system: dark technical portfolio for a lead technical artist, using compact panels, mono metadata, 1px borders, and a controlled multi-accent palette for structure, success, warning, and highlight states.

Current implementation note: the visible portfolio now uses the selected Fantasy design system as the authoritative palette and component posture, with yellow as the primary theme color and black/white structure. The extracted reference below is retained only as the original source audit, not as the active color system.

## Active Override

```css
:root {
  --bg: #000000;
  --surface: #050505;
  --surface-warm: #0d0d0d;
  --fg: #ffffff;
  --fg-2: #f8f7ff;
  --muted: #d7d7d7;
  --meta: #FDC800;
  --border: #ffffff;
  --border-soft: rgba(255, 255, 255, 0.32);
  --accent: #FDC800;
  --accent-on: #0a0a00;
  --success: #39ff88;
  --warn: #fff34d;
  --danger: #ff4d8d;
}
```

## Tokens

```css
:root {
  --bg: oklch(10.4% 0 0);          /* source #121212 */
  --surface: oklch(16.7% 0 0);     /* source #252525 */
  --fg: oklch(90.7% 0 0);          /* source #E0E0E0 */
  --muted: oklch(69.1% 0 0);       /* source #A0A0A0 */
  --border: oklch(24.7% 0 0);      /* source #333333 */
  --accent: oklch(79.5% 0.14 219); /* source #4CC9F0 */

  --accent-success: oklch(69.6% 0.149 162);   /* source #10B981 */
  --accent-warning: oklch(82.9% 0.168 82);    /* source #FFB703 */
  --accent-highlight: oklch(64.5% 0.238 358); /* source #fe3385 */

  --font-display: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Consolas', 'Monaco', ui-monospace, monospace;
}
```

## Layout Posture

- Dark core canvas with subtle dot/grid texture; panels sit on slightly lifted charcoal surfaces.
- Borders are thin and functional in the source; the active site now uses white technical borders and yellow focus states.
- Radius stays tight, generally 3-5px, avoiding soft consumer-card language.
- Mono is reserved for metadata, labels, tech chips, and compact controls.
- Active accent budget: yellow for primary/navigation, white for borders and dot texture, green for shipped/success, and danger pink only for critical states.
