# BDS Tailwind Integration

This folder contains everything needed to use the **BDS (Ben's Design System)** in a Tailwind CSS project (like Next.js).

## Setup for Next.js

1. **Install Tailwind CSS** (if not already installed):
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. **Configure Tailwind**:
   Copy the contents of `tailwind/tailwind.config.js` from this project into your own `tailwind.config.js`.

3. **Import Styles**:
   In your `app/globals.css` (or equivalent), import the BDS Tailwind CSS file:
   ```css
   @import "./path/to/tailwind/bds-tailwind.css";
   ```

## Usage

### Using Design Tokens (Utility-First)
You can now use BDS tokens directly in your HTML/JSX:
- **Colors**: `bg-bds-deep`, `text-bds-accent`, `border-bds-border`
- **Radii**: `rounded-bds-md`
- **Spacing**: `p-bds-standard`, `m-bds-tight`

Example:
```html
<div class="bg-bds-surface p-bds-standard rounded-bds-lg border border-bds-border">
  <h1 class="text-bds-accent text-xl font-bold">BDS in Tailwind</h1>
  <p class="text-bds-text-muted">This uses design tokens directly.</p>
</div>
```

### Using Pre-defined Components
We've mapped core BDS components to Tailwind classes using `@apply`:
```html
<button class="bds-button-accent">
  Click Me
</button>

<div class="bds-card">
  <div class="p-4">Card Content</div>
</div>
```
