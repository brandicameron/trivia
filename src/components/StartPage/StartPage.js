import styles from './StartPage.module.css';
import Logo from '../../images/logo.svg';
import ChoiceButton from '../ChoiceButton/ChoiceButton';
import ActionButton from '../ActionButton/ActionButton';

export default function StartPage({ setDifficulty, handleStartGame }) {
  const handleSetDifficulty = (e) => {
    const choice = e.target.textContent;
    setDifficulty(choice);
  };
  return (
    <>
      <img src={Logo} alt='Quiz Logo' className={styles.logo} />
      <ul>
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
