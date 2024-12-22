/* eslint-disable no-nested-ternary */
import {
  Alert,
  Box,
  Center,
  Container,
  Group,
  Loader,
  LoadingOverlay,
  Overlay,
  Stack,
  Title,
} from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import AppLayout from '../../components/AppLayout';
import classes from './beaches.module.css';
import BeachCard from '../../components/BeachCard';
import { getBeaches } from '../../services/beach';
import Filter from './Filter';

function BeachesPage() {
  const [beachesData, setBeachesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingFilter, setLoadingFilter] = useState(false);
  const [loadingClearFilter, setLoadingClearFilter] = useState(false);

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
            <Filter
              setBeachesData={setBeachesData}
              loadingFilter={loadingFilter}
              setLoadingFilter={setLoadingFilter}
              loadingClearFilter={loadingClearFilter}
              setLoadingClearFilter={setLoadingClearFilter}
            />
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
                  visible={loadingClearFilter || loadingFilter}
                  zIndex={1000}
                  overlayProps={{ radius: 'sm', blur: 0.5 }}
                />
                <Group>{beaches}</Group>
              </Box>
            ) : (
              <Center w="100%">
                <Alert variant="light">No existen playas</Alert>
              </Center>
            )}
          </Stack>
        </Container>
      </Box>
    </AppLayout>
  );
}

export default BeachesPage;
