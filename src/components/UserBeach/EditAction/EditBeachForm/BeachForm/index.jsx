import { Button, Group, Stepper } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import BasicForm from './BasicForm';
import ServicesForm from './ServicesForm';
import RestrictionsForm from './RestrictionsForm';
import { getBeachesByMuni, updateBeach } from '../../../../../services/beach';
import { useMunicipalityContext } from '../../../../../context/MunicipalityContext';
import {
  filterFields,
  getNonEmptyRestrictions,
} from '../../../../Forms/BeachForm/utils';

function BeachForm({ data, setBeachesData, close }) {
  const beachLocation = {
    latitude: data.latitude,
    longitude: data.longitude,
  };

  const [active, setActive] = useState(0);
  const [imageFile, setImageFile] = useState(null);
  const [location, setLocation] = useState(beachLocation);
  const [loading, setLoading] = useState(false);
  const { municipalityId, token } = useMunicipalityContext();

  const form = useForm({
    initialValues: {
      name: data.name,
      description: data.description,
      location: beachLocation,
      image: data.image,
      isHealthy: data.isHealthy ? 'si' : 'no',
      tideStatus: data.tideStatus, // Estado de marea
      hasLifeguards: data.hasLifeguards ? 'si' : 'no',
      lifeguardSchedule: data.lifeguardSchedule,
      hasBathrooms: data.hasRestrooms ? 'si' : 'no',
      bathroomSchedule: data.restroomSchedule,
      hasShowers: data.hasShowers ? 'si' : 'no',
      showerSchedule: data.showerSchedule,
      restrictions: data.restrictions,
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
    console.log({
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
      restrictions: filterFields(getNonEmptyRestrictions(values.restrictions)),
      file: imageFile || values.image,
    });
    try {
      const beachUpdated = await updateBeach(
        data.id,
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
          restrictions: filterFields(
            getNonEmptyRestrictions(values.restrictions),
          ),
          file: imageFile || values.image,
        },
        token,
      );

      if (beachUpdated) {
        notifications.show({
          title: 'Éxito!',
          message: 'Playa actualizada correctamente.',
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
        message: 'Hubo un error al actualizar la playa, intenta nuevamente.',
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
          <BasicForm
            data={data}
            form={form}
            setImageFile={setImageFile}
            location={location}
            setLocation={setLocation}
          />
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
            Actualizar datos
          </Button>
        )}
      </Group>
    </>
  );
}

BeachForm.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    hasLifeguards: PropTypes.bool.isRequired,
    hasRestrooms: PropTypes.bool.isRequired,
    hasShowers: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    isHealthy: PropTypes.bool.isRequired,
    latitude: PropTypes.number.isRequired,
    lifeguardSchedule: PropTypes.string.isRequired,
    longitude: PropTypes.number.isRequired,
    municipalityId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    restrictions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ),
    restroomSchedule: PropTypes.string.isRequired,
    showerSchedule: PropTypes.string.isRequired,
    tideStatus: PropTypes.string.isRequired,
  }).isRequired,
  setBeachesData: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default BeachForm;
