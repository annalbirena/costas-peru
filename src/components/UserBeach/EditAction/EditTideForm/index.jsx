/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { Button, Group, Modal, Select, Stack, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { getBeachesByMuni, updateTideStatus } from '../../../../services/beach';
import { useMunicipalityContext } from '../../../../context/MunicipalityContext';

function EditTideForm({ data, setBeachesData, isOpen, close, onClose }) {
  const { municipalityId, token } = useMunicipalityContext();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      tideStatus: data.tideStatus,
    },
  });

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      const tideUpdated = await updateTideStatus(
        data.id,
        { tideStatus: values.tideStatus },
        token,
      );

      if (tideUpdated) {
        notifications.show({
          title: 'Éxito!',
          message: 'Se actualizó correctamente.',
          color: 'cyan',
          icon: <IconCheck size={20} />,
        });

        // Obtener playas actualizadas
        const beachesData = await getBeachesByMuni(municipalityId);
        setBeachesData(beachesData);

        close(); // Cerrar formulario
      } else {
        notifications.show({
          title: 'Error!',
          message: 'Hubo un error al actualizar la playa, intenta nuevamente.',
          icon: <IconX size={20} />,
        });
      }
    } catch (error) {
      console.log(error);
      notifications.show({
        title: 'Error!',
        message: 'Hubo un error al crear la playa, intenta nuevamente.',
        icon: <IconX size={20} />,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    // Reset values
    form.reset();

    onClose(); // Close Modal
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
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <Select
            withAsterisk
            allowDeselect={false}
            label="Estado de marea"
            placeholder="Seleccione estado"
            data={[
              { value: 'red', label: 'Marea Alta - Bandera roja' },
              { value: 'yellow', label: 'Marea Media - Bandera amarila' },
              { value: 'green', label: 'Marea Baja - Bandera verde' },
            ]}
            key={form.key('tideStatus')}
            {...form.getInputProps('tideStatus')}
          />
          <Group justify="flex-end">
            <Button type="submit" loading={loading}>
              Actualizar
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}

EditTideForm.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    municipalityId: PropTypes.string.isRequired,
    tideStatus: PropTypes.string.isRequired,
  }).isRequired,
  setBeachesData: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditTideForm;
