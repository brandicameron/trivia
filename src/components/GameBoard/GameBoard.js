import styles from './GameBoard.module.css';
import { useContext } from 'react';
import { Context } from '../../Context';
import { useDisplayAnswers } from '../../hooks/useDisplayAnswers';
import { useHandleNextQuestion } from '../../hooks/useHandleNextQuestion';
import { decode } from 'he';
import { v4 as uuidv4 } from 'uuid';
import ActionButton from '../ActionButton/ActionButton';
import ProgressBar from '../ProgressBar/ProgressBar';
import GameOverModal from '../GameOverModal/GameOverModal';
import AnswerButton from '../SelectButtons/AnswerButton';

export default function GameBoard() {
  const { shuffledAnswers } = useDisplayAnswers();
  const { handleNextQuestion } = useHandleNextQuestion();
  const { data, counter, gameOver } = useContext(Context);
  let numOfLettersInQuestion = data[counter].question.length;

  return (
    <>
      {!gameOver && <ProgressBar />}
      <section className={styles.container}>
        <h1
          className={styles.question}
          style={{ fontSize: numOfLettersInQuestion > 70 ? '1.5rem' : '1.75rem' }}
        >
          {decode(data[counter].question)}
        </h1>
        <ul role='list' className={styles.answers}>
          {shuffledAnswers.map((answer) => (
            <li key={uuidv4()}>
              <AnswerButton label={answer} />
            </li>
          ))}
        </ul>
      </section>
      {!gameOver && <ActionButton label='next' clickHandler={handleNextQuestion} />}

      {gameOver && <GameOverModal />}
    </>
  );
}
