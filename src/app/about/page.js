"use client";
import { motion } from "framer-motion";
import { pageVariables, pageTransitions } from "../_pageAnimations";
import styles from "./AboutUsPage.module.scss";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import supabase from "@/api/supabaseClient";

export default function About() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  async function addMessage() {
    const { error } = await supabase
      .from("feedback_message")
      .insert([{ 
        first_name: name,
        last_name: lastName,
        text: message
       }]);

      if (error) console.log(error);
      setName("")
      setLastName("")
      setMessage("")
  }
  return (
    <motion.div
      exit={pageVariables.out}
      animate={pageVariables.in}
      initial={pageVariables.out}
      transition={pageTransitions}
      className={styles.container}
    >
      <section className={styles.hero}>
        <h1 className={styles.title}>О нас</h1>
        <p className={styles.subtitle}>
          Профсоюзная организация Дагестанского государственного медицинского
          университета — это место, где заботятся о студентах и сотрудниках
          университета.
        </p>
        <button className={styles.ctaButton}>Узнать больше</button>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <h2>Наша миссия</h2>
        <p>
          Наша главная цель — защита прав и интересов членов профсоюза. Мы
          стремимся обеспечить комфортные условия для работы, обучения и отдыха
          сотрудников и студентов.
        </p>
        <p>
          Организация регулярно проводит мероприятия, тренинги и встречи для
          улучшения профессионального и личного развития своих членов.
        </p>
        <img
          className={styles.missionImage}
          src="/images/teamwork.svg"
          alt="Командная работа"
        />
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Что мы предлагаем?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <img src="/images/news.svg" alt="Новости" />
            <h3>Актуальные новости</h3>
            <p>Будьте в курсе всех событий и мероприятий в университете.</p>
          </div>
          <div className={styles.featureCard}>
            <img src="/images/calendar.svg" alt="Календарь" />
            <h3>Календарь мероприятий</h3>
            <p>Следите за предстоящими событиями и участвуйте в них.</p>
          </div>
          <div className={styles.featureCard}>
            <img src="/images/documents.svg" alt="Документы" />
            <h3>Полезные документы</h3>
            <p>Получите доступ к важным материалам и ресурсам.</p>
          </div>
          <div className={styles.featureCard}>
            <img src="/images/support.svg" alt="Поддержка" />
            <h3>Поддержка</h3>
            <p>Мы всегда готовы ответить на ваши вопросы и помочь.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <h2>Наша команда</h2>
        <div className={styles.teamFlex}>
          <div className={styles.teamMember}>
            <img src="/images/team1.jpg" alt="Член команды" />
            <h3>Гусейнова Сабина</h3>
            <p>Заведующая кафедрой анатомии человека</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/team2.jpg" alt="Член команды" />
            <h3>Дамаданова Аминат</h3>
            <p>Бухгалтер расчетного отдела</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/team3.jpg" alt="Член команды" />
            <h3>Гарунова Раисат</h3>
            <p>Старший преподаватель кафедры физиологии</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <h2>Оставьте свой отзыв</h2>
        <form className={styles.contactForm}>
          <TextField
            id="outlined-basic"
            label="Ваше имя"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            id="outlined-basic"
            label="Ваша фамилия"
            variant="outlined"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <TextField
            id="outlined-basic"
            label="Нам интересно Ваше мнение"
            variant="outlined"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button onClick={() => addMessage()}>Отправить</Button>
        </form>
        <div className={styles.contactInfo}>
          <p>
            Республика Дагестан, г. Махачкала, ул. Гусаева, дом 5, этаж 3, каб.
            39
          </p>
          <p>Тел. для справок: 8 (8722) 67-08-02</p>
          <p>Email: profmed@dsmu.ru</p>
        </div>
      </section>
    </motion.div>
  );
}
