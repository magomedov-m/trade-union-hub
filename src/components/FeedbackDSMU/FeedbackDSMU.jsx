import React, { useEffect } from "react";
import styles from "./FeedbackDSMU.module.scss";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { addFeedbackMessageUrl } from "@/backend/api/url";

export default function FeedbackDSMU() {
  const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm({});

  async function addFeedbackMsg(message) {

    try {
      const response = await fetch(addFeedbackMessageUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      if (!response.ok) {
        throw new Error(`Ошибка try FeedbackDSMU.jsx: ${response.status}`);
      }

      const addedFbMsg = await response.json();
      reset();
      console.log("Мнение учтено:", addedFbMsg);
    } catch (err) {
      console.error(`Ошибка catch FeedbackDSMU.jsx: ${err}`);
    }
  }

  return (
    <section className={styles.contact}>
      <h2>Оставьте свой отзыв</h2>
      <form
        onSubmit={handleSubmit(addFeedbackMsg)}
        className={styles.contactForm}
      >
        <TextField
          id="outlined-basic"
          label="Ваше имя"
          variant="outlined"
          {...register("first_name")}
        />
        <TextField
          id="outlined-basic"
          label="Ваша фамилия"
          variant="outlined"
          {...register("last_name")}
        />
        <TextField
          id="outlined-basic"
          label="Нам интересно Ваше мнение"
          variant="outlined"
          {...register("msg")}
        />
        <Button type="submit">Отправить</Button>
      </form>
      <div className={styles.contactInfo}>
        <p>
          Республика Дагестан, г. Махачкала, ул. Гусаева, дом 5, этаж 3, каб. 39
        </p>
        <p>Тел. для справок: 8 (8722) 67-08-02</p>
        <p>Email: profmed@dsmu.ru</p>
      </div>
    </section>
  );
}
