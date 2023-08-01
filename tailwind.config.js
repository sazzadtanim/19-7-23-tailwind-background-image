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
        radial_gradient: `radial-gradient(at 62% 93%, hsla(330,64%,48%,0.69) 0px, transparent 50%),
        radial-gradient(at 77% 34%, hsla(247,100%,64%,1) 0px, transparent 50%),
        radial-gradient(at 34% 57%, hsla(134,100%,8%,1) 0px, transparent 50%),
        radial-gradient(at 85% 90%, hsla(242,100%,70%,1) 0px, transparent 50%),
        radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)`,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
