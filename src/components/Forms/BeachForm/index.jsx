import { Button, Group, Stepper } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import BasicForm from './BasicForm';
import ServicesForm from './ServicesForm';
import RestrictionsForm from './RestrictionsForm';

function BeachForm() {
  const [active, setActive] = useState(0);

  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      location: null,
      image: null,
      isHealthy: null,
      tideStatus: '', // Estado de marea
      hasLifeguards: null,
      lifeguardSchedule: '',
      hasBathrooms: null,
      bathroomSchedule: '',
      hasShowers: null,
      showerSchedule: '',
      restrictions: [],
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

  const handleSubmit = () => {
    console.log(form.values);
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
        {active === 3 && <Button onClick={handleSubmit}>Publicar Playa</Button>}
      </Group>
    </>
  );
}

export default BeachForm;
