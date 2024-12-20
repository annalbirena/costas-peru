import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import PropTypes from 'prop-types';
import EditTideForm from './EditTideForm';

function EditTideAction({ data, setBeachesData }) {
  const [isOpen, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button onClick={open} w="100%" variant="light" color="cyan" mt="xs">
        Actualizar estado de Marea
      </Button>

      <EditTideForm
        data={data}
        setBeachesData={setBeachesData}
        isOpen={isOpen}
        close={close}
        onClose={close}
      />
    </>
  );
}

EditTideAction.propTypes = {
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

export default EditTideAction;
