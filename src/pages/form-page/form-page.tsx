import { FC } from 'react';
import { Title, Container, Text, Box, NumberInput, Select } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { schemeApi } from '@services/scheme.api';
import { InputTypes } from '@constants/input-constants';
import { InputItem, InputParametr } from '@models/scheme.model';

const FormPage: FC = () => {
  const { data: config, error, isLoading } = schemeApi.useGetConfigQuery({});

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const returnSpecificFieldsByInputType = (input: InputParametr) => {
    if (input.type === InputTypes.Number) {
      return <NumberInput label={input.title} placeholder={input.title} />;
    }

    return (
      <Select label={input.title} placeholder={input.title} data={input?.items as InputItem[]} />
    );
  };
  console.log(config);
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
        <form>
          {config?.parameters.input.map((input) => {
            return returnSpecificFieldsByInputType(input);
          })}
        </form>
      </Box>
    </Container>
  );
};

export default FormPage;
