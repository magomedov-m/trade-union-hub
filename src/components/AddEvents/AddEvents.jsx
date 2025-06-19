import React from 'react'
import styles from './AddEvents.module.scss'
import AddEventForm from '../AddEventForm/AddEventForm'

export default function AddEvents() {
  return (
    <div className={styles.content}>
      <AddEventForm />
    </div>
  )
}
