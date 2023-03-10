import { InputTypes } from '@constants/input-constants';
import styled from '@emotion/styled';
import { NumberInput, Select } from '@mantine/core';
import { InputItem, InputParametr } from '@models/scheme.model';
import React from 'react';

const DinamicInput: React.FC<{ input: InputParametr }> = ({ input }) => {
  return (
    <>
      {input.type === InputTypes.Number ? (
        <CustomNumberInput min={0} mb="15px" label={input.title} placeholder={input.title} />
      ) : (
        <Select
          mb="15px"
          label={input.title}
          placeholder={input.title}
          data={input?.items as InputItem[]}
        />
      )}
    </>
  );
};

const CustomNumberInput = styled(NumberInput)`
  & .mantine-NumberInput-control {
    border-radius: 0px;
  }
`;

export default DinamicInput;
