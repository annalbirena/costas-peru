import { createTheme } from '@mantine/core';
import { redBrand, darkBrand } from './colors';

const theme = createTheme({
  colors: {
    brand: redBrand,
    dark: darkBrand,
  },
  primaryColor: 'brand',
  black: darkBrand,
  fontFamily: 'Gudea, serif',
  headings: {
    fontFamily: 'Gudea, serif',
  },
});

export default theme;
