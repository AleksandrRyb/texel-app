import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { getConfigAction } from '@store/scheme/scheme.actions-creators';
import { schemeApi } from '@services/scheme.api';

const FormPage: FC = () => {
  const { data: config, error, isLoading } = schemeApi.useGetConfigQuery({});

  console.log(isLoading);

  return <div style={{ color: 'red' }}>{JSON.stringify(config)}</div>;
};

export default FormPage;
