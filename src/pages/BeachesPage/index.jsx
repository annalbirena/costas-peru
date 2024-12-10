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
import {
  IconDropletHeart,
  IconFilter,
  IconLifebuoy,
  IconSwimming,
} from '@tabler/icons-react';
import AppLayout from '../../components/AppLayout';
import classes from './beaches.module.css';
import BeachCard from '../../components/BeachCard';

function BeachesPage() {
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
            {/* <Text className={classes.description} size="xl" mt="xl">
            Filtra los balnearios por departamento, provincia o distrito.
            </Text> */}
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
          <Group justify="center">
            <BeachCard />
            <BeachCard />
            <BeachCard />
            <BeachCard />
            <BeachCard />
            <BeachCard />
          </Group>
        </Container>
      </Box>
    </AppLayout>
  );
}

export default BeachesPage;
