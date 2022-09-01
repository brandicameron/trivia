import styles from './GameOverModal.module.css';
import { useContext } from 'react';
import { Context } from '../../Context';
import ActionButton from '../ActionButton/ActionButton';

export default function GameOverModal() {
  const { numCorrect, numIncorrect, handlePlayAgain } = useContext(Context);
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
      <ActionButton label='play again' clickHandler={handlePlayAgain} />
    </section>
  );
}
