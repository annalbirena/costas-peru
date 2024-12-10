/* eslint-disable object-curly-newline */
import React from 'react';
import {
  Box,
  Breadcrumbs,
  Container,
  Group,
  Overlay,
  Text,
  Title,
} from '@mantine/core';
import AppLayout from '../../components/AppLayout';
import classes from './detail.module.css';
import BeachCard from '../../components/BeachCard';

function DistrictDetailPage() {
  return (
    <AppLayout>
      <Box>
        <div className={classes.hero}>
          <Overlay
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
            opacity={1}
            zIndex={0}
          />
          <Container className={classes.container} size="md">
            <Title className={classes.title}>Punta Hermosa</Title>
            <Text className={classes.description} mt="xl" ta="center">
              El balneario de los surfistas.
            </Text>
          </Container>
        </div>
        <Container size="md" pt={48} pb={100}>
          <Breadcrumbs separator="→" separatorMargin="md" mb="xl">
            <Text c="brand">Departamento</Text>
            <Text c="brand">Provincia</Text>
            <Text c="brand">Distrito</Text>
          </Breadcrumbs>
          <Text>
            Barcelona es un escaparate a las últimas novedades en moda. Pasear
            por sus calles es descubrir un mundo de posibilidades para una
            jornada de shopping. Desde zonas llenas de glamour y grandes firmas
            con tiendas icónicas en edificios emblemáticos, como por el paseo de
            Gracia o la avenida Diagonal, hasta diseños alternativos e
            innovadores en zonas como el barrio del Born. Además, en Barcelona
            abundan los comercios tradicionales y tendrás la oportunidad de
            visitar tiendas centenarias y ateliers que sorprenden por su
            atención al detalle. Barcelona es un escaparate a las últimas
            novedades en moda. Pasear por sus calles es descubrir un mundo de
            posibilidades para una jornada de shopping. Desde zonas llenas de
            glamour y grandes firmas con tiendas icónicas en edificios
            emblemáticos, como por el paseo de Gracia o la avenida Diagonal,
            hasta diseños alternativos e innovadores en zonas como el barrio del
            Born. Además, en Barcelona abundan los comercios tradicionales y
            tendrás la oportunidad de visitar tiendas centenarias y ateliers que
            sorprenden por su atención al detalle.
          </Text>
          <Title order={2} mt="xl">
            Playas
          </Title>
          <Group justify="center" mt="xl">
            <BeachCard />
            <BeachCard />
            <BeachCard />
            <BeachCard />
            <BeachCard />
          </Group>
        </Container>
      </Box>
    </AppLayout>
  );
}

export default DistrictDetailPage;
