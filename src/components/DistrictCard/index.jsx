import { IconBeach } from '@tabler/icons-react';
import { Card, Group, Text, Title, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './districtcard.module.css';

function DistrictCard() {
  const theme = useMantineTheme();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component={Link}
      to="/balnearios/1"
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
            Punta Hermosa
          </Title>

          <Group gap={4}>
            <IconBeach size={18} stroke={1.5} color={theme.colors.dark[2]} />
            <Text size="md" className={classes.bodyText}>
              5 Playas
            </Text>
          </Group>
        </div>
      </div>
    </Card>
  );
}

export default DistrictCard;
