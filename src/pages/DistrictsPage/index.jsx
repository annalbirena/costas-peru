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
import { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';
import AppLayout from '../../components/AppLayout';
import classes from './district.module.css';
import DistrictCard from '../../components/DistrictCard';
import { getMunicipalities } from '../../services/municipality';
import Filter from './Filter';

function DistrictsPage() {
  const [municipalitiesData, setMunicipalitiesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingFilter, setLoadingFilter] = useState(false);
  const [loadingClearFilter, setLoadingClearFilter] = useState(false);

  const getMunicipalitiesData = async () => {
    setLoading(true);

    try {
      const data = await getMunicipalities();
      setMunicipalitiesData(data);
    } catch (error) {
      console.log(error);
      notifications.show({
        title: 'Error!',
        message: 'No se pudo obtener las municipalidades.',
        icon: <IconX size={20} />,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMunicipalitiesData();
  }, []);

  const munis = municipalitiesData.map((muni) => (
    <Group key={muni.id} justify="center">
      <DistrictCard data={muni} />
    </Group>
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
            <Title className={classes.title}>
              Conoce los balnearios del Perú
            </Title>

            <Filter
              setMunicipalitiesData={setMunicipalitiesData}
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
            ) : municipalitiesData.length ? (
              <Box pos="relative">
                <LoadingOverlay
                  visible={loadingClearFilter || loadingFilter}
                  zIndex={1000}
                  overlayProps={{ radius: 'sm', blur: 0.5 }}
                />
                <Group>{munis}</Group>
              </Box>
            ) : (
              <Center w="100%">
                <Alert variant="light">No existen balnearios</Alert>
              </Center>
            )}
          </Stack>
        </Container>
      </Box>
    </AppLayout>
  );
}

export default DistrictsPage;
