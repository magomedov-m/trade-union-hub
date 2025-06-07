"use client";
import React, { useState } from "react";
import styles from "./NavigationMenu.module.scss";
import Button from "@mui/material/Button";
import Image from "next/image";
import Logo from "../../app/Logo.png";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export const NavigationMenu = () => {
  
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

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
          <Link className={styles.navItem} href='/listing'>Услуги</Link>
        </AnimatePresence>
        <Button variant="contained" color="primary">
          Контакты
        </Button>
      </div>
    </div>

    // <Box sx={{ width: '1140px', typography: 'body1' }}>
    //   <TabContext value={value}>
    //     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    //       <TabList onChange={handleChange} aria-label="navigation tabs">
    //         <Tab href="/" label='Item one' value={1} />
    //         <Tab href="/about" label='Item two' value={2} />
    //         <Tab href="/employee-registry" label='Item three' value={3} />
    //       </TabList>
    //     </Box>
    //   </TabContext>
    // </Box>
  );
};
