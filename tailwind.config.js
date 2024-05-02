const { nextui } = require('@nextui-org/theme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,css,html}',
    './node_modules/@nextui-org/theme/dist/components/(button|input|modal|select|ripple|spinner|listbox|divider|popover|scroll-shadow).js'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    nextui({
      defaultTheme: 'dark'
    })
  ]
}
