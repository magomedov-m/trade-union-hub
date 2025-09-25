import React from 'react';
import styles from './ChatForm.module.scss';

const ChatForm: React.FC = () => (
  <div className={styles.wrapper}>
    <form className={styles.form}>
      <h2 className={styles.title}>Введите ваше имя и фамилию</h2>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="firstName">Имя</label>
        <input
          id="firstName"
          type="text"
          className={styles.input}
          placeholder="Имя"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="lastName">Фамилия</label>
        <input
          id="lastName"
          type="text"
          className={styles.input}
          placeholder="Фамилия"
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Продолжить
      </button>
    </form>
  </div>
);

export default ChatForm;
