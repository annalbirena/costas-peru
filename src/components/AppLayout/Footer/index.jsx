import React from 'react';
import { Divider, Group, Image, Stack, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './footer.module.css';

const links = [
  {
    link: '/balnearios',
    label: 'Balnearios',
  },
  {
    link: '/playas',
    label: 'Playas',
  },
  {
    link: '/mapa',
    label: 'Mapa',
  },
];

function Footer() {
  const items = links.map((link) => (
    <Link key={link.label} to={link.link} className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <footer className={classes.footer}>
      <Stack className={classes.footerContent}>
        <Group py="xl" w="100%" justify="space-between">
          <Link to="/">
            <Image height={80} src="/logo-white.svg" />
          </Link>

          <Group gap={5} className={classes.links}>
            {items}
          </Group>
        </Group>
        <Divider w="100%" mt="md" color="dark.6" />
        <Stack p="lg" gap={8}>
          <Text ta="center" size="sm" c="white">
            © 2024 Costas del Perú. All rights reserved.
          </Text>
        </Stack>
      </Stack>
    </footer>
  );
}

export default Footer;
