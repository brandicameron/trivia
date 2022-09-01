import styles from './ProgressBar.module.css';
import { useContext } from 'react';
import { Context } from '../../Context';

export default function ProgressBar() {
  const { data, counter } = useContext(Context);

  return (
    <header className={styles.header}>
      <label htmlFor='progressBar'>
        Question {counter + 1} of {data.length}
      </label>
      <progress id='progressBar' max={data.length} value={counter + 1}></progress>
      <p>Level: {data[counter].difficulty}</p>
    </header>
  );
}
