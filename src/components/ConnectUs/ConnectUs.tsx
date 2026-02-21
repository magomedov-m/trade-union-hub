"use client";
import React, { useEffect } from "react";
import styles from "./ConnectUs.module.scss";
import ContactCard from "../ContactCard/ContactCard";
import { useState } from "react";

interface Data {
  name: string;
  created_at: number | string;
  mail: string;
  phone: string;
  text: string;
  message?: string;
  is_read?: boolean;
}

export default function ConnectUs() {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  async function getConnect() {
    try {
      const response = await fetch("http://localhost:8080/api/connect");
      if (!response.ok) throw new Error("Ошибка загрузки сообщений");
      const apiData = await response.json();

      // Преобразуем данные с бэкенда в формат компонента
      const formattedData = apiData.map((item: any) => ({
        name: item.name,
        created_at: item.created_at,
        mail: item.mail,
        phone: item.phone || "",
        text: item.message || item.text || "",
        is_read: item.is_read || false
      }));

      setData(formattedData);
    } catch (err) {
      setError("Не удалось загрузить сообщения");
      console.error("Ошибка connect:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getConnect();
  }, []);

  if (loading) {
    return <div className={styles.contentBlock}>Загрузка сообщений...</div>;
  }

  if (error) {
    return <div className={styles.contentBlock}>{error}</div>;
  }

  if (data.length === 0) {
    return <div className={styles.contentBlock}>Нет сообщений</div>;
  }

  return (
    <div className={styles.contentBlock}>
      {data.map((item) => {
        return <ContactCard data={item} key={item.created_at} />;
      })}
    </div>
  );
}
