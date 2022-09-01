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
        <div>
          <h2>Correct</h2>
          <output>{numCorrect}</output>
        </div>
        <div className={styles.divider}></div>
        <div>
          <h2>Incorrect</h2>
          <output>{numIncorrect}</output>
        </div>
      </div>
      <ActionButton label='play again' clickHandler={handlePlayAgain} />
    </section>
  );
}
