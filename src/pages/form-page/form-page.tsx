import { FC } from 'react';
import { Title, Container, Text, Flex } from '@mantine/core';
import { schemeApi } from '@services/scheme.api';

const FormPage: FC = () => {
  const { data: config, error, isLoading } = schemeApi.useGetConfigQuery({});

  return (
    <Container>
      <Flex>
        <Title mb={10} order={1}>
          {config?.name}
        </Title>
        <Title mb={15} order={3}>
          {config?.title}
        </Title>
        <Text fz="md">{config?.description}</Text>
      </Flex>
    </Container>
  );
};

export default FormPage;
