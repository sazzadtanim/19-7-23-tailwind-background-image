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
        radial_gradient: `radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
        radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
        radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
        radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
        radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
        radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
        radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)`,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
