"use client";
import React, { useEffect, useState } from "react";
import styles from "./AccountPage.module.scss";
import useStore from "@/zustand/store";
import supabaseAccount from "@/api/supabaseClientCreateAccount";
import ChatIcon from "@mui/icons-material/Chat";
import Link from "next/link";

export default function page() {
  const key = useStore((state) => state.key);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchDataAccount();
  }, []);

  async function fetchDataAccount() {
    try {
      const { data, err } = await supabaseAccount
        .from("register")
        .select("*")
        .eq("key", key);

      if (err) {
        console.log(err);
      } else {
        setData(data);
      }
    } catch (err) {
      console.log("Непредвиденная ошибка при загрузке данных:", err);
    }
  }

  console.log(data);
  return (
    <>
      {data.length > 0 ? (
        <div className={styles.container}>
          <h1 className={styles.title}>Ваш аккаунт</h1>
          <div className={styles.card}>
            <div className={styles.field}>
              <span className={styles.label}>Имя: {data[0].first_name}</span>
            </div>
            <div className={styles.field}>
              <span className={styles.label}>Фамилия: {data[0].last_name}</span>
            </div>
            <div className={styles.field}>
              <span className={styles.label}>Ключ: {data[0].key}</span>
            </div>
            <div className={styles.field}>
              <span className={styles.label}>Должность: {data[0].job_title}</span>
            </div>
            <div className={styles.field}>
              <span className={styles.label}>
                Место работы: {data[0].department}
              </span>
            </div>
            <div className={styles.field}>
              <span className={styles.label}>Описание: {data[0].description}</span>
            </div>
            <div className={styles.field}>
              <span className={styles.label}>
                Дата создания: {data[0].created_at}
              </span>{" "}
            </div>
          </div>
          <Link href="/chat">
            <h3 className={styles.h3}>
              Перейти в корпоративный чат{" "}
              <ChatIcon color="primary" sx={{ fontSize: 35 }} />
            </h3>
          </Link>
        </div>
      ) : (
        "Данные грузятся"
      )}
    </>
  );
}
