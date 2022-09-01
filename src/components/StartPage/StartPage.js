import styles from './StartPage.module.css';
import ChoiceButton from '../ChoiceButton/ChoiceButton';
import ActionButton from '../ActionButton/ActionButton';
import { useContext } from 'react';
import { Context } from '../../Context';

export default function StartPage() {
  const { setDifficulty, handleStartGame } = useContext(Context);

  const handleSetDifficulty = (e) => {
    const choice = e.target.textContent;
    setDifficulty(choice);
  };
  return (
    <>
      <h1 className={styles.logo}>Trivia!</h1>
      <ul className={styles.choiceContainer}>
        <li>
          <ChoiceButton label='easy' clickHandler={handleSetDifficulty} />
        </li>
        <li>
          <ChoiceButton label='medium' clickHandler={handleSetDifficulty} />
        </li>
        <li>
          <ChoiceButton label='hard' clickHandler={handleSetDifficulty} />
        </li>
      </ul>
      <ActionButton label='play' clickHandler={handleStartGame} />
    </>
  );
}
