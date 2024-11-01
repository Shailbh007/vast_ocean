/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export const content = ["./src/**/*.{html,js,jsx,ts,tsx}",
  flowbite.content(),
];
export const theme = {
  extend: {},
};
export const plugins = [flowbite.plugin(),];

