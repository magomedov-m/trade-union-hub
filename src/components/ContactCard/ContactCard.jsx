import React from "react";
import styles from "./ContactCard.module.scss";

const ContactCard = ({ date, name, email, phone, message }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        
        <span className={styles.name}>{name}</span>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.content}>
        <p className={styles.detail}><strong>Email:</strong> magomed@gmai.com</p>
        <p className={styles.detail}><strong>Phone:</strong> +7-8960-456-23-22</p>
        <p className={styles.message}>Вы конечно меня простите, но так уже не может продолжаться</p>
      </div>
    </div>
  );
};

export default ContactCard;
