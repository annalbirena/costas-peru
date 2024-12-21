/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
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
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../../components/AppLayout';
import { authenticateMuni } from '../../services/municipality';
import { useMunicipalityContext } from '../../context/MunicipalityContext';

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setToken, setMunicipalityId } = useMunicipalityContext();

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
    setIsLoading(true);

    try {
      const responseData = await authenticateMuni(
        values.email,
        values.password,
      );

      const { municipality, token } = responseData;

      if (municipality) {
        localStorage.setItem('userId', municipality.id);
        localStorage.setItem('token', token);
        setMunicipalityId(municipality.id);
        setToken(token);

        notifications.show({
          title: 'Éxito!',
          message: 'Inicio de sesión correcto.',
          color: 'cyan',
          icon: <IconCheck size={20} />,
        });

        form.reset();
        setIsLoading(false);
        // Redirigir al perfil de usuario
        navigate('/mi-cuenta/datos');
      } else {
        notifications.show({
          title: 'Error!',
          message: 'Usuario o contraseña incorrectos.',
          color: 'red',
          icon: <IconX size={20} />,
        });
        setIsLoading(false);
      }
    } catch (error) {
      notifications.show({
        title: 'Error!',
        message: 'Hubo un error al iniciar sesión',
        color: 'red',
        icon: <IconX size={20} />,
      });
      setIsLoading(false);
    }
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
            <Button type="submit" w="100%" loading={isLoading}>
              Inicia Sesión
            </Button>
          </Group>
        </form>
      </Paper>
    </AppLayout>
  );
}

export default LoginPage;
