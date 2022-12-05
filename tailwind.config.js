/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      "2.5xl": "1.75rem",
      '3xl': '1.875rem',
      '3.5xl': '2rem',
      '4xl': '2.25rem',
      "4.5xl": "2.5rem",
      '5xl': '3rem',
      '6xl': '4rem',
      '11xl': '9rem',
    },
    fontWeight: {
      title: 400,
      thick: 600,
      standard: 500,
      bold: 700,
      extraBold: 800,
    },
    extend: {
      height: {
        6.5: '1.625rem',
        9.5: '2.37rem',
        10.5: '2.62rem',
        25: '6.25rem',
        27.5: '6.87rem',
        55: '13.75rem',
      },
      width: {
        6.5: '1.625rem',
        9.5: '2.37rem',
        10.5: '2.62rem',
        18: "4.5rem",
        25: '6.25rem',
        27.5: '6.87rem',
        55: '13.75rem',
      },
      margin: {
        4.5: '1.12rem',
        6.5: '1.625rem',
        8.5: '2.125rem',
        9.5: '2.37rem',
        10.5: '2.62rem',
        13.5: '3.37rem',
        15: '3.75rem',
        18: "4.5rem",
        19.5: '4.875rem',
        25.5: '6.37rem',
        26.5: '6.625rem',
        43.5: "10.81rem"
      },
      padding: {
        4.5: '1.12rem',
        6.5: '1.625rem',
        8.5: '2.125rem',
        9.5: '2.37rem',
        10.5: '2.62rem',
        13.5: '3.37rem',
        15: '3.75rem',
        18: "4.5rem",
        19.5: '4.875rem',
        25.5: '6.37rem',
        26.5: '6.625rem',
        43.5: "10.81rem"
      },
      lineHeight: {
        12: '3rem',
      },
      colors: {
      },
      backgroundImage: {
        curevebg: "url('/assets/curve-bg@3x.png')",
        concludeBg: "url('/assets/conclude-bg.png')",
        customerBg:
          'linear-gradient(179.95deg, rgba(0, 189, 148, 0.15) 0.05%, rgba(229, 239, 255, 0.262661) 110.36%, rgba(229, 239, 255, 0) 110.37%)',
        usefulGradient: "linear-gradient(92.56deg, #44A8B0 31.37%, #84D3CB 105.73%)",
        ctaGradient: "linear-gradient(92.56deg, #44A8B0 31.37%, #84D3CB 105.73%)"
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '5xl': '2rem',
      },
      zIndex: {
        100: '100',
      },
    },
  },
  plugins: [],
}
