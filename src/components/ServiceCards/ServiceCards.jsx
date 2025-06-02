import React from "react";
import styles from "./ServiceCards.module.scss";
import Image from "next/image";
import News from "../../app/news.png";
import Event from "../../../public/iconEvent.png";
import Docs from "../../../public/docs.png";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

export default function ServiceCards() {
  const cardsInfo = [
    {
      id: 1,
      image: News,
      title: "Новости профсоюза",
      text: "Следите за актуальными событиями и важными новостями.",
      link: "/events",
    },
    {
      id: 2,
      image: Event,
      title: "Реестр сотрудников",
      text: "Ознакомьтесь с действующими сотрудниками профсоюза.",
      link: '/employee-registry'
    },
    {
      id: 3,
      image: Docs,
      title: "Документы профсоюза",
      text: "Получите доступ к важным документам и материалам.",
    },
  ];

  return (
    <div className={styles.serviceCards}>
      <div className={styles.cardsTitle}>
        <h2 className={styles.h2}>Интересное</h2>
        <p className={styles.description}>Читайте всю информацию о профсоюзе</p>
      </div>
      <div className={styles.cardsContainer}>
        {cardsInfo.map((item) => {
          return (
            <AnimatePresence>
              <Link key={item.id} href={item.link || ''}>
                <div className={styles.cardsItem}>
                  <figure className={styles.image}>
                    <Image
                      alt={item.title}
                      className={styles.img}
                      src={item.image}
                    />
                  </figure>
                  <div className={styles.cardsInfo}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.text}>{item.text}</p>
                  </div>
                </div>
              </Link>
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
}
