export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 80px rgba(255, 255, 255, 0.06)',
      },
      colors: {
        nexus: {
          dark: '#1C1C1C',
          surface: '#242424',
          muted: '#9D9D9D',
          light: '#F5F5F5',
        },
      },
    },
  },
  plugins: [],
};
