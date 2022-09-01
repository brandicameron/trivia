import styles from './SelectButtons.module.css';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';
import { useDisplayAnswers } from '../../hooks/useDisplayAnswers';

export default function AnswerButton({ label }) {
  const { userAnswer, setUserAnswer, setNumCorrect, setNumIncorrect } = useContext(Context);
  const { correctAnswer } = useDisplayAnswers();
  const [buttonColor, setButtonColor] = useState('var(--white)');
  const [buttonOutlineColor, setButtonOutlineColor] = useState('none');

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
  }, [userAnswer, label, correctAnswer]);

  const handleSetAnswer = (e) => {
    const answer = e.target.textContent;
    setUserAnswer(answer);

    if (answer === correctAnswer) {
      setNumCorrect((prev) => prev + 1);
    } else {
      setNumIncorrect((prev) => prev + 1);
    }
  };

  return (
    <button
      disabled={userAnswer ? true : false}
      className={styles.choiceButton}
      onClick={handleSetAnswer}
      style={{
        backgroundColor: buttonColor,
        border: `4px solid ${buttonOutlineColor}`,
        fontSize: label.length > 20 ? '1.25rem' : '1.5rem',
      }}
    >
      {label}
    </button>
  );
}
