import React from 'react'
import styles from './Banner.module.scss'
import { Button } from '@mui/material'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.historyPPOMU}>
            <h2 className={styles.title}>ПрофМед</h2>
            <p className={styles.description}>Ваш профсоюз - Ваш голос в университете</p>
            <Button className={styles.btn} variant="contained" color="primary">Прочитать историю</Button>
        </div>
    </div>
  )
}
