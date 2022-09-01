import styles from './StartPage.module.css';
import { useContext } from 'react';
import { Context } from '../../Context';
import { v4 as uuidv4 } from 'uuid';
import ChoiceButton from '../ChoiceButton/ChoiceButton';
import ActionButton from '../ActionButton/ActionButton';

export default function StartPage() {
  const { setDifficulty, handleStartGame } = useContext(Context);
  const difficultySettings = ['easy', 'medium', 'hard'];

  const handleSetDifficulty = (e) => {
    const choice = e.target.textContent;
    setDifficulty(choice);
  };
  return (
    <>
      <h1 className={styles.logo}>Trivia!</h1>
      <ul className={styles.choiceContainer}>
        {difficultySettings.map((setting) => (
          <li key={uuidv4()}>
            <ChoiceButton label={setting} clickHandler={handleSetDifficulty} />
          </li>
        ))}
      </ul>
      <ActionButton label='play' clickHandler={handleStartGame} />
    </>
  );
}
