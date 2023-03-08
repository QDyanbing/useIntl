import { useModel } from '@umijs/max';
import Styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return <div className={Styles.container}>{name}</div>;
};

export default HomePage;
