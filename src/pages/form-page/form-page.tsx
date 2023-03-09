import { FC } from 'react';
import { schemeApi } from '@services/scheme.api';

const FormPage: FC = () => {
  const { data: config, error, isLoading } = schemeApi.useGetConfigQuery({});

  return <div style={{ color: 'red' }}>{JSON.stringify(config)}</div>;
};

export default FormPage;
