import styles from './ChoiceButton.module.css';

export default function ChoiceButton({ label, clickHandler }) {
  return (
    <button className={styles.choiceButton} onClick={clickHandler}>
      {label}
    </button>
  );
}
