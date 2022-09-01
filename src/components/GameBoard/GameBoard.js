import styles from './GameBoard.module.css';
import { useContext, useState, useEffect } from 'react';
import { Context } from '../../Context';
import { decode } from 'he';
import { v4 as uuidv4 } from 'uuid';
import ActionButton from '../ActionButton/ActionButton';
import ChoiceButton from '../ChoiceButton/ChoiceButton';
import ProgressBar from '../ProgressBar/ProgressBar';

export default function GameBoard() {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [numCorrect, setNumCorrect] = useState(0);
  const [numIncorrect, setNumIncorrect] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const { data, counter, setCounter, userAnswer, setUserAnswer } = useContext(Context);

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
    console.log(data.length);
    console.log(`Counter: ${counter}`);

    if (counter + 1 < data.length) {
      if (userAnswer) {
        setCounter((prev) => prev + 1);
        setUserAnswer('');
      }
    } else if (counter + 1 >= data.length) {
      setGameOver(true);
    }
  };

  useEffect(() => {
    if (data) {
      const incorrect = data[counter].incorrect_answers;
      const correct = data[counter].correct_answer;
      const allAnswers = [...incorrect, correct];
      const shuffledAnswers = allAnswers.sort(() => 0.5 - Math.random()).map((ans) => decode(ans));

      setShuffledAnswers(shuffledAnswers);
      setCorrectAnswer(decode(correct));
    }
  }, [counter, data]);

  return (
    <>
      <ProgressBar />
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
      <ActionButton label='next' clickHandler={handleNextQuestion} />

      {gameOver && (
        <section className={styles.gameOver}>
          <h1>Game Over!</h1>
          <div className={styles.scores}>
            <div className={styles.score}>
              <p>Correct</p>
              <h2>{numCorrect}</h2>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.score}>
              <p>Incorrect</p>
              <h2>{numIncorrect}</h2>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
