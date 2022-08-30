import { createContext, useState } from 'react';

export const Context = createContext();

export function AppContextWrapper({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [difficulty, setDifficulty] = useState('');
  const [startGame, setStartGame] = useState(false);

  const handleStartGame = async () => {
    try {
      setLoading(true);
      const url = `https://opentdb.com/api.php?amount=20&category=9&difficulty=${difficulty}&type=multiple`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      setStartGame(true);
    }
  };

  return (
    <Context.Provider
      value={{ data, loading, error, startGame, difficulty, setDifficulty, handleStartGame }}
    >
      {children}
    </Context.Provider>
  );
}
