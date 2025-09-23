"use client";
import React, { useEffect, useState } from "react";
import styles from "./Chat.module.scss";
import supabase from "@/supabaseApi/supabaseClientChat";

const Chat = () => {
  const [nameTitle, setNameTitle] = useState("");
  const [lastNameTitle, setLastNameTitle] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [allMessages, setAllMessages] = useState([]);
  let field = true;
  nameTitle.length > 0 && lastNameTitle.length > 0
    ? (field = false)
    : (field = true);

  async function addMessageInChat() {
    const { error } = await supabase.from("chat").insert([
      {
        first_name: nameTitle,
        last_name: lastNameTitle,
        message: message,
      },
    ]);

    if (error) console.log(error);
    setMessage("");
  }

  useEffect(() => {
    getMessages();

    const channel = supabase
      .channel("public:chat")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "chat" },
        (payload) => {
          setAllMessages((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function getMessages() {
    try {
      const { data, error } = await supabase
        .from("chat")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) console.log("Ошибка в загрузке сообщений чата:", error);
      else {
        setAllMessages(data);
      }
    } catch (err) {
      console.log("Непредвиденная ошибка при загрузке сообщений чата:", err);
    }
  }

  function closeForm(e) {
    e.preventDefault();
    setShowForm(false);
  }

  console.log(allMessages);
  return (
    <div className={styles.chatContainer}>
      <div
        className={styles.wrapper}
        style={{ display: showForm ? showForm : "none" }}
      >
        <form className={styles.form}>
          <h2 className={styles.title}>Введите ваше имя и фамилию</h2>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="firstName">
              Имя
            </label>
            <input
              id="firstName"
              type="text"
              className={styles.input}
              placeholder="Имя"
              onChange={(e) => setNameTitle(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="lastName">
              Фамилия
            </label>
            <input
              id="lastName"
              type="text"
              className={styles.input}
              placeholder="Фамилия"
              onChange={(e) => setLastNameTitle(e.target.value)}
            />
          </div>
          <button onClick={(e) => closeForm(e)} className={styles.submitButton}>
            Продолжить
          </button>
        </form>
      </div>

      <div className={styles.chatHeader}>Корпоративный чат</div>
      <div className={styles.chatMessages}>
        {allMessages.map((item) => {
          return nameTitle == item.first_name &&
            lastNameTitle == item.last_name ? (
            <div key={item.id} className={styles.messageRight}>
              <span className={styles.userName}>
                {item.first_name} {item.last_name}
              </span>
              <p className={styles.messageText}>{item.message}</p>
            </div>
          ) : (
            <div key={item.id} className={styles.messageLeft}>
              <span className={styles.userName}>
                {item.first_name} {item.last_name}
              </span>
              <p className={styles.messageText}>{item.message}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.chatInputContainer}>
        <input
          type="text"
          className={styles.chatInput}
          placeholder="Напишите ваше сообщение..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          disabled={field}
        />
        <button
          className={styles.sendButton}
          onClick={() => addMessageInChat()}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Chat;
