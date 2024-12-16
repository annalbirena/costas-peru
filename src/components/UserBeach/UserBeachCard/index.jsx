import { Card, Image, Text } from '@mantine/core';
import classes from './beach.module.css';
import EditPetAction from '../EditAction/EditBeachAction';
import EditTideAction from '../EditAction/EditTideAction';

const mockdata = {
  image:
    'https://portal.andina.pe/EDPfotografia/Thumbnail/2013/02/07/000202844W.jpg',
  title: 'Playa Blanca',
};

function UserBeachCard() {
  const { image, title } = mockdata;

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Text fz="lg" fw={600}>
          {title}
        </Text>
      </Card.Section>
      <EditPetAction />
      <EditTideAction />
    </Card>
  );
}

export default UserBeachCard;
