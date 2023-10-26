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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "color1":"#DDFFBB",
        "color2":"#C7E9B0",
        "color3":"#B3C99C",
        "color4":"#A4BC92",
        "grayDark":"#525252 "
      },
    },
  },
  plugins: [],
}
export default config
