"use client";
import React, { useState } from "react";
import styles from "./Form.module.scss";
import { Button, TextField } from "@mui/material";

export default function Form(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function sendConnect(): Promise<void> {
    setLoading(true);

    setName("");
    setMail("");
    setPhone("");
    setMessage("");
    setLoading(false);
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.h1}>Связаться с нами</h1>
      <h2 className={styles.h2}>Мы всегда готовы помочь вам!</h2>
      <form className={styles.form}>
        <div className={styles.textFieldBlock}>
          <TextField
            className={styles.textField}
            id="name"
            label="Имя"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className={styles.textField}
            id="mail"
            label="Почта"
            variant="outlined"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <TextField
            className={styles.textField}
            id="phone"
            label="Номер телефона"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <label htmlFor="textarea" className={styles.text}>
          <p className={styles.titleInput}>Сообщение *</p>
          <textarea
            className={styles.textarea}
            id="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <br />
        <Button
          className={styles.submit}
          variant="outlined"
          onClick={() => sendConnect()}
        >
          Отправить
        </Button>
      </form>
    </div>
  );
}
