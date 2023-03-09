import { InputTypes } from '@constants/input-constants';
import { NumberInput, Select } from '@mantine/core';
import { InputItem, InputParametr } from '@models/scheme.model';
import React from 'react';

const DinamicInput: React.FC<{ input: InputParametr }> = ({ input }) => {
  return (
    <>
      {input.type === InputTypes.Number ? (
        <NumberInput label={input.title} placeholder={input.title} />
      ) : (
        <Select label={input.title} placeholder={input.title} data={input?.items as InputItem[]} />
      )}
    </>
  );
};

export default DinamicInput;
