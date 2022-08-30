import styles from './ActionButton.module.css';

export default function ActionButton({ label, clickHandler }) {
  return (
    <button className={styles.actionButton} onClick={clickHandler}>
      {label}
    </button>
  );
}
