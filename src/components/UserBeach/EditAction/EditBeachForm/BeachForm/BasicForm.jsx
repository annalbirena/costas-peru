/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import {
  BackgroundImage,
  Button,
  Center,
  FileButton,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MapCard from '../../../../MapCard';

function BasicForm({ data, form, setImageFile, location, setLocation }) {
  const [locationError, setLocationError] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

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

  const handleImageUpload = (file) => {
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc(reader.result);
      };
    }
  };

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

      <BackgroundImage h={300} src={imageSrc || data.image} radius="sm">
        <Center p="md" h="100%">
          <FileButton
            accept="image/png, image/gif, image/jpeg, image/svg+xml, image/webp, image/avif, image/heic, image/heif"
            onChange={handleImageUpload}
          >
            {(props) => <Button {...props}>Cargar foto</Button>}
          </FileButton>
        </Center>
      </BackgroundImage>
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
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    getInputProps: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    key: PropTypes.func.isRequired,
    errors: PropTypes.shape().isRequired,
  }).isRequired,
  setImageFile: PropTypes.func.isRequired,
  location: PropTypes.oneOfType([
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
    PropTypes.oneOf([null]),
  ]).isRequired,
  setLocation: PropTypes.func.isRequired,
};

export default BasicForm;
