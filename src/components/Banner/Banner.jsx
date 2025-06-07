import React from 'react'
import styles from './Banner.module.scss'
import BasicModal from '../Modal/Modal'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.historyPPOMU}>
            <h2 className={styles.title}>ПрофМед</h2>
            <p className={styles.description}>Ваш профсоюз - Ваш голос в университете</p>
            <BasicModal />
        </div>
    </div>
  )
}
