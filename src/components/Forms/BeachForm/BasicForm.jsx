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
import { useForm } from '@mantine/form';
import { IconPhotoScan } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import MapCard from '../../MapCard';

function BasicForm() {
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      location: null,
      image: null,
    },
    validate: {
      name: (value) =>
        value.length < 2 ? 'Nombre debe tener al menos 3 carácteres' : null,
      description: (value) =>
        value.length < 9
          ? 'Descripción debe tener al menos 10 carácteres'
          : null,
    },
  });

  useEffect(() => {
    form.setFieldValue('location', location);
  }, [location]);

  const handleError = (errors) => {
    if (errors.location) {
      setLocationError(true);
    } else {
      setLocationError(false);
    }
  };

  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleError)}>
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

      {/*  <Group mt="xl" justify="flex-end">
        <Button type="submit">Guardar Datos</Button>
      </Group> */}
    </form>
  );
}

export default BasicForm;
