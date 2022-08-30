import styles from './ChoiceButton.module.css';
import { useContext } from 'react';
import { Context } from '../../Context';

export default function ChoiceButton({ label, clickHandler }) {
  const { difficulty } = useContext(Context);

  return (
    <button
      className={styles.choiceButton}
      onClick={clickHandler}
      style={{
        border: `5px solid ${difficulty === label ? 'var(--primary)' : 'var(--white)'}`,
        boxShadow: difficulty === label ? '0px 0px 10px 2px #6a47ed inset' : 'none',
      }}
    >
      {label}
    </button>
  );
}
