import { Button, Stack, Text } from '@mantine/core';

export const Welcome: React.FC = () => {
  return (
    <Stack align="center" mt={50}>
      <Text size="xl" weight={500}>
        Welcome to Mantine!
      </Text>
      <Button>Click the button</Button>
    </Stack>
  );
};

export default Welcome;
