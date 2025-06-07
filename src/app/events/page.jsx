"use client";
import { motion } from "framer-motion";
import { pageVariables, pageTransitions } from "../_pageAnimations";
import styles from './EventsPage.module.scss'

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Конференция молодых учёных",
      date: "2025-06-01",
      description:
        "Ежегодная конференция, где обсуждаются новейшие достижения медицины.",
      image: "/images/event1.jpg",
    },
    {
      id: 2,
      title: "День открытых дверей",
      date: "2025-06-15",
      description:
        "Мероприятие для абитуриентов и их родителей, знакомство с университетом.",
      image: "/images/event2.jpg",
    },
    {
      id: 3,
      title: "Благотворительный марафон",
      date: "2025-07-01",
      description:
        "Собираем средства на поддержку студентов в трудной жизненной ситуации.",
      image: "/images/event3.jpg",
    },
  ];
  return (
    <motion.div
      exit={pageVariables.out}
      animate={pageVariables.in}
      initial={pageVariables.out}
      transition={pageTransitions}
    className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>События и новости</h1>
        <p className={styles.subtitle}>
          Узнайте больше о прошедших и предстоящих мероприятиях нашего университета.
        </p>
      </header>

      <div className={styles.eventsList}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <img src={event.image} alt={event.title} className={styles.eventImage} />
            <div className={styles.eventContent}>
              <h2 className={styles.eventTitle}>{event.title}</h2>
              <p className={styles.eventDate}>{event.date}</p>
              <p className={styles.eventDescription}>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
