/* eslint-disable object-curly-newline */
import React from 'react';
import {
  Box,
  Breadcrumbs,
  Container,
  Overlay,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  IconBan,
  IconDropletHeart,
  IconLifebuoy,
  IconMapPin,
  IconSwimming,
} from '@tabler/icons-react';
import AppLayout from '../../components/AppLayout';
import classes from './detail.module.css';
import BeachMap from '../../components/BeachMap';

const generalData = [
  {
    title: 'Playa Saludable',
    description:
      'Azurill can be seen bouncing and playing on its big, rubbery tail',
    icon: IconDropletHeart,
  },
  {
    title: 'Salvavidas',
    description: 'Fans obsess over the particular length and angle of its arms',
    icon: IconLifebuoy,
  },
  {
    title: 'Marea Alta',
    description:
      'They divvy up their prey evenly among the members of their pack',
    icon: IconSwimming,
  },
  {
    title: 'Lima - Punta Hermosa',
    description: 'Phanpy uses its long nose to shower itself',
    icon: IconMapPin,
  },
];

const restrictionData = [
  {
    title: 'Alimentos preparados',
    description: 'Prohibido llevar comida',
    icon: IconBan,
  },
  {
    title: 'Uso de Parrillas',
    description: 'Prohibido llevar comida',
    icon: IconBan,
  },
  {
    title: 'Botellas de vidrio',
    description: 'Prohibido llevar comida',
    icon: IconBan,
  },
  {
    title: 'Mascotas en horario no permitido',
    description: 'Prohibido llevar comida',
    icon: IconBan,
  },
  {
    title: 'Voley, futbol y paletas',
    description: 'Prohibido llevar comida',
    icon: IconBan,
  },
  {
    title: 'Parlantes y ruidos molestos',
    description: 'Prohibido llevar comida',
    icon: IconBan,
  },
  {
    title: 'Fogatas',
    description: 'Prohibido llevar comida',
    icon: IconBan,
  },
  {
    title: 'Arrojar basura',
    description: 'Prohibido llevar comida',
    icon: IconBan,
  },
  {
    title: 'Acampar',
    description: 'Prohibido llevar comida',
    icon: IconBan,
  },
  {
    title: 'Comercio ambulatorio no autorizado',
    description: 'Prohibido llevar comida',
    icon: IconBan,
  },
];

function BeachDetailPage() {
  const items = generalData.map((item) => (
    <div className={classes.item} key={item.title}>
      <ThemeIcon
        variant="light"
        className={classes.itemIcon}
        size={60}
        radius="md"
      >
        <item.icon size={28} stroke={1.5} />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  const restrictions = restrictionData.map((item) => (
    <div className={classes.item} key={item.title}>
      <ThemeIcon
        variant="light"
        className={classes.itemIcon}
        size={48}
        radius="md"
      >
        <item.icon size={24} stroke={1.5} />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

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
            <Title className={classes.title}>Playa Blanca</Title>
          </Container>
        </div>
        <Container size="md" pt={48} pb={100}>
          <Breadcrumbs separator="→" separatorMargin="md" mb="xl">
            <Text c="brand">Distrito</Text>
          </Breadcrumbs>
          <Title order={2} mt="xl">
            Información General
          </Title>
          <Text mt="xl">
            Barcelona es un escaparate a las últimas novedades en moda. Pasear
            por sus calles es descubrir un mundo de posibilidades para una
            jornada de shopping. Desde zonas llenas de glamour y grandes firmas
            con tiendas icónicas en edificios emblemáticos, como por el paseo de
            Gracia o la avenida Diagonal, hasta diseños alternativos e
            innovadores en zonas como el barrio del Born.
          </Text>
          <Container size={700}>
            <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={48}>
              {items}
            </SimpleGrid>
          </Container>
          <Title order={2} mt="xl">
            ¿Donde se ubica?
          </Title>
          <BeachMap />
          <Title order={2} mt="xl">
            Restricciones
          </Title>
          <SimpleGrid cols={{ base: 1, xs: 3 }} spacing={50} mt={48}>
            {restrictions}
          </SimpleGrid>
        </Container>
      </Box>
    </AppLayout>
  );
}

export default BeachDetailPage;
