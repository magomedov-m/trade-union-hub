import React from 'react'
import styles from './Contacts.module.scss'
import Form from '../Form/Form'

export default function Contacts() {
  return (
    <div className={styles.contactContainer}>
        <div className={styles.contactForm}>
            <Form />
        </div>
        <div className={styles.contactInfo}>
            <div className={styles.map}></div>
            <div className={styles.info}></div>
        </div>
    </div>
  )
}
