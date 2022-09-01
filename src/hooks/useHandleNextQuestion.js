import { useContext } from 'react';
import { Context } from '../Context';

export function useHandleNextQuestion() {
  const { data, counter, setCounter, userAnswer, setUserAnswer, setGameOver } = useContext(Context);

  const handleNextQuestion = () => {
    const numberOfQuestions = data.length;

    if (counter + 1 < numberOfQuestions) {
      if (userAnswer) {
        setCounter((prev) => prev + 1);
        setUserAnswer('');
      }
    } else if (counter + 1 >= numberOfQuestions) {
      setGameOver(true);
    }
  };

  return { handleNextQuestion };
}
