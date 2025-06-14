'use client'
import React from "react";
import styles from "./ContactCard.module.scss";

const ContactCard = (data) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        
        <span className={styles.name}>{data.name}</span>
        <span className={styles.date}>{data.created_at}</span>
      </div>
      <div className={styles.content}>
        <p className={styles.detail}><strong>Email:</strong>{data.mail}</p>
        <p className={styles.detail}><strong>Phone:</strong>{data.phone}</p>
        <p className={styles.message}>{data.text}</p>
      </div>
    </div>
  );
};

export default ContactCard;
