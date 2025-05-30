"use client";
import React from "react";
import styles from "./NavigationMenu.module.scss";
import Button from "@mui/material/Button";
import Image from "next/image";
import Logo from "../../app/Logo.png";
import Link from "next/link";
import About from "@/app/about/page";
import { AnimatePresence, motion } from "framer-motion";


export const NavigationMenu = () => {
  


  return (
    <div className={styles.navigationMenu}>
      <div className={styles.logoContainer}>
        <Image src={Logo} alt="ПрофМед" className={styles.logo} />
        <h1 className={styles.title}>ПрофМед</h1>
      </div>
      <div className={styles.nav}>
        <AnimatePresence exitBeforeEnter mode="wait">
          <Link className={styles.navItem} href='/'>Главная</Link>
          <Link className={styles.navItem} href='/about'>О нас</Link>
          <Link className={styles.navItem} href='/registry'>Реест</Link>
          <Link className={styles.navItem} href='/events'>События</Link>
        </AnimatePresence>
        <Button variant="contained" color="primary">
          Контакты
        </Button>
      </div>
    </div>
  );
};
