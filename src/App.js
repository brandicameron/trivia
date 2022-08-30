import { useState } from 'react';
import StartPage from './components/StartPage/StartPage';

function App() {
  const [startGame, setStartGame] = useState(false);

  return (
    <main className='container'>{!startGame && <StartPage setStartGame={setStartGame} />}</main>
  );
}

export default App;
