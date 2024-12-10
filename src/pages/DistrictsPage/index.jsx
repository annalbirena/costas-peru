import {
  Box,
  Button,
  Container,
  Group,
  Overlay,
  Select,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconFilter, IconMapPin } from '@tabler/icons-react';
import AppLayout from '../../components/AppLayout';
import classes from './district.module.css';
import DistrictCard from '../../components/DistrictCard';

function DistrictsPage() {
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
            {/* <Text className={classes.description} size="xl" mt="xl">
            Filtra los balnearios por departamento, provincia o distrito.
            </Text> */}
            <Group mt="xl" align="flex-end">
              <Stack gap={4}>
                <Text c="white">Departamento</Text>
                <Select
                  placeholder="Departamento"
                  data={['React', 'Angular', 'Vue', 'Svelte']}
                  rightSectionPointerEvents="none"
                  rightSection={<IconMapPin size={18} stroke={1.5} />}
                />
              </Stack>
              <Stack gap={4}>
                <Text c="white">Provincia</Text>
                <Select
                  placeholder="Provincia"
                  data={['React', 'Angular', 'Vue', 'Svelte']}
                  rightSectionPointerEvents="none"
                  rightSection={<IconMapPin size={18} stroke={1.5} />}
                />
              </Stack>
              <Stack gap={4}>
                <Text c="white">Distrito</Text>
                <Select
                  placeholder="Distrito"
                  data={['React', 'Angular', 'Vue', 'Svelte']}
                  rightSectionPointerEvents="none"
                  rightSection={<IconMapPin size={18} stroke={1.5} />}
                />
              </Stack>

              <Button rightSection={<IconFilter size={14} />}>Filtrar</Button>
            </Group>
          </Container>
        </div>
        <Container size="lg" pt={48} pb={100}>
          <Group justify="center">
            <DistrictCard />
            <DistrictCard />
            <DistrictCard />
            <DistrictCard />
            <DistrictCard />
            <DistrictCard />
          </Group>
        </Container>
      </Box>
    </AppLayout>
  );
}

export default DistrictsPage;
