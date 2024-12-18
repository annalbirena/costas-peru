import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import EditBeachModal from './EditBeachForm';

function EditBeachAction() {
  const [isOpen, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button onClick={open} w="100%" color="cyan" mt="xs">
        Editar Playa
      </Button>
      <EditBeachModal isOpen={isOpen} close={close} onClose={close} />
    </>
  );
}

export default EditBeachAction;