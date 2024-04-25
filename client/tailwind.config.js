module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      height: {
        'screen-50': 'calc(100vh - 11rem)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}