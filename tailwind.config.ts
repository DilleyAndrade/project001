import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      
      menuLight: '#FFFFFF',
      bgLight: '#EDEDED',
      middleLight: '#D4D4D4',
      textLight: '#000000',

      menuDark: '#18191A',
      bgDark: '#242526',
      middleDark: '#3A3B3C',
      textDark: '#FFFFFF',

      redColor: '#F02849',
      blueColor: '#0866FF',

    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
