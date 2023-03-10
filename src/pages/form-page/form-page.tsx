import React from 'react';
import styled from '@emotion/styled';
import { Title, Container, Text, Flex } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { schemeApi } from '@services/scheme.api';

import DinamicInput from '@components/dinamic-input';

const FormPage: React.FC = () => {
  const { data: config, error, isLoading } = schemeApi.useGetConfigQuery({});

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      <Title mb="10px" order={1}>
        {config?.name}
      </Title>
      <Title mb="15px" order={3}>
        {config?.title}
      </Title>
      <Text mb="30px" fz="md">
        {config?.description}
      </Text>

      <CustomFlex align="center" justify="center">
        <form style={{ width: '60%' }}>
          {config?.parameters.input.map((input) => (
            <DinamicInput key={input.title} input={input} />
          ))}
        </form>
      </CustomFlex>
    </Container>
  );
};

const CustomFlex = styled(Flex)`
  height: 300px;
  border: 1px solid white;
  border-radius: 1%;
`;

export default FormPage;
