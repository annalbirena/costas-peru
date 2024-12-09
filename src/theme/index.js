import { createTheme } from '@mantine/core';
import { redBrand, darkBrand } from './colors';

const theme = createTheme({
  colors: {
    brand: redBrand,
    dark: darkBrand,
  },
  primaryColor: 'brand',
  black: darkBrand,
  fontFamily: 'Poppins, sans-serif',
  headings: {
    fontFamily: 'Poppins, sans-serif',
  },
});

export default theme;
