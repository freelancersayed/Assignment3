/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  
  .space-y-6 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    * calc(1 - var(--tw-space-y-reverse));
    margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}