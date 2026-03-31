export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#f8a5c2',
        'accent-pink': '#fbc2eb',
        'deep-pink': '#ef87a7',
        'soft-pink': '#fff5f8',
        'ultra-soft': '#fffbfc',
        'text-dark': '#2d3436',
        'text-light': '#636e72',
      },
      boxShadow: {
        'soft': '0 20px 40px rgba(248, 165, 194, 0.18)',
        'soft-hover': '0 30px 60px rgba(248, 165, 194, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
