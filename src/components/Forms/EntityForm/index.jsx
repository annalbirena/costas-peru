/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  FileInput,
  Group,
  rem,
  Select,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconPhotoScan } from '@tabler/icons-react';
/* import { useUserContext } from '../../../context/UserContext';
import { getUserById, updateUser } from '../../../services/user'; */
import classes from '../form.module.css';

function EntityForm() {
  const form = useForm({
    initialValues: {
      name: '',
      department: '',
      province: '',
      district: '',
      headline: '',
      description: '',
      email: '',
      image: null,
    },

    validate: {
      name: (value) =>
        value.length < 2 ? 'Debe tener al menos 3 carácteres' : null,
      description: (value) =>
        value.length < 9 ? 'Debe tener al menos 10 carácteres' : null,
    },
  });

  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          disabled
          label="Correo"
          placeholder="correo@email.com"
          key={form.key('email')}
          {...form.getInputProps('email')}
          className={classes.input}
        />
        <TextInput
          withAsterisk
          label="Nombre del Balneario"
          placeholder="Ingrese nombre"
          key={form.key('name')}
          {...form.getInputProps('name')}
        />
        <Group grow wrap="nowrap" className={classes.row}>
          <Select
            withAsterisk
            allowDeselect={false}
            label="Departamento"
            placeholder="Seleccione Departamento"
            data={['React', 'Angular', 'Vue', 'Svelte']}
            key={form.key('department')}
            {...form.getInputProps('department')}
            className={classes.input}
          />
          <Select
            withAsterisk
            allowDeselect={false}
            label="Provincia"
            placeholder="Seleccione Provincia"
            data={['React', 'Angular', 'Vue', 'Svelte']}
            key={form.key('province')}
            {...form.getInputProps('province')}
            className={classes.input}
          />
          <Select
            withAsterisk
            allowDeselect={false}
            label="Distrito"
            placeholder="Seleccione Distrito"
            data={['React', 'Angular', 'Vue', 'Svelte']}
            key={form.key('district')}
            {...form.getInputProps('district')}
            className={classes.input}
          />
        </Group>

        <TextInput
          label="Lema o frase representativa del balneario"
          placeholder="Ingresa frase"
          {...form.getInputProps('headline')}
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
      </Stack>

      <Group mt="xl" justify="flex-end">
        <Button type="submit">Guardar Datos</Button>
      </Group>
    </form>
  );
}

export default EntityForm;
