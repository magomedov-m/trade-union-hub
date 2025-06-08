import React from "react";
import styles from "./Form.module.scss";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

export default function Form() {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.h1}>Связаться с нами</h1>
      <h2 className={styles.h2}>Мы всегда готовы помочь вам!</h2>
      <form action="" className={styles.form}>
        <TextField className={styles.textField} id="outlined-basic" label="Имя" variant="outlined" />
        <TextField className={styles.textField} id="outlined-basic" label="Почта" variant="outlined" />
        <TextField className={styles.textField}
          id="outlined-basic"
          label="Номер телефона"
          variant="outlined"
        />
        <label htmlFor="" className={styles.text}>
          <p className={styles.titleInput}>Сообщение *</p>
          <textarea className={styles.textarea} name="" id=""></textarea>
        </label>
        <br />
        <Button className={styles.submit} variant="outlined">
          Отправить
        </Button>
      </form>
    </div>
  );
}
