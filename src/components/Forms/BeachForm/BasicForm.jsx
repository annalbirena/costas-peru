/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import {
  FileInput,
  rem,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { IconPhotoScan } from '@tabler/icons-react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import MapCard from '../../MapCard';

function BasicForm({
  form,
  location = null,
  setLocation,
  locationError,
  setLocationError,
}) {
  useEffect(() => {
    form.setFieldValue('location', location);
  }, [location]);

  useEffect(() => {
    if (form.errors.location) {
      setLocationError(true);
    } else {
      setLocationError(false);
    }
  }, [form.errors]);

  return (
    <Stack>
      <TextInput
        withAsterisk
        label="Nombre de Playa"
        placeholder="Ingrese nombre de la playa"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <Textarea
        withAsterisk
        autosize
        minRows={2}
        label="Descripción"
        placeholder="Ingrese descripción"
        key={form.key('description')}
        {...form.getInputProps('description')}
      />

      <FileInput
        withAsterisk
        label="Cargar imagen"
        description="De preferencia una imagen de alta calidad"
        placeholder="Seleccione imagen desde su equipo"
        leftSectionPointerEvents="none"
        leftSection={
          <IconPhotoScan
            style={{
              width: rem(18),
              height: rem(18),
            }}
            stroke={1.5}
          />
        }
        key={form.key('image')}
        {...form.getInputProps('image')}
      />
      <Stack gap={4}>
        <Text fw={500} size="sm">
          Ubicación de playa{' '}
          <Text span c="red">
            *
          </Text>
        </Text>
        <MapCard location={location} setLocation={setLocation} />
        {locationError && (
          <Text c="red" size="xs">
            Seleccionar ubicación en mapa
          </Text>
        )}
      </Stack>
    </Stack>
  );
}

BasicForm.propTypes = {
  form: PropTypes.shape({
    getInputProps: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    key: PropTypes.func.isRequired,
    errors: PropTypes.shape().isRequired,
  }).isRequired,
  setLocation: PropTypes.func.isRequired,
  locationError: PropTypes.bool.isRequired,
  setLocationError: PropTypes.func.isRequired,
  location: PropTypes.oneOfType([
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
    PropTypes.oneOf([null]),
  ]),
};

export default BasicForm;
