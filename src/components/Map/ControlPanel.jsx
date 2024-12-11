/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-wrap-multilines */
import { IconDropletHeart, IconLifebuoy } from '@tabler/icons-react';
import { Checkbox, Group, Paper, Stack, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import classes from './map.module.css';

function ControlPanel(/* { onFilterChange } */) {
  const [value, setValue] = useState([]);

  const handleCheckboxChange = (newValue) => {
    setValue(newValue);
    /* onFilterChange(newValue); */
  };

  // AAl renderizarse marcar ambas opciones para mostrar todas las mascotas
  useEffect(() => {
    handleCheckboxChange(['lost', 'adoption']);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Paper className={classes.controlPanel} shadow="xs" p="lg" m="md">
      <Checkbox.Group value={value} onChange={handleCheckboxChange}>
        <Stack>
          <Checkbox
            value="lost"
            label={
              <Group gap="xs">
                <Text>Saludable</Text>
                <IconDropletHeart size={16} />
              </Group>
            }
          />
          <Checkbox
            value="adoption"
            label={
              <Group gap="xs">
                <Text>Con Salvavidas</Text>
                <IconLifebuoy size={16} />
              </Group>
            }
          />
        </Stack>
      </Checkbox.Group>
    </Paper>
  );
}

export default ControlPanel;
