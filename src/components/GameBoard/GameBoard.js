import { useContext, useState, useEffect } from 'react';
import { Context } from '../../Context';
import { decode } from 'he';
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
      const shuffledAnswers = allAnswers.sort((a, b) => 0.5 - Math.random());

      setShuffledAnswers(shuffledAnswers);
      setCorrectAnswer(correct);
    }
  }, [counter, data]);

  return (
    <>
      <header>
        <label htmlFor='progressBar'>
          Question {counter + 1} of {data.length}
        </label>
        <progress id='progressBar' max={data.length} value={counter + 1}></progress>
      </header>
      <h1 className={styles.question}>{decode(data[counter].question)}</h1>
      <ul className={styles.choices}>
        {shuffledAnswers.map((answer) => (
          <li key={answer}>
            <ChoiceButton label={decode(answer)} />
          </li>
        ))}
      </ul>
      <ActionButton label='next' clickHandler={handleNextQuestion} />
    </>
  );
}
