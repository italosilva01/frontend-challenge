module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        'gray-500': '#41414D',
        cream: '#F0F0F5',
        'gray-100': '#A8A8B3',
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
