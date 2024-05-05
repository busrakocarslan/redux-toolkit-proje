/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main:"#A855F7",
        seconColor:"#b5800e",
        thirdColor:"#cc135c",
        white:"#fff"
      },
      fontFamily:{
        montelugra:[ "Lugrasimo", "cursive"],

      },
      fontSize:{
        label:["18px",{
          lineHeight:"2rem",
          fontWeight:"400"
        }]
      },
      boxShadow:{
        login:"5xp 5px 10px 5px rgba(0,0,0,0.5)",
      }



    },
  },
  darkMode:"selector",
  plugins: [],
}