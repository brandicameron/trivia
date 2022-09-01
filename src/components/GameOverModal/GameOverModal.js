import styles from './GameOverModal.module.css';

export default function GameOverModal({ numCorrect, numIncorrect }) {
  return (
    <section className={styles.gameOver}>
      <h1>Game Over!</h1>
      <div className={styles.scores}>
        <div className={styles.score}>
          <p>Correct</p>
          <h2>{numCorrect}</h2>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.score}>
          <p>Incorrect</p>
          <h2>{numIncorrect}</h2>
        </div>
      </div>
    </section>
  );
}
