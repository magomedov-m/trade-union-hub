import React from "react";
import styles from "./Form.module.scss";
import { Button, CircularProgress } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import supabaseConnect from "@/supabaseApi/supabaseClientConnect";

export default function Form() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(name, mail);

  async function sendConnect() {
    setLoading(true);
    const { error } = await supabaseConnect.from("connect").insert([
      {
        name: name,
        mail: mail,
        phone: phone,
        text: message,
      },
    ]);

    if (error) console.log("Ошибка:", error);
    else {
      setName("");
      setMail("");
      setPhone("");
      setMessage("");
      setLoading(false);
    }
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.h1}>Связаться с нами</h1>
      <h2 className={styles.h2}>Мы всегда готовы помочь вам!</h2>
      <form action="" className={styles.form}>
        <div className={styles.textFieldBlock}>
          <TextField
            className={styles.textField}
            id="outlined-basic"
            label="Имя"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className={styles.textField}
            id="outlined-basic"
            label="Почта"
            variant="outlined"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <TextField
            className={styles.textField}
            id="outlined-basic"
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
            name=""
            id="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
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
