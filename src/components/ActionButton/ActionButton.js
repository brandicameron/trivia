import styles from './ActionButton.module.css';
import { useContext } from 'react';
import { Context } from '../../Context';

export default function ActionButton({ label, clickHandler }) {
  const { difficulty, loading } = useContext(Context);

  return (
    <button
      disabled={difficulty === '' ? true : false}
      className={styles.actionButton}
      onClick={clickHandler}
    >
      {loading ? 'loading...' : label}
    </button>
  );
}
