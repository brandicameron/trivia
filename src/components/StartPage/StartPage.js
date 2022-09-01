import styles from './StartPage.module.css';
import { useContext } from 'react';
import { Context } from '../../Context';
import { v4 as uuidv4 } from 'uuid';
import ActionButton from '../ActionButton/ActionButton';
import DifficultyButton from '../SelectButtons/DifficultyButton';

export default function StartPage() {
  const { handleStartGame } = useContext(Context);
  const difficultySettings = ['easy', 'medium', 'hard'];

  return (
    <>
      <h1 className={styles.logo}>Trivia!</h1>
      <ul role='list' className={styles.choiceContainer}>
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
