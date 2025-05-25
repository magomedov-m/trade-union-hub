import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>Первичная профсоюзная организация ДГМУ</h3>
          <p>Адрес: г. Махачкала, ул. Ленина, д. 42</p>
          <p>Телефон: +7 (8722) 123-456</p>
          <p>Email: profsoyuz@dgmu.ru</p>
          
        </div>
        <div className={styles.links}>
          <a href="/about" className={styles.link}>
            О нас
          </a>
          <a href="/news" className={styles.link}>
            Новости
          </a>
          <a href="/contact" className={styles.link}>
            Контакты
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
