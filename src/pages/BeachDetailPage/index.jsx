/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Overlay,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  IconBadgeWc,
  IconBan,
  IconBath,
  IconDropletHeart,
  IconLifebuoy,
  IconPennant,
} from '@tabler/icons-react';
import { useParams } from 'react-router-dom';
import AppLayout from '../../components/AppLayout';
import classes from './detail.module.css';
import BeachMap from '../../components/BeachMap';
import { getBeachById } from '../../services/beach';

function getTideTitle(color) {
  const data = [
    { value: 'red', label: 'Marea Alta' },
    { value: 'yellow', label: 'Marea Media' },
    { value: 'green', label: 'Marea Baja' },
  ];

  const result = data.find((item) => item.value === color);

  return result ? result.label : 'Estado no encontrado';
}

function BeachDetailPage() {
  const { id } = useParams();
  const [beachData, setBeachData] = useState(null);

  const getBeachData = async () => {
    const data = await getBeachById(id);
    setBeachData(data);
  };

  useEffect(() => {
    if (id) {
      getBeachData();
    }
  }, [id]);

  const restrictions = beachData?.restrictions?.map((item) => (
    <div className={classes.item} key={item.name}>
      <ThemeIcon
        variant="light"
        className={classes.itemIcon}
        size={48}
        radius="md"
      >
        <IconBan size={24} stroke={1.5} />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.name}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <AppLayout>
      <Box>
        <div
          className={classes.hero}
          style={{
            backgroundImage: `url(${beachData?.image})`,
          }}
        >
          <Overlay
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
            opacity={1}
            zIndex={0}
          />
          <Container className={classes.container} size="md">
            <Title className={classes.title}>{beachData?.name}</Title>
          </Container>
        </div>
        <Container size="md" pt={48} pb={100}>
          <Title order={2} mt="xl">
            Información General
          </Title>
          <Text mt="xl">{beachData?.description}</Text>
          <Container size={700}>
            <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={48}>
              <div className={classes.item}>
                <ThemeIcon
                  variant="light"
                  className={classes.itemIcon}
                  size={60}
                  radius="md"
                  color={beachData?.isHealthy ? 'cyan' : 'brand'}
                >
                  <IconDropletHeart size={28} stroke={1.5} />
                </ThemeIcon>

                <div>
                  <Text fw={700} fz="lg" className={classes.itemTitle}>
                    {beachData?.isHealthy
                      ? 'Playa Saludable'
                      : 'Playa NO saludable'}
                  </Text>
                  <Text c="dimmed">
                    {beachData?.isHealthy
                      ? 'Cumple con los estandares de limpieza.'
                      : 'No cumple con los estandares de limpieza.'}
                  </Text>
                </div>
              </div>
              <div className={classes.item}>
                <ThemeIcon
                  variant="light"
                  className={classes.itemIcon}
                  size={60}
                  radius="md"
                  color={beachData?.hasLifeguards ? 'cyan' : 'brand'}
                >
                  <IconLifebuoy size={28} stroke={1.5} />
                </ThemeIcon>

                <div>
                  <Text fw={700} fz="lg" className={classes.itemTitle}>
                    {beachData?.hasLifeguards
                      ? 'Tiene salvavidas'
                      : 'No tiene salvavidas'}
                  </Text>
                  <Text c="dimmed">
                    Horario: {beachData?.lifeguardSchedule}
                  </Text>
                </div>
              </div>
              <div className={classes.item}>
                <ThemeIcon
                  variant="light"
                  className={classes.itemIcon}
                  size={60}
                  radius="md"
                  color={beachData?.hasRestrooms ? 'cyan' : 'brand'}
                >
                  <IconBadgeWc size={28} stroke={1.5} />
                </ThemeIcon>

                <div>
                  <Text fw={700} fz="lg" className={classes.itemTitle}>
                    {beachData?.hasRestrooms ? 'Tiene baños' : 'No tiene baños'}
                  </Text>
                  <Text c="dimmed">Horario: {beachData?.restroomSchedule}</Text>
                </div>
              </div>
              <div className={classes.item}>
                <ThemeIcon
                  variant="light"
                  className={classes.itemIcon}
                  size={60}
                  radius="md"
                  color={beachData?.hasShowers ? 'cyan' : 'brand'}
                >
                  <IconBath size={28} stroke={1.5} />
                </ThemeIcon>

                <div>
                  <Text fw={700} fz="lg" className={classes.itemTitle}>
                    {beachData?.hasShowers ? 'Tiene duchas' : 'No tiene duchas'}
                  </Text>
                  <Text c="dimmed">Horario: {beachData?.showerSchedule}</Text>
                </div>
              </div>
              <div className={classes.item}>
                <ThemeIcon
                  variant="light"
                  className={classes.itemIcon}
                  size={60}
                  radius="md"
                  color={beachData?.tideStatus}
                >
                  <IconPennant size={28} stroke={1.5} />
                </ThemeIcon>

                <div>
                  <Text fw={700} fz="lg" className={classes.itemTitle}>
                    {getTideTitle(beachData?.tideStatus)}
                  </Text>
                  <Text c="dimmed">Actual estado de la marea de la playa</Text>
                </div>
              </div>
            </SimpleGrid>
          </Container>
          <Title order={2} mt="xl">
            ¿Donde se ubica?
          </Title>
          {beachData ? (
            <BeachMap
              location={{
                latitude: beachData?.latitude,
                longitude: beachData?.longitude,
              }}
            />
          ) : null}

          <Title order={2} mt="xl">
            Restricciones
          </Title>
          {beachData ? (
            <SimpleGrid cols={{ base: 1, xs: 3 }} spacing={50} mt={48}>
              {restrictions}
            </SimpleGrid>
          ) : null}
        </Container>
      </Box>
    </AppLayout>
  );
}

export default BeachDetailPage;
