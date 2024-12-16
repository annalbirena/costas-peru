import React from 'react';
import { Group, Stack, Title } from '@mantine/core';
import AppLayout from '../components/AppLayout';
import PanelLayout from '../components/PanelLayout';
import UserBeachCard from '../components/UserBeach/UserBeachCard';

function EntityBeachesPage() {
  return (
    <AppLayout bgColor="#f1f3f5">
      <PanelLayout>
        <Stack>
          <Title order={3} fw={500}>
            Mis playas
          </Title>
          <Group justify="center">
            <UserBeachCard />
            <UserBeachCard />
            <UserBeachCard />
            <UserBeachCard />
            <UserBeachCard />
            <UserBeachCard />
          </Group>
        </Stack>
      </PanelLayout>
    </AppLayout>
  );
}

export default EntityBeachesPage;
