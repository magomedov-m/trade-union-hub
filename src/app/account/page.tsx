"use client";
import React, { useState } from "react";
import styles from "./AccountPage.module.scss";
import ChatIcon from "@mui/icons-material/Chat";
import Link from "next/link";
import SkeletonAccount from "../../components/Skeletone/SkeletonAccount";

interface Data {
  first_name: string;
  last_name: string;
  key: string;
  job_title: string;
  department: string;
  description: string;
  created_at: string;
}

const AccountPage: React.FC = () => {
  // я понимаю, что закомментированный код не нужно оставлять, но это только для демонстрации
  // Работа с zustand
  // const key = useStore((state) => state.key);

  const [data, setData] = useState<Data[]>([
    {
      first_name: "Иван",
      last_name: "Иванов",
      key: "1234",
      job_title: "Студент",
      department: "Медицинский факультет",
      description: "Пример описания",
      created_at: "2025-01-01",
    },
  ]);
  // useEffect(() => {
  //   fetchDataAccount();
  // }, []);

  // этот код специально оставил показать, как происходила связка с supabase
  // async function fetchDataAccount() {
  //   try {
  //     const { data, err } = await supabaseAccount
  //       .from("register")
  //       .select("*")
  //       .eq("key", key);

  //     if (err) {
  //       console.log(err);
  //     } else {
  //       setData(data);
  //     }
  //   } catch (err) {
  //     console.log("Непредвиденная ошибка при загрузке данных:", err);
  //   }
  // }

  return (
    <div className={styles.container}>
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
              <span className={styles.label}>
                Должность: {data[0].job_title}
              </span>
            </div>
            <div className={styles.field}>
              <span className={styles.label}>
                Место работы: {data[0].department}
              </span>
            </div>
            <div className={styles.field}>
              <span className={styles.label}>
                Описание: {data[0].description}
              </span>
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
        <div className={styles.skeleton}>
          <SkeletonAccount />
        </div>
      )}
    </div>
  );
};

export default AccountPage;