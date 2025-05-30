"use client";
import Banner from "@/components/Banner/Banner";
import AboutPPo from "@/components/AboutPPO/AboutPPo";
import styles from "./page.module.css";
import ServiceCards from "@/components/ServiceCards/ServiceCards";
import EventsContainer from "@/components/Events/EventsContainer";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import { pageTransitions, pageVariables } from "./_pageAnimations";

export default function Home() {
  return (
    <motion.div
      className={styles.page}
      exit={pageVariables.out}
      animate={pageVariables.in}
      initial={pageVariables.out}
      transition={pageTransitions}
    >
      <Banner />
      <AboutPPo />
      <ServiceCards />
      <EventsContainer />
      <Contacts />
      <Footer />
    </motion.div>
  );
}
