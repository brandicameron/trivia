import { useContext } from 'react';
import { Context } from './Context';
import StartPage from './components/StartPage/StartPage';

function App() {
  const { startGame } = useContext(Context);

  return <main className='container'>{!startGame && <StartPage />}</main>;
}

export default App;
