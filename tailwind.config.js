/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'testimonial':"url('./src/Images/testimonial.png)",
        'hero-background':"url('./src/Images/backgroundImage.png')",
        'machine-learning':"url('./src/Images/machineLearning.png')",
        'artificial-intelligence':"url('./src/Images/artificail.png)",
        "footer-image":"url('./src/Images/footerBackground.png')"
        
      }
    },
  },
  plugins: [],
}