import React from "react";
import styles from "./Header.module.scss";
import Button from '@mui/material/Button'
import Image from "next/image";
import Logo from '../../app/Logo.png'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src={Logo} alt="ПрофМед" className={styles.logo} />
        <h1 className={styles.title}>ПрофМед</h1>
      </div>
      <div className={styles.nav}>
        <p className={styles.navItem}>Главная</p>
        <p className={styles.navItem}>О нас</p>
        <p className={styles.navItem}>Услуги</p>
        <p className={styles.navItem}>События</p>
        <Button variant="contained" color="primary">Контакты</Button>
      </div>
    </div>
  );
};
