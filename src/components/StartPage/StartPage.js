import styles from './StartPage.module.css';
import Logo from '../../images/logo.svg';
import ChoiceButton from '../ChoiceButton/ChoiceButton';
import ActionButton from '../ActionButton/ActionButton';

export default function StartPage({ handleStartGame }) {
  return (
    <>
      <img src={Logo} alt='Quiz Logo' className={styles.logo} />
      <ul>
        <li>
          <ChoiceButton label='easy' />
        </li>
        <li>
          <ChoiceButton label='medium' />
        </li>
        <li>
          <ChoiceButton label='hard' />
        </li>
      </ul>
      <ActionButton label='play' clickHandler={handleStartGame} />
    </>
  );
}
