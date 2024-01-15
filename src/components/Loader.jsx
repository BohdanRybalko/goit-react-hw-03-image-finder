import {Oval}from 'react-loader-spinner';
import styles from '../styles.css';

const Loader = () => (
  <div className={styles.Loader}>
    <Oval  color="#00BFFF" height={80} width={80} />
  </div>
);

export default Loader;