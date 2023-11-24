/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{vue,js}"],
  theme: {
    colors: {
      primary: '#F5C332',
      black: '#000',
      white: '#FFF',
      paragraph: '#555',
      header: '#fffbf0',
      success: {
        100: '#155724',
        50: '#c3e6cb'
      },
      error: {
        100: '#721c24',
        50: '#f5c6cb'
      },
      dark: {
        100: '#1D1D1D',
        75: '#DDD',
        0: '#2C3E50',
        header: '#28261f'
      }
    },
    fontFamily: {
      sora: ['sora', 'sans-serif']
    },
    extend: {
      spacing: {
        container: '1352px',
        author: '400px',
        date: '131px',
        progress: '3px',
        project: '400px',
        header: 'calc(100% + 32px)'
      },
      fontSize: {
        xs: '13px',
        badge: '12px'
      },
      screens: {
        xl: {
          max: '1920px',
        },
        lgx: {
          max: '1350px'
        },
        lg: {
          max: '1023px',
        },
        md: {
          max: '992px',
        },
        sm: {
          max: '450px',
        },
      }
    }
  },
  plugins: [],
}

