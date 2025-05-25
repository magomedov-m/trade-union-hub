import React from 'react'
import styles from './EventsContainer.module.scss'
import Image from 'next/image'
import medVenatus from '../../../public/medVenatus.jpg'
import Goryanka from '../../../public/goryanka.jpg'
import StreetBall from '../../../public/streetball.jpg'

export default function EventsContainer() {
  return (
    <div className={styles.content}>
        <div className={styles.eventsContainer}>
            <div className={`${styles.eventsItem} ${styles.eventsTitle}`}>
            <h1>Актуальные события</h1>
            <p className={styles.p}>Узнайте о предстоящих мероприятиях</p>
        </div>
        <div className={styles.eventsItem}>
            <Image className={styles.img} src={medVenatus} alt='мероприятие' />                       
        </div>
        <div className={styles.eventsItem}>
            <Image className={styles.img} src={StreetBall} alt='мероприятие' />
        </div>
        <div className={styles.eventsItem}>
            <Image className={styles.img} src={Goryanka} alt='мероприятие' />
        </div>
        </div>
    </div>
  )
}
