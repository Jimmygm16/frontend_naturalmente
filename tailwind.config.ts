import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        "vietnamPro":[ '"Be Vietnam Pro"', 'sans-serif']
      },
      colors:{
        "color1":"#DDFFBB",
        "color2":"#C7E9B0",
        "color3":"#B3C99C",
        "color4":"#A4BC92",
        "grayDark":"#525252 "
      },
      backgroundImage:{
        "close-menu": "url('/src/sources/icon-close.svg)",
        "open-menu": "url('/src/sources/icon-hamburguer.svg')"
      }
    },
  },
  plugins: [],
}
export default config
