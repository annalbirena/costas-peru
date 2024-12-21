/* eslint-disable no-console */
import { Button, Group, Stepper } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import BasicForm from './BasicForm';
import ServicesForm from './ServicesForm';
import RestrictionsForm from './RestrictionsForm';
import { createBeach } from '../../../services/beach';
import { useMunicipalityContext } from '../../../context/MunicipalityContext';
import { getNonEmptyRestrictions } from './utils';

function BeachForm() {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);
  const { municipality, token } = useMunicipalityContext();

  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      location: null,
      isHealthy: null,
      tideStatus: '', // Estado de marea
      hasLifeguards: null,
      lifeguardSchedule: '',
      hasBathrooms: null,
      bathroomSchedule: '',
      hasShowers: null,
      showerSchedule: '',
      restrictions: [],
      image: null,
    },

    validate: (values) => {
      if (active === 0) {
        return {
          name:
            values.name.trim().length < 2
              ? 'Nombre debe tener al menos 3 carácteres'
              : null,
          description:
            values.description.trim().length < 9
              ? 'Descripción debe tener al menos 10 carácteres'
              : null,
          location:
            values.location == null ? 'Debe ingresar una ubicacion' : null,
          image: values.image == null ? 'Debe subir una imagen' : null,
        };
      }

      if (active === 1) {
        return {
          isHealthy: values.isHealthy == null ? 'Debe elegir una opción' : null,
          tideStatus:
            values.tideStatus.trim().length < 2
              ? 'Debe elegir un estado'
              : null,
          hasLifeguards:
            values.hasLifeguards == null ? 'Debe elegir una opción' : null,
          hasBathrooms:
            values.hasBathrooms == null ? 'Debe elegir una opción' : null,
          hasShowers:
            values.hasShowers == null ? 'Debe elegir una opción' : null,
        };
      }

      return {};
    },
  });

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        /* console.log(form.errors); */
        return current;
      }
      return current < 3 ? current + 1 : current;
    });

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const handleSubmit = async () => {
    setLoading(true);
    const values = form.getValues();

    try {
      const beachCreated = await createBeach(
        municipality.id,
        {
          name: values.name,
          description: values.description,
          latitude: values.location.latitude,
          longitude: values.location.longitude,
          isHealthy: values.isHealthy === 'si',
          tideStatus: values.tideStatus,
          hasLifeguards: values.hasLifeguards === 'si',
          lifeguardSchedule: values.lifeguardSchedule,
          hasRestrooms: values.hasBathrooms === 'si',
          restroomSchedule: values.bathroomSchedule,
          hasShowers: values.hasShowers === 'si',
          showerSchedule: values.showerSchedule,
          restrictions: getNonEmptyRestrictions(values.restrictions),
          file: values.image,
        },
        token,
      );

      if (beachCreated) {
        notifications.show({
          title: 'Éxito!',
          message: 'Playa creada correctamente.',
          color: 'cyan',
          icon: <IconCheck size={20} />,
        });
        Navigate('/mi-cuenta/playas');
      } else {
        notifications.show({
          title: 'Error!',
          message: 'Hubo un error al crear la playa, intenta nuevamente.',
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

  return (
    <>
      <Stepper active={active}>
        <Stepper.Step label="Información basica">
          <BasicForm form={form} />
        </Stepper.Step>
        <Stepper.Step label="Servicios">
          <ServicesForm form={form} />
        </Stepper.Step>
        <Stepper.Step label="Restricciones">
          <RestrictionsForm form={form} />
        </Stepper.Step>
        <Stepper.Completed>
          Se completaron los datos correctamente, haga click en Publicar Playa
          para finalizar.
        </Stepper.Completed>
      </Stepper>

      <Group justify="flex-end" mt="xl">
        {active !== 0 && (
          <Button variant="default" onClick={prevStep}>
            Atrás
          </Button>
        )}
        {active !== 3 && <Button onClick={nextStep}>Siguiente</Button>}
        {active === 3 && (
          <Button onClick={handleSubmit} loading={loading}>
            Publicar Playa
          </Button>
        )}
      </Group>
    </>
  );
}

export default BeachForm;
