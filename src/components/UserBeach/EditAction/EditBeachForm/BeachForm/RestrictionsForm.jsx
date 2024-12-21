/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import { ActionIcon, Button, Group, Stack, TextInput } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import PropTypes from 'prop-types';

function RestrictionsForm({ form }) {
  const fields = form.getValues().restrictions.map((item, index) => (
    <Group key={index}>
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
      <ActionIcon
        size="lg"
        onClick={() => form.removeListItem('restrictions', index)}
      >
        <IconX size={20} stroke={1.5} />
      </ActionIcon>
    </Group>
  ));

  return (
    <Stack>
      {fields}

      <Group justify="center" mt="md">
        <Button
          variant="outline"
          onClick={() =>
            form.insertListItem('restrictions', {
              name: '',
              description: '',
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
    key: PropTypes.func.isRequired,
    insertListItem: PropTypes.func.isRequired,
    removeListItem: PropTypes.func.isRequired,
    getValues: PropTypes.func.isRequired,
  }).isRequired,
};

export default RestrictionsForm;
