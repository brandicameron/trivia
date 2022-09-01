import { useState, useEffect, useContext } from 'react';
import { Context } from '../Context';
import { decode } from 'he';

export function useDisplayAnswers() {
  const { data, counter } = useContext(Context);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');

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

  return { shuffledAnswers, correctAnswer };
}
