import { IconBeach } from '@tabler/icons-react';
import { Card, Group, Text, Title, useMantineTheme } from '@mantine/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './districtcard.module.css';

function DistrictCard({ data }) {
  const theme = useMantineTheme();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component={Link}
      to={`/balnearios/${data.id}`}
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Title order={3} size={28} className={classes.title} fw={600}>
            {data.name}
          </Title>

          <Group gap={4}>
            <IconBeach size={18} stroke={1.5} color={theme.colors.dark[2]} />
            <Text size="md" className={classes.bodyText}>
              {data.beaches.length} Playas
            </Text>
          </Group>
        </div>
      </div>
    </Card>
  );
}

DistrictCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    beaches: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default DistrictCard;
