/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { Alert, Center, Group, Loader, Stack, Title } from '@mantine/core';
import AppLayout from '../components/AppLayout';
import PanelLayout from '../components/PanelLayout';
import UserBeachCard from '../components/UserBeach/UserBeachCard';
import { useMunicipalityContext } from '../context/MunicipalityContext';
import { getBeachesByMuni } from '../services/beach';

function EntityBeachesPage() {
  const [beachesData, setBeachesData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const { municipalityId } = useMunicipalityContext();

  const getBeachesData = async () => {
    setIsLoading(true);
    const data = await getBeachesByMuni(municipalityId);
    setBeachesData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (municipalityId) {
      getBeachesData();
    }
  }, [municipalityId]);

  const beaches = beachesData.map((beach) => (
    <UserBeachCard
      key={beach.id}
      data={beach}
      setBeachesData={setBeachesData}
    />
  ));

  return (
    <AppLayout bgColor="#f1f3f5">
      <PanelLayout>
        <Stack>
          <Title order={3} fw={500}>
            Mis playas
          </Title>
          {loading ? (
            <Center h={100} w="100%">
              <Loader size={30} />
            </Center>
          ) : beachesData.length ? (
            <Group /* justify="center" */>{beaches}</Group>
          ) : (
            <Center w="100%">
              <Alert variant="light">No tiene playas registradas</Alert>
            </Center>
          )}
        </Stack>
      </PanelLayout>
    </AppLayout>
  );
}

export default EntityBeachesPage;
