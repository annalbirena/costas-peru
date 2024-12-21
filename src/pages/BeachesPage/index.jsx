/* eslint-disable no-nested-ternary */
import {
  Alert,
  Box,
  Button,
  Center,
  Container,
  Group,
  Loader,
  LoadingOverlay,
  Overlay,
  Select,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  IconDropletHeart,
  IconFilter,
  IconLifebuoy,
  IconSwimming,
  IconX,
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import AppLayout from '../../components/AppLayout';
import classes from './beaches.module.css';
import BeachCard from '../../components/BeachCard';
import { getBeaches } from '../../services/beach';

function BeachesPage() {
  const [beachesData, setBeachesData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBeachesData = async () => {
    setLoading(true);

    try {
      const data = await getBeaches();
      setBeachesData(data);
    } catch (error) {
      console.log(error);
      notifications.show({
        title: 'Error!',
        message: 'No se pudo obtener las playas.',
        icon: <IconX size={20} />,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBeachesData();
  }, []);

  const beaches = beachesData.map((beach) => (
    <BeachCard key={beach.id} data={beach} />
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
            <Title className={classes.title}>Conoce las Playas del Perú</Title>
            <Group mt="xl" align="flex-end">
              <Stack gap={4}>
                <Text c="white">¿Es saludable?</Text>
                <Select
                  placeholder="Elige una opción"
                  data={['React', 'Angular', 'Vue', 'Svelte']}
                  rightSectionPointerEvents="none"
                  rightSection={<IconDropletHeart size={18} stroke={1.5} />}
                />
              </Stack>
              <Stack gap={4}>
                <Text c="white">¿Tiene salvavidas?</Text>
                <Select
                  placeholder="Elige una opción"
                  data={['React', 'Angular', 'Vue', 'Svelte']}
                  rightSectionPointerEvents="none"
                  rightSection={<IconLifebuoy size={18} stroke={1.5} />}
                />
              </Stack>
              <Stack gap={4}>
                <Text c="white">Nivel de marea</Text>
                <Select
                  placeholder="Elige una opción"
                  data={['React', 'Angular', 'Vue', 'Svelte']}
                  rightSectionPointerEvents="none"
                  rightSection={<IconSwimming size={18} stroke={1.5} />}
                />
              </Stack>

              <Button rightSection={<IconFilter size={14} />}>Filtrar</Button>
            </Group>
          </Container>
        </div>
        <Container size="lg" pt={48} pb={100}>
          <Stack flex={1}>
            {loading ? (
              <Center h={100} w="100%">
                <Loader color="brand" />
              </Center>
            ) : beachesData.length ? (
              <Box pos="relative">
                <LoadingOverlay
                  zIndex={1000}
                  overlayProps={{ radius: 'sm', blur: 0.5 }}
                />
                <Group>{beaches}</Group>
              </Box>
            ) : (
              <Center w="100%">
                <Alert variant="light" color="grape">
                  No existen playas
                </Alert>
              </Center>
            )}
          </Stack>
        </Container>
      </Box>
    </AppLayout>
  );
}

export default BeachesPage;
