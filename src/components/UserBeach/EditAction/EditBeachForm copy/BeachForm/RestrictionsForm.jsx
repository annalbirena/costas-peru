/* eslint-disable react/jsx-props-no-spreading */
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import PropTypes from 'prop-types';

function RestrictionsForm({ form }) {
  const fields = form.getValues().restrictions.map((item, index) => (
    <Group key={item.key}>
      <TextInput
        placeholder="Acampar"
        key={form.key(`restrictions.${index}.name`)}
        {...form.getInputProps(`restrictions.${index}.name`)}
      />
      <TextInput
        flex={1}
        placeholder="Prohibido acampar"
        key={form.key(`restrictions.${index}.description`)}
        {...form.getInputProps(`restrictions.${index}.description`)}
      />
    </Group>
  ));
  return (
    <Stack>
      {fields}

      <Group justify="center" mt="md">
        <Button
          onClick={() =>
            form.insertListItem('restrictions', {
              name: '',
              description: '',
              key: randomId(),
            })
          }
        >
          Agregar restricción
        </Button>
      </Group>
    </Stack>
  );
}

RestrictionsForm.propTypes = {
  form: PropTypes.shape({
    getInputProps: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    key: PropTypes.func.isRequired,
    insertListItem: PropTypes.func.isRequired,
    getValues: PropTypes.func.isRequired,
  }).isRequired,
};

export default RestrictionsForm;
