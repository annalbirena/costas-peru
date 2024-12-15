import React from 'react';
import { Stack, Title } from '@mantine/core';
import AppLayout from '../components/AppLayout';
import PanelLayout from '../components/PanelLayout';

function EntityBeachesPage() {
  return (
    <AppLayout bgColor="#f1f3f5">
      <PanelLayout>
        <Stack>
          <Title order={3} fw={500}>
            Mis playas
          </Title>
        </Stack>
      </PanelLayout>
    </AppLayout>
  );
}

export default EntityBeachesPage;
