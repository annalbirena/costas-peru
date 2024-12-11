import { Stack } from '@mantine/core';
import Header from '../components/AppLayout/Header';
import BeachesMap from '../components/Map';

function MapPage() {
  return (
    <Stack h="100vh" gap={0}>
      <Header />
      <BeachesMap />
    </Stack>
  );
}

export default MapPage;
