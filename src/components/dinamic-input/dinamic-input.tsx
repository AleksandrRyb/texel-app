import React from 'react';
import { Controller } from 'react-hook-form';
import { Alert, NumberInput, Select, Stack } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import styled from '@emotion/styled';
import { InputTypes } from '@constants/input-constants';
import { InputItem, InputParametr } from '@models/scheme.model';

interface IDinamicInput {
  input: InputParametr;
  error: any;
  control: any;
}

const DinamicInput: React.FC<IDinamicInput> = ({ input, control, error }) => {
  return (
    <Stack mb="30px">
      {input.type === InputTypes.Number ? (
        <Controller
          name={input.name}
          rules={{
            required: 'Поле не может быть пустым',
          }}
          control={control}
          render={({ field: { onChange, value } }) => (
            <CustomNumberInput
              min={0}
              value={value}
              onChange={onChange}
              name={input.name}
              label={input.title}
              placeholder={input.title}
            />
          )}
        />
      ) : (
        <Controller
          name={input.name}
          control={control}
          rules={{
            required: 'Поле не может быть пустым',
          }}
          render={({ field: { onChange, value } }) => (
            <Select
              onChange={onChange}
              value={value}
              name={input.name}
              label={input.title}
              placeholder={input.title}
              data={input?.items as InputItem[]}
            />
          )}
        />
      )}
      {error && (
        <Alert icon={<IconAlertCircle size="1rem" />} title="Input error" color="red">
          {error.message}
        </Alert>
      )}
    </Stack>
  );
};

const CustomNumberInput = styled(NumberInput)`
  & .mantine-NumberInput-control {
    border-radius: 0px;
  }
`;

export default DinamicInput;
