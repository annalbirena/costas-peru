import React from 'react';
import { Stack, Title } from '@mantine/core';
import AppLayout from '../components/AppLayout';
import PanelLayout from '../components/PanelLayout';
import EntityForm from '../components/Forms/EntityForm';

function EntityDataPage() {
  return (
    <AppLayout>
      <PanelLayout>
        <Stack>
          <Title order={3} fw={500}>
            Datos del Balneario
          </Title>
          <EntityForm />
        </Stack>
      </PanelLayout>
    </AppLayout>
  );
}

export default EntityDataPage;
