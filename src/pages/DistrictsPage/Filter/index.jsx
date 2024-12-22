/* eslint-disable react/jsx-props-no-spreading */
import { Button, Group, Select, Stack, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
  IconFilter,
  IconFilterOff,
  IconMapPin,
  IconX,
} from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import departmentData from '../../../data/department';
import provincesData from '../../../data/provinces';
import buildFilterURL from '../utils';
import {
  getMunicipalities,
  getMunicipalitiesByFilters,
} from '../../../services/municipality';

function Filter({
  setMunicipalitiesData,
  loadingFilter,
  setLoadingFilter,
  loadingClearFilter,
  setLoadingClearFilter,
}) {
  const [department, setDepartment] = useState('');
  const [province, setProvince] = useState('');

  const handleSubmit = async () => {
    setLoadingFilter(true);
    const depValue = department ? department.value : null;
    const proValue = province ? province.value : null;
    const filters = buildFilterURL({
      department: depValue,
      province: proValue,
    });
    try {
      const data = await getMunicipalitiesByFilters(filters);

      if (data) {
        setLoadingFilter(false);
        setMunicipalitiesData(data);
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
    setDepartment('');
    setProvince('');

    // Mostrar todas las municipalidades al borrar los filtros
    const fetchAllMunis = async () => {
      setLoadingClearFilter(true);
      try {
        const data = await getMunicipalities();
        setMunicipalitiesData(data);
      } catch (error) {
        console.log(error);
        notifications.show({
          title: 'Error!',
          message:
            'No se pudo obtener las municipalidades, intenta nuevamente.',
          icon: <IconX size={20} />,
        });
      } finally {
        setLoadingClearFilter(false);
      }
    };

    fetchAllMunis();
  };

  return (
    <Group mt="xl" align="flex-end">
      <Stack gap={4}>
        <Text c="white">Departamento</Text>
        <Select
          searchable
          placeholder="Departamento"
          data={departmentData}
          rightSectionPointerEvents="none"
          rightSection={<IconMapPin size={18} stroke={1.5} />}
          value={department ? department.value : null}
          onChange={(_value, option) => setDepartment(option)}
        />
      </Stack>
      <Stack gap={4}>
        <Text c="white">Provincia</Text>
        <Select
          searchable
          placeholder="Provincia"
          data={provincesData}
          rightSectionPointerEvents="none"
          rightSection={<IconMapPin size={18} stroke={1.5} />}
          value={province ? province.value : null}
          onChange={(_value, option) => setProvince(option)}
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
  setMunicipalitiesData: PropTypes.func.isRequired,
  loadingFilter: PropTypes.bool.isRequired,
  setLoadingFilter: PropTypes.func.isRequired,
  loadingClearFilter: PropTypes.bool.isRequired,
  setLoadingClearFilter: PropTypes.func.isRequired,
};

export default Filter;
