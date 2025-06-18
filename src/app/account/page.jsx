'use client'
import React from "react";
import styles from './AccountPage.module.scss'

export default function page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ваш аккаунт</h1>
      <div className={styles.card}>
        <div className={styles.field}>
          <span className={styles.label}>Имя:</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>Фамилия:</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>Ключ:</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>Должность:</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>Место работы:</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>Описание:</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>Дата создания:</span>{" "}
        </div>
      </div>
    </div>
  );
}
