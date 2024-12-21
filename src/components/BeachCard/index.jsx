import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
  ThemeIcon,
} from '@mantine/core';
import { IconFlagFilled } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './beach.module.css';

function BeachCard({ data }) {
  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={data.image} alt={data.name} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group gap="xs">
          <Text fz="lg" fw={600}>
            {data.name}
          </Text>
          <ThemeIcon variant="white">
            <IconFlagFilled
              color={data.tideStatus}
              style={{ width: '70%', height: '70%' }}
            />
          </ThemeIcon>
        </Group>

        <Group gap={7} mt="lg">
          <Badge variant="outline" color="cyan" leftSection="💧">
            {data.isHealthy ? 'Es Saludable' : 'No es saludable'}
          </Badge>
          <Badge variant="outline" color="cyan" leftSection="🤽">
            {data.hasLifeguards ? 'Tiene Salvavidas' : 'No tiene Salvavidas'}
          </Badge>
          <Badge variant="outline" color="cyan" leftSection="🚽">
            {data.hasRestrooms ? 'Tiene baños' : 'No tiene baños'}
          </Badge>
          <Badge variant="outline" color="cyan" leftSection="🚿">
            {data.hasShowers ? 'Tiene duchas' : 'No tiene duchas'}
          </Badge>
        </Group>
      </Card.Section>

      <Link to={`/playas/${data.id}`}>
        <Button w="100%" color="cyan" mt="xs">
          Más información
        </Button>
      </Link>
    </Card>
  );
}

BeachCard.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    hasLifeguards: PropTypes.bool.isRequired,
    hasRestrooms: PropTypes.bool.isRequired,
    hasShowers: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    isHealthy: PropTypes.bool.isRequired,
    latitude: PropTypes.number.isRequired,
    lifeguardSchedule: PropTypes.string.isRequired,
    longitude: PropTypes.number.isRequired,
    municipalityId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    restrictions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ),
    restroomSchedule: PropTypes.string.isRequired,
    showerSchedule: PropTypes.string.isRequired,
    tideStatus: PropTypes.string.isRequired,
  }).isRequired,
};

export default BeachCard;
