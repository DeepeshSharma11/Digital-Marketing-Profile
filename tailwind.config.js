/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080612",
        surface: "#0f0c20",
        surfaceLight: "#181434",
        brand: {
          yellow: "#F59E0B",
          yellowLight: "#FBBF24",
          purple: "#7C3AED",
          purpleDark: "#4C1D95",
          blue: "#2563EB",
          pink: "#EC4899",
          neonCyan: "#06B6D4"
        }
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 50% 20%, rgba(124, 58, 237, 0.25) 0%, rgba(8, 6, 18, 0.95) 70%)',
        'card-glow': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'btn-yellow': 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
        'badge-gradient': 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
      },
      boxShadow: {
        'glow-yellow': '0 0 25px rgba(245, 158, 11, 0.45)',
        'glow-purple': '0 0 30px rgba(124, 58, 237, 0.35)',
        'glow-blue': '0 0 25px rgba(37, 99, 235, 0.35)',
        'glow-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
