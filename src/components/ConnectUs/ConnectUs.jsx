"use client";
import React, { useEffect } from "react";
import styles from "./ConnectUs.module.scss";
import ContactCard from "../ContactCard/ContactCard";
import supabase from "@/supabaseApi/supabaseClientConnect";
import { useState } from "react";

export default function ConnectUs() {
  const [data, setData] = useState([]);

  async function getConnect() {
    const { data, error } = await supabase.from("connect").select("*");
    if (error) console.log("Ошибпка connect:", error);
    setData(data);
  }

  useEffect(() => {
    getConnect();
  }, []);
  return (
    <div className={styles.contentBlock}>
      {data.map((item, idx) => {
        return <ContactCard {...item} key={idx} />;
      })}
    </div>
  );
}
