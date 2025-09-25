"use client";
import React, { useState, useEffect } from "react";
import styles from "./NavigationMenu.module.scss";
import Image from "next/image";
import Logo from "../../app/Logo.png";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MenuPopupState from "../MenuPopUp/MenuPopUp";

export const NavigationMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }

    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={styles.navigationMenu}>
      <div className={styles.logoContainer}>
        <Image src={Logo} alt="ПрофМед" className={styles.logo} width={100} height={100} />
        <h1 className={styles.title}>ПрофМед</h1>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <Link className={styles.navItem} href="/">Главная</Link>
          <Link className={styles.navItem} href="/about">О нас</Link>
          <Link className={styles.navItem} href="/listing">Функции</Link>
          <MenuPopupState />
        </div>

        <button
          aria-label="Меню"
          className={`${styles.hamburgerButton} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.mobileOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              className={styles.mobileDrawer}
              initial={{ x: "100vw" }}
              animate={{ x: '10vw' }}
              exit={{ x: "100vw" }}
              transition={{ duration: 0.3 }}
            >
              <nav className={styles.mobileNav}>
                <Link href="/" className={styles.mobileNavItem} onClick={() => setMenuOpen(false)}>Главная</Link>
                <Link href="/about" className={styles.mobileNavItem} onClick={() => setMenuOpen(false)}>О нас</Link>
                <Link href="/listing" className={styles.mobileNavItem} onClick={() => setMenuOpen(false)}>Функции</Link>
                <div className={styles.mobileFooter}>
                  <MenuPopupState />
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavigationMenu;