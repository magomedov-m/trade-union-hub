"use client";
import React from "react";
import styles from "./Registration.module.scss";
import { useState } from "react";
import { TextField } from "@mui/material";

export default function DocumentsView() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    key: "",
    position: "",
    workplace: "",
    description: "",
    creationDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    console.log("Submitted Data:", formData);
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Заполните данные аккаунта</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <TextField
            variant="outlined"
            label="Имя"
            type="text"
            id="key"
            name="key"
            value={formData.key}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <TextField
            variant="outlined"
            label="Фамилия"
            type="text"
            id="key"
            name="key"
            value={formData.key}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <TextField
            variant="outlined"
            label="Ключ"
            type="text"
            id="key"
            name="key"
            value={formData.key}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <TextField
            variant="outlined"
            label="Должность"
            type="text"
            id="key"
            name="key"
            value={formData.key}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <TextField
            variant="outlined"
            label="Место работы"
            type="text"
            id="key"
            name="key"
            value={formData.key}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="description" className={styles.label}>
            Описание:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={styles.textarea}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="creationDate" className={styles.label}>
            Дата создания:
          </label>
          <input
            id="creationDate"
            name="creationDate"
            className={styles.input}
            placeholder="Автоматически"
            disabled
          />
        </div>
        <button type="submit" className={styles.button}>
          Сохранить
        </button>
      </form>
    </div>
  );
}
