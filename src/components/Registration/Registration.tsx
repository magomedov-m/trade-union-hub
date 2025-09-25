"use client";
import { createAccountUrl } from "../../backend/api/url";
import styles from "./Registration.module.scss";
import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

interface EmployeeFormData {
  fullName: string;
  key: string;
  faculty: string;
  phone: string;
  email: string;
  experience: string;
  education: string;
  skills: string;
  socialMedia: string;
  position: string;
}

export default function DocumentsView() {
  const { register, handleSubmit } = useForm<EmployeeFormData>();

  async function registryEmployee(
    data: EmployeeFormData,
    e?: React.BaseSyntheticEvent
  ) {
    e?.preventDefault();

    try {
      const response = await fetch(createAccountUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Ошибка try (Registration.jsx): ${response.status}`);
      }

      const createdEmployee = await response.json();
    } catch (err) {
      console.error(`Ошибка catch (Registration.jsx): ${err}`);
    }
  }

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Заполните данные сотрудника</h1>
      <form onSubmit={handleSubmit(registryEmployee)} className={styles.form}>
        <div className={styles.field}>
          <TextField
            variant="outlined"
            label="ФИО"
            type="text"
            {...register("fullName")}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <TextField
            variant="outlined"
            label="Ключ сотрудника"
            type="text"
            {...register("key")}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <TextField
            variant="outlined"
            label="Кафедра/Факультет"
            type="text"
            {...register("faculty")}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <TextField
            variant="outlined"
            label="Телефон"
            type="text"
            {...register("phone")}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            {...register("email")}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <TextField
            variant="outlined"
            label="Опыт работы"
            type="text"
            {...register("experience")}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <TextField
            variant="outlined"
            label="Образование"
            type="text"
            {...register("education")}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <TextField
            variant="outlined"
            label="Навыки"
            type="text"
            {...register("skills")}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <TextField
            variant="outlined"
            label="Соц. сеть"
            type="text"
            {...register("socialMedia")}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <TextField
            variant="outlined"
            label="Должность"
            type="text"
            {...register("position")}
            className={styles.input}
          />
        </div>

        <Button type="submit" variant="outlined" className={styles.button}>
          Зарегистрировать
        </Button>
      </form>
    </div>
  );
}