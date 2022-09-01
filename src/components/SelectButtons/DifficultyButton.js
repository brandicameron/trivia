import styles from './SelectButtons.module.css';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';

export default function DifficultyButton({ label }) {
  const { difficulty } = useContext(Context);
  const { userAnswer, setDifficulty } = useContext(Context);
  const [buttonColor, setButtonColor] = useState('var(--white)');

  useEffect(() => {
    if (difficulty === label) {
      setButtonColor('var(--primary)');
    } else setButtonColor('var(--white)');
  }, [difficulty, label]);

  const handleSetDifficulty = (e) => {
    const choice = e.target.textContent;
    setDifficulty(choice);
  };

  return (
    <button
      disabled={userAnswer ? true : false}
      className={styles.choiceButton}
      onClick={handleSetDifficulty}
      style={{
        backgroundColor: buttonColor,
      }}
    >
      {label}
    </button>
  );
}
