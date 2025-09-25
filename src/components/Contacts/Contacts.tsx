import React from 'react'
import styles from './Contacts.module.scss'
import Form from '../Form/Form'
import Map from '../Map/Map'

const Contacts: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
        <div className={styles.contactForm}>
            <Form />
            <Map />
        </div>
    </div>
  )
}

export default Contacts;