/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        my_bg: `url("/svg/svg_pattern.svg")`,
        my_pattern: `url("/svg/pattern3.svg")`,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
