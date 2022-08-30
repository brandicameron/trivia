import { useState, useEffect } from 'react';
import StartPage from './components/StartPage/StartPage';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [difficulty, setDifficulty] = useState('easy');
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

  useEffect(() => {
    if (data.results) {
      console.log(data.results);
    }
  }, [data.results]);

  return (
    <main className='container'>
      {!startGame && <StartPage setDifficulty={setDifficulty} handleStartGame={handleStartGame} />}
    </main>
  );
}

export default App;
