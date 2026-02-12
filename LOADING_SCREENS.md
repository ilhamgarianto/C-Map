# Loading Screen Options

The C-MAP landing page includes two beautiful loading screen options. You can choose which one to use based on your preference.

## Loading Screen 1: Classic Style (Default)
**File:** `src/components/LoadingScreen.jsx`

### Features:
- Gradient purple/indigo background with grid pattern
- Animated rotating ring around logo
- Bouncing map pin icon
- Horizontal progress bar with percentage
- Dynamic loading messages
- Decorative floating map pins

### Visual Style:
- Modern and clean
- Purple/indigo gradient theme
- Simple and elegant animations

---

## Loading Screen 2: Advanced Map Theme
**File:** `src/components/LoadingScreenAlt.jsx`

### Features:
- Dark slate/blue background with animated grid
- Circular progress indicator with percentage
- Linear progress bar with gradient
- Phase-based loading (3 phases with different icons)
- Orbiting elements around logo
- Animated map visualization in background

### Visual Style:
- Sophisticated and tech-focused
- Dark theme with blue/purple/cyan gradients
- More complex animations and transitions
- Multi-phase loading indication

---

## How to Switch Between Loading Screens

### Current Configuration (Default)
The app currently uses **LoadingScreen** (Classic Style).

### To Switch to Alternative Loading Screen:

1. Open `src/App.jsx`
2. Change the import statement:

**From:**
```jsx
import LoadingScreen from './components/LoadingScreen';
```

**To:**
```jsx
import LoadingScreen from './components/LoadingScreenAlt';
```

That's it! The alternative loading screen will now be used.

---

## Customization Options

### Adjust Loading Duration

Both loading screens use a progress simulation. You can adjust the speed:

**In LoadingScreen.jsx or LoadingScreenAlt.jsx:**
```jsx
// Find this interval value (currently 30ms for LoadingScreen, 25ms for LoadingScreenAlt)
const interval = setInterval(() => {
  setProgress((prev) => {
    // ...
  });
}, 30); // <- Change this value (lower = faster)
```

- **Faster loading:** Use `20` or `15` ms
- **Slower loading:** Use `40` or `50` ms

### Adjust Progress Increment

```jsx
// In LoadingScreen.jsx
return prev + 2; // <- Change increment (higher = faster)

// In LoadingScreenAlt.jsx
const newProgress = prev + 1; // <- Change increment
```

### Customize Colors

**LoadingScreen (Classic):**
```jsx
// Change gradient in the main container
<div className="... bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700">
```

**LoadingScreenAlt (Advanced):**
```jsx
// Change gradient in the main container
<div className="... bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

// Change logo gradient
<div className="... bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500">
```

### Customize Loading Messages

**LoadingScreen:**
```jsx
{progress < 30 && "Initializing geoportal..."}
{progress >= 30 && progress < 60 && "Loading map layers..."}
{progress >= 60 && progress < 90 && "Preparing datasets..."}
{progress >= 90 && "Almost ready!"}
```

**LoadingScreenAlt:**
```jsx
const loadingPhases = [
  { icon: Layers, text: 'Initializing geoportal...', color: 'from-blue-500 to-cyan-500' },
  { icon: MapPin, text: 'Loading map layers...', color: 'from-purple-500 to-pink-500' },
  { icon: Navigation, text: 'Preparing datasets...', color: 'from-green-500 to-emerald-500' },
];
```

---

## Real Loading Integration

To connect the loading screen to actual data loading:

```jsx
// In App.jsx
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Your actual data loading logic
    const loadData = async () => {
      try {
        // Example: Load map data, configurations, etc.
        await Promise.all([
          // fetch('api/map-data'),
          // fetch('api/config'),
          // Load other resources
        ]);
      } catch (error) {
        console.error('Loading failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const handleLoadingComplete = () => {
    // Optional: Additional logic when loading completes
    console.log('Loading complete!');
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {/* Rest of your app */}
    </>
  );
}
```

---

## Recommendations

- **For Modern/Clean Look:** Use LoadingScreen (Classic Style)
- **For Tech/Professional Look:** Use LoadingScreenAlt (Advanced Map Theme)
- **For Quick Loads (<2s):** Either works well
- **For Longer Loads (>3s):** LoadingScreenAlt provides better feedback with phases

---

## Testing

To test the loading screen during development:

1. Increase the interval duration to slow down the loading
2. Check different screen sizes (mobile, tablet, desktop)
3. Test on different browsers
4. Verify smooth transitions to the main app

---

Need help customizing? Check the component files for detailed inline comments!
