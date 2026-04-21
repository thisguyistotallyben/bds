# Ben Design System (BDS)

A portable, SCSS-based design system using industry-standard BEM naming conventions.

## Usage

1. Import the main SCSS file into your project:
   ```scss
   @import "path/to/bds/scss/bds";
   ```

2. Add the `bds-body` class to your `<body>` tag to apply base styles.

## Naming Convention

BDS uses the **BEM (Block Element Modifier)** convention with a `bds-` prefix:
- **Block**: `.bds-button`, `.bds-card`
- **Element**: `.bds-card__thumbnail`, `.bds-form-group__label`
- **Modifier**: `.bds-button--accent`, `.bds-stack--tight`

## Key Components

### Buttons
- `.bds-button`
- `.bds-button--accent`
- `.bds-button--secondary`
- `.bds-button--small`

### Cards
- `.bds-card`
- `.bds-card__thumbnail`
- `.bds-card__badge`
- `.bds-card--well` (Container section)

### Layout
- `.bds-layout`: Full screen app layout
- `.bds-container`: Max-width container
- `.bds-stack`: Vertical spacing
- `.bds-grid`: Responsive grid
- `.bds-flex`: Flexbox helpers

### Tokens (CSS Variables)
Override these at runtime for custom themes:
- `--bds-accent`
- `--bds-bg-deep`
- `--bds-text-main`
- etc.
