"use client";
import React, { useState } from "react";
import styles from "./CreateAccount.module.scss";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const KeyInputForm = () => {
  const [key, setKey] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    console.log("Submitted Key:", key);
    router.push('/account')
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Вход в систему</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="key" className={styles.label}>
          Введите вашключ:
        </label>
        <input
          type="text"
          id="key"
          className={styles.input}
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Ваш ключ..."
        />
        <Button variant="outlined" onClick={() => handleSubmit()}>
          Войти
        </Button>
      </form>
    </div>
  );
};

export default KeyInputForm;
