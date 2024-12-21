import { Card, Group, Image, Text, ThemeIcon } from '@mantine/core';
import { IconFlagFilled } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import classes from './beach.module.css';
import EditBeachAction from '../EditAction/EditBeachAction';
import EditTideAction from '../EditAction/EditTideAction';

function UserBeachCard({ data, setBeachesData }) {
  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={data.image} alt={data.name} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="space-between">
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
      </Card.Section>
      <EditBeachAction data={data} setBeachesData={setBeachesData} />
      <EditTideAction data={data} setBeachesData={setBeachesData} />
    </Card>
  );
}

UserBeachCard.propTypes = {
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
  setBeachesData: PropTypes.func.isRequired,
};

export default UserBeachCard;
