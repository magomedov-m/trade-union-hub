'use client'
import { useState } from "react";
import styles from "./login-admin.module.scss";

export default function AdminLogin({ onLogin }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [key, setKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (key === "admin123") {
      onLogin({ firstName, lastName });
    } else {
      alert("Неверный ключ доступа!");
    }
  };

  return (
    <div className={styles.adminLogin}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Вход администратора</h2>

        <div className={styles.formGroup}>
          <label htmlFor="firstName">Имя</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Введите имя"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastName">Фамилия</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Введите фамилию"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="key">Ключ доступа</label>
          <input
            id="key"
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Введите ключ"
            required
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Войти
        </button>
      </form>
    </div>
  );
}
