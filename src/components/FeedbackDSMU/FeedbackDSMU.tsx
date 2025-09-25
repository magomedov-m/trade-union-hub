'use client';
import React from "react";
import styles from "./FeedbackDSMU.module.scss";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { addFeedbackMessageUrl } from "../../backend/api/url";

interface FeedbackFormData {
  first_name: string;
  last_name: string;
  msg: string;
}

export default function FeedbackDSMU() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<FeedbackFormData>();

  async function addFeedbackMsg(message: FeedbackFormData): Promise<void> {
    try {
      const response = await fetch(addFeedbackMessageUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      if (!response.ok) {
        throw new Error(`Ошибка try FeedbackDSMU.tsx: ${response.status}`);
      }

      const addedFbMsg = await response.json();
      reset();
    } catch (err) {
      console.error(`Ошибка catch FeedbackDSMU.tsx:`, err);
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
          label="Ваше имя"
          variant="outlined"
          {...register("first_name")}
        />
        <TextField
          label="Ваша фамилия"
          variant="outlined"
          {...register("last_name")}
        />
        <TextField
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