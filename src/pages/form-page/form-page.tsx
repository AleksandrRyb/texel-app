import { FC } from 'react';
import { Title, Container, Text, Box } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { schemeApi } from '@services/scheme.api';

const FormPage: FC = () => {
  const { data: config, error, isLoading } = schemeApi.useGetConfigQuery({});

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      <Title mb={10} order={1}>
        {config?.name}
      </Title>
      <Title mb={15} order={3}>
        {config?.title}
      </Title>
      <Text fz="md">{config?.description}</Text>

      <Box>
        <form></form>
      </Box>
    </Container>
  );
};

export default FormPage;
