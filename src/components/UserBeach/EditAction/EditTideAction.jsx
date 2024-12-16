import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import EditTideForm from './EditTideForm';

function EditTideAction() {
  const [isOpen, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button onClick={open} w="100%" variant="light" color="cyan" mt="xs">
        Actualizar estado de Marea
      </Button>

      <EditTideForm isOpen={isOpen} close={close} onClose={close} />
    </>
  );
}

export default EditTideAction;
