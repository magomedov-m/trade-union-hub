import React from 'react'
import styles from './Form.module.scss'
import { Button } from '@mui/material'

export default function Form() {
  return (
    <div className={styles.formContainer}>
        <h1 className={styles.h1}>Связаться с нами</h1>
        <h2 className={styles.h2}>Мы всегда готовы помочь вам!</h2>
        <form action="" className={styles.form}>
            <label htmlFor="name" className={styles.name}>
                <p className={styles.titleInput}>Имя *</p>
                <input className={styles.name} type="text" name='name' placeholder='Имя'/>
            </label>
            <label htmlFor="Email">
                <p className={styles.titleInput}>Email *</p>
                <input className={styles.email} type="text" placeholder='email@any.com'/>
            </label>
            <label htmlFor="">
                <p className={styles.titleInput}>Номер телефона *</p>
                <input className={styles.phone} type="text" placeholder='8-960-***-**-03'/>
            </label>
            <label htmlFor="" className={styles.text}>
                <p className={styles.titleInput}>Сообщение *</p>
                <textarea className={styles.textarea} name="" id="">

                </textarea>
            </label><br />
            <Button className={styles.submit} variant='outlined'>Отправить</Button>
        </form>
    </div>
  )
}
