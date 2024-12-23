import React from 'react';
import { Stack, Title } from '@mantine/core';
import AppLayout from '../components/AppLayout';
import PanelLayout from '../components/PanelLayout';
import BeachForm from '../components/Forms/BeachForm';

function RegisterBeachPage() {
  return (
    <AppLayout bgColor="#f1f3f5">
      <PanelLayout>
        <Stack>
          <Title order={3} fw={500}>
            Registrar playa
          </Title>
          <BeachForm />
        </Stack>
      </PanelLayout>
    </AppLayout>
  );
}

export default RegisterBeachPage;
