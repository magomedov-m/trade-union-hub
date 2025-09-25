import React from 'react'
import styles from './AddEvents.module.scss'
import AddEventForm from '../AddEventForm/AddEventForm'

const AddEvents = () => {
  return (
    <div className={styles.content}>
      <AddEventForm />
    </div>
  )
}

export default AddEvents;