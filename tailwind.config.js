// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ekstensi warna dengan variabel CSS
        'primary': {
          DEFAULT: 'var(--primary)',
          '50': 'hsl(182, 30%, 95%)',
          '100': 'hsl(182, 30%, 90%)',
          '200': 'hsl(182, 30%, 80%)',
          '300': 'hsl(182, 30%, 70%)',
          '400': 'hsl(183, 20%, 50%)', // #66999A
          '500': 'hsl(182, 50%, 40%)',
          '600': 'hsl(182, 60%, 30%)',
          '700': 'hsl(182, 70%, 20%)',
          '800': 'hsl(182, 80%, 15%)',
          '900': 'hsl(182, 94%, 10%)', // #013334
        },
        'accent': {
          'gold': 'hsl(46, 63%, 52%)', // #D4AF37
          'gold-light': 'hsl(46, 63%, 62%)',
          'gold-dark': 'hsl(46, 63%, 42%)',
          'coral': 'hsl(16, 100%, 65%)', // #FF7F50
          'coral-light': 'hsl(16, 100%, 75%)',
          'coral-dark': 'hsl(16, 100%, 55%)',
        },
        'surface': {
          'light': 'hsl(210, 14%, 95%)', // #F5F7F8
          'medium': 'hsl(214, 32%, 91%)', // #E2E8F0
          'dark': 'hsl(215, 20%, 47%)', // #64748B
          'darker': 'hsl(217, 33%, 17%)', // #1E293B
        },
      },
    },
  }
};