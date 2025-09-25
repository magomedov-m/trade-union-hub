import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './CircularProgress.module.scss'

const CircularIndeterminate = () => {
  return (
    <div className={styles.progress}>
      <CircularProgress />
    </div>
  );
}

export default CircularIndeterminate;