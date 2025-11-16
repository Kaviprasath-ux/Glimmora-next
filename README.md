# Glimmora Hotel - Design System

A comprehensive, production-ready design system for a luxury hotel booking website built with React, TypeScript, and Vite.

## Features

- **Complete Design System**: Consistent design tokens, colors, typography, spacing, and more
- **Reusable UI Components**: Button, Input, Card, Badge, Avatar, Spinner, Checkbox, Divider, Typography, and Form components
- **Layout Components**: Container, Grid, and Flex for flexible layouts
- **TypeScript Support**: Fully typed components with prop interfaces
- **CSS Modules**: Scoped styling with CSS Modules
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Design Tokens**: Available as both CSS variables and TypeScript constants

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Design System

### Colors

#### Primary
- `--primary-main`: #A57865
- `--primary-dark`: #8B6450
- `--primary-light`: #C8A896
- `--primary-bg`: #FAF8F6

#### Semantic Colors
- Success: #27AE60
- Warning: #FFA500
- Error: #DC3545
- Info: #2196F3

### Typography

- **Font Family**: System font stack (San Francisco, Segoe UI, Roboto, etc.)
- **Font Sizes**: xs (12px) to 5xl (36px)
- **Font Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Spacing

8px grid system with predefined spacing values from 4px to 80px.

### Components

#### Button
```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="large">Click Me</Button>
```

Variants: `primary`, `secondary`, `ghost`
Sizes: `small`, `medium`, `large`

#### Input
```tsx
import { Input } from '@/components/ui';

<Input
  label="Email"
  placeholder="you@example.com"
  error={false}
  errorMessage="This field is required"
/>
```

#### Card
```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui';

<Card hoverable>
  <CardHeader>Title</CardHeader>
  <CardBody>Content</CardBody>
  <CardFooter>Footer</CardFooter>
</Card>
```

#### Typography
```tsx
import { Typography, Heading1, Body } from '@/components/ui';

<Heading1 color="brand">Welcome</Heading1>
<Body color="secondary">Description text</Body>
```

#### Layout
```tsx
import { Container, Grid, Flex } from '@/components/ui';

<Container maxWidth="large">
  <Grid cols={3} gap="medium">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Grid>
</Container>
```

### Design Tokens

Access design tokens in JavaScript/TypeScript:

```tsx
import { tokens } from '@/styles/tokens';

const primaryColor = tokens.colors.primary.main;
const spacing = tokens.spacing[4];
```

## Project Structure

```
src/
├── components/
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── Avatar.tsx
│       ├── Spinner.tsx
│       ├── Checkbox.tsx
│       ├── Divider.tsx
│       ├── Typography.tsx
│       ├── Container.tsx
│       ├── Grid.tsx
│       ├── Flex.tsx
│       ├── Form.tsx
│       └── index.ts
├── styles/
│   ├── design-system.css
│   ├── tokens.ts
│   └── global.css
├── App.tsx
└── main.tsx
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Author

Glimmora Hotel Design Team
