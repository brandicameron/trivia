import { useContext } from 'react';
import { Context } from './Context';
import StartPage from './components/StartPage/StartPage';
import GameBoard from './components/GameBoard/GameBoard';

function App() {
  const { startGame } = useContext(Context);

  return (
    <main className='container'>
      {!startGame && <StartPage />}
      {startGame && <GameBoard />}
    </main>
  );
}

export default App;
