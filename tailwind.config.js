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
        background: "#F8FAFC",
        surface: "#FFFFFF",
        surfaceLight: "#F1F5F9",
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
        'hero-gradient': 'radial-gradient(circle at 50% 10%, rgba(245, 158, 11, 0.12) 0%, rgba(124, 58, 237, 0.08) 35%, rgba(248, 250, 252, 0.98) 75%)',
        'card-glow': 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.5) 100%)',
        'btn-yellow': 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
        'badge-gradient': 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
      },
      boxShadow: {
        'glow-yellow': '0 8px 30px rgba(245, 158, 11, 0.25)',
        'glow-purple': '0 8px 30px rgba(124, 58, 237, 0.15)',
        'glow-blue': '0 8px 25px rgba(37, 99, 235, 0.15)',
        'glass-card': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.8) inset',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3.5s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};
