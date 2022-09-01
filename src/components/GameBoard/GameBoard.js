import styles from './GameBoard.module.css';
import { useContext, useState } from 'react';
import { Context } from '../../Context';
import { useDisplayAnswers } from '../../hooks/useDisplayAnswers';
import { decode } from 'he';
import { v4 as uuidv4 } from 'uuid';
import ActionButton from '../ActionButton/ActionButton';
import ChoiceButton from '../ChoiceButton/ChoiceButton';
import ProgressBar from '../ProgressBar/ProgressBar';
import GameOverModal from '../GameOverModal/GameOverModal';

export default function GameBoard() {
  const { shuffledAnswers, correctAnswer } = useDisplayAnswers();
  const {
    data,
    counter,
    setCounter,
    userAnswer,
    setUserAnswer,
    setNumCorrect,
    setNumIncorrect,
    gameOver,
    setGameOver,
  } = useContext(Context);

  const handleSetAnswer = (e) => {
    const answer = e.target.textContent;
    setUserAnswer(answer);

    if (answer === correctAnswer) {
      setNumCorrect((prev) => prev + 1);
    } else {
      setNumIncorrect((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (counter + 1 < data.length) {
      if (userAnswer) {
        setCounter((prev) => prev + 1);
        setUserAnswer('');
      }
    } else if (counter + 1 >= data.length) {
      setGameOver(true);
    }
  };

  return (
    <>
      {!gameOver && <ProgressBar />}
      <section className={styles.container}>
        <h1
          className={styles.question}
          style={{ fontSize: data[counter].question.length > 70 ? '1.5rem' : '1.75rem' }}
        >
          {decode(data[counter].question)}
        </h1>
        <ul className={styles.answers}>
          {shuffledAnswers.map((answer) => (
            <li key={uuidv4()}>
              <ChoiceButton
                label={answer}
                clickHandler={handleSetAnswer}
                userAnswer={userAnswer}
                correctAnswer={correctAnswer}
              />
            </li>
          ))}
        </ul>
      </section>
      {!gameOver && <ActionButton label='next' clickHandler={handleNextQuestion} />}

      {gameOver && <GameOverModal />}
    </>
  );
}
