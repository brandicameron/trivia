import { useState } from 'react';
import StartPage from './components/StartPage/StartPage';

function App() {
  const [startGame, setStartGame] = useState(false);

  const handleStartGame = () => {
    setStartGame(true);
  };

  return (
    <main className='container'>
      {!startGame && <StartPage handleStartGame={handleStartGame} />}
    </main>
  );
}

export default App;
