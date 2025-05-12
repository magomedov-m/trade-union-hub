import React from 'react'
import styles from './EventsContainer.module.scss'

export default function EventsContainer() {
  return (
    <div className={styles.content}>
        <div className={styles.eventsContainer}>
            <div className={styles.eventsItem}>
            <h1>Актуальные события</h1>
            <p>Узнайте о предстоящих мероприятиях</p>
        </div>
        <div className={styles.eventsItem}>
            Здесь будут картинки                       
        </div>
        <div className={styles.eventsItem}>
            Здесь будут картинки
        </div>
        <div className={styles.eventsItem}>
            Здесь будут картинки
        </div>
        </div>
    </div>
  )
}
