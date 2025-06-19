"use client";
import React from "react";
import styles from "./Registration.module.scss";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import supabaseAccount from "@/api/supabaseClientCreateAccount";

export default function DocumentsView() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [key, setKey] = useState("");
  const [position, setPosition] = useState("");
  const [workplace, setWorkPlace] = useState("");
  const [description, setDescription] = useState("");

  async function createAccount() {
    const { error } = await supabaseAccount.from("register").insert([
      {
        first_name: firstName,
        last_name: lastName,
        key: key,
        description: description,
        job_title: position,
        department: workplace,
      },
    ]);

    if (error) console.log(error);
    setFirstName("");
    setLastName("");
    setKey("");
    setPosition("");
    setWorkPlace("");
    setDescription("");
  }

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Заполните данные аккаунта</h1>
      <form className={styles.form}>
        <div className={styles.field}>
          <TextField
            variant="outlined"
            label="Имя"
            type="text"
            id="key"
            name="key"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            value={key}
            onChange={(e) => setKey(e.target.value)}
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
            value={position}
            onChange={(e) => setPosition(e.target.value)}
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
            value={workplace}
            onChange={(e) => setWorkPlace(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
        <Button onClick={() => createAccount()} variant="outlined" className={styles.button}>
          Зарегистрировать
        </Button>
      </form>
    </div>
  );
}
