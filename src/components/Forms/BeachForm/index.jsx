import { Button, Group, Stepper } from '@mantine/core';
import { useState } from 'react';
import BasicForm from './BasicForm';

function BeachForm() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="Información basica">
          <BasicForm />
        </Stepper.Step>
        <Stepper.Step label="Servicios">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Restricciones">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}

export default BeachForm;
