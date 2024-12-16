import { Modal, Text } from '@mantine/core';
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
          Editar Estado de Marea
        </Text>
      }
      size="md"
      centered
    >
      <h1>Editar Estado de Marea</h1>
    </Modal>
  );
}

EditTideForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditTideForm;
