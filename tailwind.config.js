module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'decorative': ['Alfa Slab One', 'Georgia','serif'],
      'basic' : ['Montserrat', 'Arial', 'sans-serif']
    },
  extend: {
    keyframes: {
      slideUp: {
        from: {transform: "translate(0, 5rem)", opacity:"0"},
        to: {transform: "translate(0,0)", opacity:"1"}
      },
      slideDown: {
        from: {transform: "translate(0,0)", opacity:"1"},
        to: {transform: "translate(0, 5rem)", opacity:"0"}
      }
    },
    animation: {
        slideUp: "slideUp 0.5s linear",
        slideDown:"slideDown 0.5s linear 1 2s" ,
    },
  },
  plugins: [],
  }
}