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
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function sendConnect(): Promise<void> {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          mail,
          phone,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке сообщения");
      }

      setSuccess(true);
      setName("");
      setMail("");
      setPhone("");
      setMessage("");

      // Сбросить сообщение об успехе через 3 секунды
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError("Не удалось отправить сообщение. Попробуйте позже.");
      console.error("Ошибка отправки:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.h1}>Связаться с нами</h1>
      <h2 className={styles.h2}>Мы всегда готовы помочь вам!</h2>

      {success && (
        <div
          style={{
            color: "green",
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: "#d4edda",
            borderRadius: "4px",
          }}
        >
          ✓ Сообщение успешно отправлено!
        </div>
      )}

      {error && (
        <div
          style={{
            color: "red",
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: "#f8d7da",
            borderRadius: "4px",
          }}
        >
          {error}
        </div>
      )}

      <form className={styles.form}>
        <div className={styles.textFieldBlock}>
          <TextField
            className={styles.textField}
            id="name"
            label="Имя"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
          <TextField
            className={styles.textField}
            id="mail"
            label="Почта"
            variant="outlined"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            disabled={loading}
          />
          <TextField
            className={styles.textField}
            id="phone"
            label="Номер телефона"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={loading}
          />
        </div>
        <label htmlFor="textarea" className={styles.text}>
          <p className={styles.titleInput}>Сообщение *</p>
          <textarea
            className={styles.textarea}
            id="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          />
        </label>
        <br />
        <Button
          className={styles.submit}
          variant="outlined"
          onClick={sendConnect}
          disabled={loading || !name || !mail || !message}
        >
          {loading ? "Отправка..." : "Отправить"}
        </Button>
      </form>
    </div>
  );
}
