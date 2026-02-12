/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5AA634", // Hijau C-MAP
          dark: "#3E7E1F",
        },
        secondary: {
          DEFAULT: "#0096D6", // Biru peta
          light: "#4FC3F7",
        },
        blueDark: "#1C3F8E",   // Biru tua gelombang
        accent: "#F7B500",     // Kuning titik
        danger: "#D82C27",     // Merah indikator
      },

      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease',
        'fade-in-right': 'fadeInRight 1s ease',
        'spin-slow': 'spin 3s linear infinite',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
