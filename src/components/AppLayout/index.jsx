/* eslint-disable react/require-default-props */
import React from 'react';
import { Box, Stack } from '@mantine/core';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';

function AppLayout({ children }) {
  return (
    <Stack mih="100vh" gap={0}>
      <Header />
      <main
        style={{
          flex: 1,
          /* padding: '48px 16px 100px 16px', */
        }}
      >
        <Box /* maw={980} */ m="auto">{children}</Box>
      </main>
      <Footer />
    </Stack>
  );
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppLayout;
