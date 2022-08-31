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
  const [numCorrect, setNumCorrect] = useState(0);
  const [numIncorrect, setNumIncorrect] = useState(0);
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
    if (userAnswer) {
      setCounter((prev) => prev + 1);
      setUserAnswer('');
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

  console.log(`Correct: ${numCorrect}  Incorrect: ${numIncorrect}`);

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
        style={{ fontSize: data[counter].question.length > 75 ? '3vh' : '3.5vh' }}
      >
        {decode(data[counter].question)}
      </h1>
      <ul className={styles.choices}>
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
      <ActionButton label='next' clickHandler={handleNextQuestion} />
    </>
  );
}
