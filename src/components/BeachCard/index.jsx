import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './beach.module.css';

const mockdata = {
  image:
    'https://portal.andina.pe/EDPfotografia/Thumbnail/2013/02/07/000202844W.jpg',
  title: 'Playa Blanca',
  district: 'Punta Hermosa',
  information: [
    { emoji: '🌊', label: 'Marea Alta' },
    { emoji: '🤽', label: 'Tiene Salvavidas' },
    { emoji: '💧', label: 'Es Saludable' },
    { emoji: '🚿', label: 'Tiene duchas' },
    { emoji: '🚽', label: 'Tiene baños' },
  ],
};

function BeachCard() {
  const { image, title, district, information } = mockdata;
  const features = information.map((badge) => (
    <Badge
      key={badge.label}
      variant="outline"
      color="cyan"
      leftSection={badge.emoji}
    >
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="space-between">
          <Text fz="lg" fw={600}>
            {title}
          </Text>
          <Badge size="sm" variant="light" color="cyan">
            {district}
          </Badge>
        </Group>
        <Group gap={7} mt="lg">
          {features}
        </Group>
      </Card.Section>

      <Link to="/playas/1">
        <Button w="100%" color="cyan" mt="xs">
          Más información
        </Button>
      </Link>
    </Card>
  );
}

export default BeachCard;
