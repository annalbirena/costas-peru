/* eslint-disable react/jsx-props-no-spreading */
import { Group, Radio, Select, Stack, TextInput } from '@mantine/core';
import PropTypes from 'prop-types';

function ServicesForm({ form }) {
  return (
    <Stack>
      <Radio.Group
        label="¿Es una playa saludable?"
        withAsterisk
        key={form.key('isHealthy')}
        {...form.getInputProps('isHealthy')}
      >
        <Group mt="xs">
          <Radio value="si" label="Si" />
          <Radio value="no" label="No" />
        </Group>
      </Radio.Group>

      <Select
        withAsterisk
        allowDeselect={false}
        label="Estado de marea"
        placeholder="Seleccione estado"
        data={[
          { value: 'red', label: 'Rojo - Marea Alta' },
          { value: 'yellow', label: 'Amarillo - Marea Media' },
          { value: 'green', label: 'Verde - Marea Baja' },
        ]}
        key={form.key('tideStatus')}
        {...form.getInputProps('tideStatus')}
      />

      <Group>
        <Radio.Group
          label="¿Tiene salvavidas?"
          withAsterisk
          key={form.key('hasLifeguards')}
          {...form.getInputProps('hasLifeguards')}
        >
          <Group mt="xs">
            <Radio value="si" label="Si" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>

        <TextInput
          flex={1}
          label="Horario de Salvavidas"
          placeholder="De 9am a 5pm"
          key={form.key('lifeguardSchedule')}
          {...form.getInputProps('lifeguardSchedule')}
        />
      </Group>

      <Group>
        <Radio.Group
          label="¿Tiene baños?"
          key={form.key('hasBathrooms')}
          {...form.getInputProps('hasBathrooms')}
        >
          <Group mt="xs">
            <Radio value="si" label="Si" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>

        <TextInput
          flex={1}
          label="Horario de Baños"
          placeholder="De 9am a 5pm"
          key={form.key('bathroomSchedule')}
          {...form.getInputProps('bathroomSchedule')}
        />
      </Group>

      <Group>
        <Radio.Group
          label="¿Tiene duchas?"
          key={form.key('hasShowers')}
          {...form.getInputProps('hasShowers')}
        >
          <Group mt="xs">
            <Radio value="si" label="Si" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>

        <TextInput
          flex={1}
          label="Horario de Baños"
          placeholder="De 9am a 5pm"
          key={form.key('showerSchedule')}
          {...form.getInputProps('showerSchedule')}
        />
      </Group>
    </Stack>
  );
}

ServicesForm.propTypes = {
  form: PropTypes.shape({
    getInputProps: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    key: PropTypes.func.isRequired,
  }).isRequired,
};

export default ServicesForm;
