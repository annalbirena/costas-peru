/* eslint-disable object-curly-newline */
import React from 'react';
import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import AppLayout from '../../components/AppLayout';
import classes from './home.module.css';

function HomePage() {
  return (
    <AppLayout>
      <div className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container} size="md">
          <Title className={classes.title}>
            Playas del Perú: Información en tiempo real
          </Title>
          <Text className={classes.description} size="xl" mt="xl">
            Verifica el estado de la playa, la presencia de salvavidas, las
            restricciones, el estado de la marea y mucho más antes de tu visita.
          </Text>

          <Button size="xl" className={classes.control}>
            Explora las playas
          </Button>
        </Container>
      </div>
    </AppLayout>
  );
}

export default HomePage;
