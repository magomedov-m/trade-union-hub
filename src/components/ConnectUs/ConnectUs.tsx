"use client";
import React, { useEffect } from "react";
import styles from "./ConnectUs.module.scss";
import ContactCard from "../ContactCard/ContactCard";
import { useState } from "react";
import contacts from "./defaultData";

interface Data {
  name: string;
  created_at: number | string;
  mail: string;
  phone: string;
  text: string;
}

export default function ConnectUs() {
  const [data, setData] = useState<Data[]>([...contacts]);

  // Оставил как наглядные пример, как я работал с supabase
  // async function getConnect() {
  //   const { data, error } = await supabase.from("connect").select("*");
  //   if (error) console.log("Ошибпка connect:", error);
  //   setData(data);
  // }
  // useEffect(() => {
  //   getConnect();
  // }, []);
  return (
    <div className={styles.contentBlock}>
      {data.map((item) => {
        return <ContactCard data={item} key={item.created_at} />;
      })}
    </div>
  );
}
