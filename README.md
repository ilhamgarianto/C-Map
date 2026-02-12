# C-MAP Landing Page

A modern, professional landing page for C-MAP (Cimahi – Map for Action & Policy) built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern and clean design with Tailwind CSS
- ⚡ Fast development with Vite
- 📱 Fully responsive for all devices
- 🎭 Smooth animations and transitions
- ⏳ **Beautiful loading screen with progress indication**
- 🗺️ Interactive map preview
- 🧩 Component-based architecture with React
- 🎯 Optimized for performance

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd cmap-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

After building, you can preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
cmap-landing/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── InteractiveMap.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles with Tailwind
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── vite.config.js      # Vite configuration
```

## Components

### LoadingScreen
- **Two beautiful loading screen options available**
- Animated logo with progress indication
- Smooth transition to main content
- See `LOADING_SCREENS.md` for customization options

### Navbar
- Fixed navigation bar with smooth scroll
- Responsive mobile menu
- Active state indicators

### Hero
- Eye-catching gradient background
- Animated SVG map visualization
- Clear call-to-action buttons

### About
- Three stakeholder cards (Government, Academics, Community)
- Hover effects and smooth transitions
- Icon-based visual communication

### Features
- Six key feature highlights
- Grid layout with interactive cards
- Icon and description for each feature

### InteractiveMap
- Layer selection controls
- Animated SVG map with data points
- Interactive map pins

### CTA
- Gradient background section
- Clear call-to-action
- Engaging copy

### Footer
- Multi-column layout
- Social media links
- Contact information
- Navigation links

## Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```js
colors: {
  primary: {
    DEFAULT: '#2563eb',
    dark: '#1e40af',
  },
  secondary: {
    DEFAULT: '#0891b2',
    light: '#06b6d4',
  },
}
```

### Content
Update the content in each component file under `src/components/`.

### Animations
Custom animations are defined in `tailwind.config.js` and can be modified or extended.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is developed for Cimahi City Government.

## Contact

For questions or support, please contact:
- Email: info@cmap-cimahi.id
- Phone: +62 22 1234567
