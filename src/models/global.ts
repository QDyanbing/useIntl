import { useIntl } from 'umi';

const useUser = () => {
  const { formatMessage } = useIntl();
  return {
    name: formatMessage({ id: 'd1', defaultMessage: 'Hello Word' }),
  };
};

export default useUser;
