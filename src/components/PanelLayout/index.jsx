import React from 'react';
import { Container, Group, Paper } from '@mantine/core';
import PropTypes from 'prop-types';
import TableOfContents from './TableOfContents';
import classes from './panel.module.css';

function PanelLayout({ children }) {
  return (
    <Container size="lg" my="xl">
      <Group gap="xl" align="flex-start" className={classes.container}>
        <TableOfContents />
        <Paper
          flex={1}
          shadow="xs"
          p={{
            base: 'md',
            sm: 'md',
            lg: 'xl',
          }}
          className={classes.content}
        >
          {children}
        </Paper>
      </Group>
    </Container>
  );
}

PanelLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PanelLayout;
