import { Button, Group, Modal, Select, Stack, Text } from '@mantine/core';
import PropTypes from 'prop-types';

function EditTideForm({ isOpen, close, onClose }) {
  const handleClose = () => {
    onClose(); // Close Modal
    close();
  };

  return (
    <Modal
      opened={isOpen}
      onClose={handleClose}
      title={
        <Text size="xl" fw="bold">
          Actualizar estado de Marea
        </Text>
      }
      size="sm"
      centered
    >
      <Stack>
        <Select
          withAsterisk
          allowDeselect={false}
          label="Estado de marea"
          placeholder="Seleccione estado"
          data={[
            { value: 'red', label: 'Rojo - Marea Alta' },
            { value: 'yellow', label: 'Amarillo - Marea Media' },
            { value: 'green', label: 'Verde - Marea Baja' },
          ]}
        />
        <Group justify="flex-end">
          <Button>Actualizar</Button>
        </Group>
      </Stack>
    </Modal>
  );
}

EditTideForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditTideForm;
