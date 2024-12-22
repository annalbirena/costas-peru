/* eslint-disable react/jsx-props-no-spreading */
import { Button, Group, Select, Stack, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
  IconDropletHeart,
  IconFilter,
  IconFilterOff,
  IconLifebuoy,
  IconSwimming,
  IconX,
} from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import buildFilterURL from '../utils';
import { getBeaches, getBeachesByFilters } from '../../../services/beach';

function Filter({
  setBeachesData,
  loadingFilter,
  setLoadingFilter,
  loadingClearFilter,
  setLoadingClearFilter,
}) {
  const [isHealthy, setIsHealthy] = useState('');
  const [hasLifeguards, setHaslifeguards] = useState('');
  const [tideStatus, setTideStatus] = useState('');

  const handleSubmit = async () => {
    setLoadingFilter(true);
    const healthValue = isHealthy ? isHealthy.value : null;
    const lifeValue = hasLifeguards ? hasLifeguards.value : null;
    const tideValue = tideStatus ? tideStatus.value : null;
    const filters = buildFilterURL({
      isHealthy: healthValue,
      hasLifeguards: lifeValue,
      tideStatus: tideValue,
    });

    try {
      const data = await getBeachesByFilters(filters);

      if (data) {
        setLoadingFilter(false);
        setBeachesData(data);
      }

      setLoadingFilter(false);
    } catch (error) {
      setLoadingFilter(false);
      console.log(error);
      notifications.show({
        title: 'Error!',
        message: 'No se pudo aplicar el filtro, intenta nuevamente.',
        icon: <IconX size={20} />,
      });
    }
  };

  const handleResetFilters = () => {
    // Resetear valores
    setIsHealthy('');
    setHaslifeguards('');
    setTideStatus('');

    // Mostrar todas las playas al borrar los filtros
    const fetchAllBeaches = async () => {
      setLoadingClearFilter(true);

      try {
        const data = await getBeaches();
        setBeachesData(data);
      } catch (error) {
        console.log(error);
        notifications.show({
          title: 'Error!',
          message: 'No se pudo obtener las playas, intenta nuevamente.',
          icon: <IconX size={20} />,
        });
      } finally {
        setLoadingClearFilter(false);
      }
    };

    fetchAllBeaches();
  };

  return (
    <Group mt="xl" align="flex-end">
      <Stack gap={4}>
        <Text c="white">¿Es saludable?</Text>
        <Select
          placeholder="Elige una opción"
          data={[
            { value: 'si', label: 'Si' },
            { value: 'no', label: 'No' },
          ]}
          rightSectionPointerEvents="none"
          rightSection={<IconDropletHeart size={18} stroke={1.5} />}
          value={isHealthy ? isHealthy.value : null}
          onChange={(_value, option) => setIsHealthy(option)}
        />
      </Stack>
      <Stack gap={4}>
        <Text c="white">¿Tiene salvavidas?</Text>
        <Select
          placeholder="Elige una opción"
          data={[
            { value: 'si', label: 'Si' },
            { value: 'no', label: 'No' },
          ]}
          rightSectionPointerEvents="none"
          rightSection={<IconLifebuoy size={18} stroke={1.5} />}
          value={hasLifeguards ? hasLifeguards.value : null}
          onChange={(_value, option) => setHaslifeguards(option)}
        />
      </Stack>
      <Stack gap={4}>
        <Text c="white">Nivel de marea</Text>
        <Select
          placeholder="Elige una opción"
          data={[
            { value: 'red', label: 'Marea Alta - Bandera roja' },
            { value: 'yellow', label: 'Marea Media - Bandera amarila' },
            { value: 'green', label: 'Marea Baja - Bandera verde' },
          ]}
          rightSectionPointerEvents="none"
          rightSection={<IconSwimming size={18} stroke={1.5} />}
          value={tideStatus ? tideStatus.value : null}
          onChange={(_value, option) => setTideStatus(option)}
        />
      </Stack>

      <Button
        onClick={handleSubmit}
        loading={loadingFilter}
        rightSection={<IconFilter size={14} />}
      >
        Filtrar
      </Button>
      <Button
        color="dark"
        loading={loadingClearFilter}
        rightSection={<IconFilterOff size={14} />}
        onClick={handleResetFilters}
      >
        Limpiar
      </Button>
    </Group>
  );
}

Filter.propTypes = {
  setBeachesData: PropTypes.func.isRequired,
  loadingFilter: PropTypes.bool.isRequired,
  setLoadingFilter: PropTypes.func.isRequired,
  loadingClearFilter: PropTypes.bool.isRequired,
  setLoadingClearFilter: PropTypes.func.isRequired,
};

export default Filter;
