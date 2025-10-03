/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'primary': '#059669', // Emerald-600
        'primary-light': '#10b981', // Emerald-500
        'primary-dark': '#047857', // Emerald-700
        
        // Secondary/Accent Colors
        'brand-secondary': '#f59e0b', // Amber-500
        'accent': '#8b5cf6', // Violet-500
        
        // Status Colors
        'success': '#10b981', // Emerald-500
        'warning': '#f59e0b', // Amber-500
        'error': '#ef4444', // Red-500
        'info': '#3b82f6', // Blue-500
        
        // Semantic Text Colors
        'secondary': '#334155', // Slate-700 - for readable secondary text
        'tertiary': '#475569', // Slate-600
        'muted': '#64748b', // Slate-500
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

