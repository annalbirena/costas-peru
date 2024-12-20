/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import {
  BackgroundImage,
  Button,
  Center,
  FileButton,
  Group,
  Select,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';
import classes from '../form.module.css';
import { useMunicipalityContext } from '../../../context/MunicipalityContext';
import departmentData from '../../../data/department';
import provincesData from '../../../data/provinces';
import { getMuniById, updateMuni } from '../../../services/municipality';

function EntityForm() {
  const { municipality, setMunicipality, token } = useMunicipalityContext();
  const [imageSrc, setImageSrc] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      department: '',
      province: '',
      phrase: '',
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

  // Inicializar los valores del formulario con los datos del usuario
  useEffect(() => {
    if (municipality) {
      const data = {
        name: municipality.name,
        department: municipality.department,
        province: municipality.province,
        phrase: municipality.phrase ? municipality.phrase : '',
        description: municipality.description ? municipality.description : '',
        email: municipality.email,
        image: municipality.image,
      };
      form.setInitialValues(data);
      form.setValues(data);
    }
  }, [municipality]);

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

  const handleSubmit = async (values) => {
    setLoading(true);

    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('department', values.department);
    formData.append('province', values.province);
    formData.append('phrase', values.phrase);
    formData.append('description', values.description);

    if (imageFile) {
      formData.append('file', imageFile);
    }

    try {
      const muniUpdated = await updateMuni(municipality.id, formData, token);

      if (muniUpdated) {
        setLoading(false);
        notifications.show({
          title: 'Éxito!',
          message: 'Datos actualizados correctamente.',
          color: 'cyan',
          icon: <IconCheck size={20} />,
        });

        // Obtener datos actualizados de la municipalidad
        const getMuni = async (id) => {
          const muniData = await getMuniById(id);
          setMunicipality(muniData);
        };

        getMuni(municipality.id);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      notifications.show({
        title: 'Error!',
        message: 'Hubo un erro al actualizar los datos, intenta nuevamente.',
        icon: <IconX size={20} />,
      });
    }
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
            searchable
            withAsterisk
            allowDeselect={false}
            label="Departamento"
            placeholder="Seleccione Departamento"
            data={departmentData}
            key={form.key('department')}
            {...form.getInputProps('department')}
            className={classes.input}
          />
          <Select
            searchable
            withAsterisk
            allowDeselect={false}
            label="Provincia"
            placeholder="Seleccione Provincia"
            data={provincesData}
            key={form.key('province')}
            {...form.getInputProps('province')}
            className={classes.input}
          />
        </Group>

        <TextInput
          label="Lema o frase representativa del balneario"
          placeholder="Ingresa frase"
          key={form.key('phrase')}
          {...form.getInputProps('phrase')}
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
        <BackgroundImage
          h={300}
          src={imageSrc || form.getValues().image}
          radius="sm"
        >
          <Center p="md" h="100%" className={classes.image}>
            <FileButton
              accept="image/png, image/gif, image/jpeg, image/svg+xml, image/webp, image/avif, image/heic, image/heif"
              onChange={handleImageUpload}
            >
              {(props) => <Button {...props}>Actualizar foto</Button>}
            </FileButton>
          </Center>
        </BackgroundImage>
      </Stack>

      <Group mt="xl" justify="flex-end">
        <Button type="submit" loading={loading}>
          Guardar Datos
        </Button>
      </Group>
    </form>
  );
}

export default EntityForm;
