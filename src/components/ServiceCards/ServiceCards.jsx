import React from "react";
import styles from "./ServiceCards.module.scss";
import Image from "next/image";
import News from '../../app/news.png'

export default function ServiceCards() {
  const cardsInfo = [
    {
      id: 1,
      image: News,
      title: "Новости профсоюза",
      text: "Следите за актуальными событиями и важными новостями.",
    },
    {
      id: 2,
      image: News,
      title: "События",
      text: "Узнайте о предстоящих мероприятиях и встречах.",
    },
    {
      id: 3,
      image: News,
      title: "Документы профсоюза",
      text: "Получите доступ к важным документам и материалам.",
    },
  ];

  return (
    <div className={styles.serviceCards}>
      <div className={styles.cardsTitle}>
        <h2>Профсоюзные услуги</h2>
        <p>Ваш надежный партнер в медицине</p>
      </div>
      <div className={styles.cardsContainer}>
        {cardsInfo.map((item) => {
          return (
            <div className={styles.cardsItem} key={item.id}>
              <figure className={styles.image}><Image alt='Документы' className={styles.img} src={item.image}></Image></figure>
              <div className={styles.cardsInfo}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
