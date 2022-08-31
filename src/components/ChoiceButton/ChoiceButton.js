import styles from './ChoiceButton.module.css';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';

export default function ChoiceButton({ label, clickHandler }) {
  const { difficulty } = useContext(Context);
  const [buttonColor, setButtonColor] = useState('var(--white)');

  useEffect(() => {
    if (difficulty === label) {
      setButtonColor('var(--primary)');
    } else setButtonColor('var(--white)');
  }, [difficulty]);

  return (
    <button
      className={styles.choiceButton}
      onClick={clickHandler}
      style={{ backgroundColor: buttonColor }}
    >
      {label}
    </button>
  );
}
