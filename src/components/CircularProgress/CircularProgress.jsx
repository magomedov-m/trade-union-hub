import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './CircularProgress.module.scss'
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <div className={styles.progress}>
      <CircularProgress />
    </div>
  );
}
