import styles from './StartPage.module.css';
import { useContext } from 'react';
import { Context } from '../../Context';
import { v4 as uuidv4 } from 'uuid';
import ActionButton from '../ActionButton/ActionButton';
import DifficultyButton from '../SelectButtons/DifficultyButton';
import Logo from '../../images/trivia.png';

export default function StartPage() {
  const { handleStartGame } = useContext(Context);
  const difficultySettings = ['easy', 'medium', 'hard'];

  return (
    <>
      <img className={styles.logo} src={Logo} alt='Trivia game logo' width={500} height={249} />

      <ul className={styles.choiceContainer}>
        {difficultySettings.map((setting) => (
          <li key={uuidv4()}>
            <DifficultyButton label={setting} />
          </li>
        ))}
      </ul>
      <ActionButton label='play' clickHandler={handleStartGame} />
    </>
  );
}
