import { createContext, useState } from 'react';

export const Context = createContext();

export function AppContextWrapper({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [startGame, setStartGame] = useState(false);
  const [difficulty, setDifficulty] = useState('');
  const [counter, setCounter] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [numCorrect, setNumCorrect] = useState(0);
  const [numIncorrect, setNumIncorrect] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleStartGame = async () => {
    try {
      setLoading(true);
      const url = `https://opentdb.com/api.php?amount=3&category=9&difficulty=${difficulty}&type=multiple`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      setStartGame(true);
    }
  };

  const handlePlayAgain = () => {
    setData([]);
    setStartGame(false);
    setDifficulty('');
    setCounter(0);
    setUserAnswer('');
    setNumCorrect(0);
    setNumIncorrect(0);
    setGameOver(false);
  };

  return (
    <Context.Provider
      value={{
        data,
        loading,
        error,
        startGame,
        difficulty,
        setDifficulty,
        counter,
        setCounter,
        userAnswer,
        setUserAnswer,
        numCorrect,
        setNumCorrect,
        numIncorrect,
        setNumIncorrect,
        gameOver,
        setGameOver,
        handleStartGame,
        handlePlayAgain,
      }}
    >
      {children}
    </Context.Provider>
  );
}
