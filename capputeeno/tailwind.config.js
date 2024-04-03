module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        'text-gray': '#41414D',
      },
      ContainerBottomAdd: {
        height: 'calc(83% -10px)',
      },
      ringWidth: ['focus-visible'],
      ringColor: ['focus-visible'],
      ringOffsetWidth: ['focus-visible'],
      ringOffsetColor: ['focus-visible'],
    },
  },
  plugins: [],
};
