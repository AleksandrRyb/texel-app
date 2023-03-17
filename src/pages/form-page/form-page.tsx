import React from 'react';
import { Title, Container, Text, Flex, Button, Loader, Notification } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { IconArrowRight, IconCheck } from '@tabler/icons-react';
import { schemeApi } from '../../services/scheme.api';

import DinamicInput from '../../components/dinamic-input/index';

const FormPage: React.FC = () => {
  const { data: config, isLoading } = schemeApi.useGetConfigQuery({});
  const [sendForm, { data: formResponse, isLoading: isMutationLoading }] =
    schemeApi.useSendFormMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    sendForm(data);
  };

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Title mb="10px" order={1}>
            {config?.name}
          </Title>

          <Title mb="15px" order={3}>
            {config?.title}
          </Title>

          <Text mb="30px" fz="md">
            {config?.description}
          </Text>

          <Flex direction="column" align="center" justify="center">
            <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
              {config?.parameters.input.map((input: any) => (
                <DinamicInput
                  error={errors[input.name]}
                  key={input.title}
                  input={input}
                  control={control}
                />
              ))}

              <Button
                loading={isMutationLoading}
                disabled={isMutationLoading}
                type="submit"
                rightIcon={<IconArrowRight size="20px" />}
                mb="20px"
              >
                Запустить
              </Button>
            </form>
          </Flex>
        </>
      )}
      {formResponse && (
        <Notification
          icon={<IconCheck size="1.1rem" />}
          color="teal"
          title="Teal notification"
          withCloseButton={false}
        >
          {formResponse.message}
        </Notification>
      )}
    </Container>
  );
};

export default FormPage;
