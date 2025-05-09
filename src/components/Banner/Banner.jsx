import React from 'react'
import styles from './Banner.module.scss'
import { Button } from '@mui/material'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.historyPPOMU}>
            <h2>ПрофМед</h2>
            <p>Ваш профсоюз - Ваш голос в университете</p>
            <Button variant="contained" color="primary">Прочитать историю</Button>
        </div>
    </div>
  )
}
