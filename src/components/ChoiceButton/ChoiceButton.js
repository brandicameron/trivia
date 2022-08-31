import styles from './ChoiceButton.module.css';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';

export default function ChoiceButton({ label, clickHandler, userAnswer, correctAnswer }) {
  const { difficulty } = useContext(Context);
  const [buttonColor, setButtonColor] = useState('var(--white)');
  const [buttonOutlineColor, setButtonOutlineColor] = useState('none');

  useEffect(() => {
    if (difficulty === label) {
      setButtonColor('var(--primary)');
    } else setButtonColor('var(--white)');
  }, [difficulty]);

  useEffect(() => {
    if (userAnswer) {
      if (correctAnswer === label) {
        setButtonOutlineColor('var(--correct)');
      }

      if (userAnswer === correctAnswer && userAnswer === label) {
        setButtonColor('var(--correct)');
      } else if (userAnswer !== correctAnswer && userAnswer === label) {
        setButtonColor('var(--incorrect)');
      }
    }
  }, [userAnswer]);

  return (
    <button
      disabled={userAnswer ? true : false}
      className={styles.choiceButton}
      onClick={clickHandler}
      style={{ backgroundColor: buttonColor, border: `4px solid ${buttonOutlineColor}` }}
    >
      {label}
    </button>
  );
}
