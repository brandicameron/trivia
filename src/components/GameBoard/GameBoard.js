import { useContext, useState, useEffect } from 'react';
import { Context } from '../../Context';
import { decode } from 'he';
import { v4 as uuidv4 } from 'uuid';
import ActionButton from '../ActionButton/ActionButton';
import ChoiceButton from '../ChoiceButton/ChoiceButton';
import styles from './GameBoard.module.css';

export default function GameBoard() {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const { data, counter, setCounter } = useContext(Context);

  const handleNextQuestion = () => {
    setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    if (data) {
      const incorrect = data[counter].incorrect_answers;
      const correct = data[counter].correct_answer;
      const allAnswers = [...incorrect, correct];
      const shuffledAnswers = allAnswers.sort(() => 0.5 - Math.random());

      setShuffledAnswers(shuffledAnswers);
      setCorrectAnswer(correct);
    }
  }, [counter, data]);

  return (
    <>
      <header className={styles.header}>
        <label htmlFor='progressBar'>
          Question {counter + 1} of {data.length}
        </label>
        <progress id='progressBar' max={data.length} value={counter + 1}></progress>
        <p>Level: {data[counter].difficulty}</p>
      </header>
      <h1
        className={styles.question}
        style={{ fontSize: data[counter].question.length > 80 ? '3vh' : '4vh' }}
      >
        {decode(data[counter].question)}
      </h1>
      <ul className={styles.choices}>
        {shuffledAnswers.map((answer) => (
          <li key={uuidv4()}>
            <ChoiceButton label={decode(answer)} />
          </li>
        ))}
      </ul>
      <ActionButton label='next' clickHandler={handleNextQuestion} />
    </>
  );
}
