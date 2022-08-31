import styles from './ActionButton.module.css';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';

export default function ActionButton({ label, clickHandler }) {
  const { difficulty, loading, userAnswer } = useContext(Context);
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (label === 'play') {
      if (difficulty) {
        setDisableButton(false);
      }
    }
  }, [difficulty]);

  useEffect(() => {
    if (label === 'next') {
      if (userAnswer) {
        setDisableButton(false);
      } else {
        setDisableButton(true);
      }
    }
  }, [userAnswer]);

  return (
    <button disabled={disableButton} className={styles.actionButton} onClick={clickHandler}>
      {loading ? 'loading...' : label}
    </button>
  );
}
