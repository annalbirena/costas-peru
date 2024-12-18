import { Modal, Text } from '@mantine/core';
import PropTypes from 'prop-types';
import BeachForm from './BeachForm';

function EditBeachModal({ isOpen, close, onClose }) {
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
          Editar Playa
        </Text>
      }
      size="xl"
      centered
    >
      <BeachForm />
    </Modal>
  );
}

EditBeachModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditBeachModal;
