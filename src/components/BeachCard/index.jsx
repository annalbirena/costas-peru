import { IconBeachOff, IconSwimming } from '@tabler/icons-react';
import {
  Card,
  Center,
  Group,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './beach.module.css';

function BeachCard() {
  const theme = useMantineTheme();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component={Link}
      to="/playas/1"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage:
            'url(https://portal.andina.pe/EDPfotografia/Thumbnail/2013/02/07/000202844W.jpg)',
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Title order={3} size={28} className={classes.title} fw={600}>
            Playa Blanca
          </Title>

          <Group gap={8}>
            <Center>
              <IconBeachOff
                size={16}
                stroke={1.5}
                color={theme.colors.dark[2]}
              />
              <Text size="sm" className={classes.bodyText}>
                No Saludable
              </Text>
            </Center>
            <Center>
              <IconSwimming
                size={18}
                stroke={1.5}
                color={theme.colors.dark[2]}
              />
              <Text size="sm" className={classes.bodyText}>
                Marea baja
              </Text>
            </Center>
          </Group>
        </div>
      </div>
    </Card>
  );
}

export default BeachCard;
