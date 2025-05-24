import React from 'react'
import styles from './Contacts.module.scss'
import Form from '../Form/Form'
import Map from '../Map/Map'

export default function Contacts() {
  return (
    <div className={styles.contactContainer}>
        <div className={styles.contactForm}>
            <Form />
            <Map />
        </div>
        <div className={styles.contactInfo}>
            <div className={styles.map}></div>
            <div className={styles.info}></div>
        </div>
    </div>
  )
}
