import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>Первичная профсоюзная организация ДГМУ</h3>
          <p>Адрес: г. Махачкала, ул. Ленина, д. 42</p>
          <p>Телефон: +7 (8722) 123-456</p>
          <p>Email: profsoyuz@dgmu.ru</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;