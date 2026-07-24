export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 80px rgba(57, 169, 255, 0.14)',
      },
      colors: {
        nexus: {
          dark: '#050505',
          blue: '#39A9FF',
          cyan: '#8AE3FF',
          soft: '#F5F9FF',
        },
      },
      backgroundImage: {
        'hero-vignette': 'radial-gradient(circle at top, rgba(57, 169, 255, 0.14), transparent 30%), radial-gradient(circle at 70% 20%, rgba(58, 207, 255, 0.08), transparent 18%)',
      },
    },
  },
  plugins: [],
};

