import { useContext, useEffect } from 'react';
import { Context } from '../../Context';
import { decode } from 'he';
import ActionButton from '../ActionButton/ActionButton';
import ChoiceButton from '../ChoiceButton/ChoiceButton';
import styles from './GameBoard.module.css';

export default function GameBoard() {
  const { data, counter, setCounter } = useContext(Context);

  const handleNextQuestion = () => {
    setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

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
        <li>
          <ChoiceButton label='Choice 1' />
        </li>
      </ul>
      <ActionButton label='next' clickHandler={handleNextQuestion} />
    </>
  );
}
