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
        radial_gradient: `
        radial-gradient(at 59% 51%, hsla(291,78%,77%,1) 0px, transparent 50%),
        radial-gradient(at 80% 43%, hsla(231,85%,68%,1) 0px, transparent 50%),
        radial-gradient(at 58% 63%, hsla(340,98%,68%,1) 0px, transparent 50%),
        radial-gradient(at 83% 57%, hsla(210,67%,62%,1) 0px, transparent 50%),
        radial-gradient(at 75% 25%, hsla(265,74%,70%,1) 0px, transparent 50%),
        radial-gradient(at 4% 71%, hsla(220,64%,66%,1) 0px, transparent 50%),
        radial-gradient(at 57% 5%, hsla(176,96%,71%,1) 0px, transparent 50%),
        radial-gradient(at 14% 52%, hsla(358,65%,72%,1) 0px, transparent 50%)`,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
