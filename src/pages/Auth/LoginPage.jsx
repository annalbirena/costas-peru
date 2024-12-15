/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Stack,
  Button,
  Paper,
  Group,
  TextInput,
  PasswordInput,
  Title,
  Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import AppLayout from '../../components/AppLayout';

function LoginPage() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Correo inválido'),
      password: (val) =>
        val.length <= 7 ? 'Debe tener al menos 8 carácteres' : null,
    },
  });

  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <AppLayout>
      <Paper radius="md" p="xl" w={400} m="auto" mt={100} withBorder>
        <Title order={1} fw={600} mb="sm" ta="center">
          Bienvenido a Costas del Perú
        </Title>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <Text size="sm" ta="center">
              Inicia sesión con el correo de la Municipalidad.
            </Text>

            <TextInput
              withAsterisk
              label="Correo"
              placeholder="correo@email.com"
              {...form.getInputProps('email')}
            />

            <PasswordInput
              withAsterisk
              label="Contraseña"
              placeholder="Contraseña"
              {...form.getInputProps('password')}
            />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Button type="submit" w="100%">
              Inicia Sesión
            </Button>
          </Group>
        </form>
      </Paper>
    </AppLayout>
  );
}

export default LoginPage;
