"use client";
import Banner from '../components/Banner/Banner'
import AboutPPo from "../components/AboutPPO/AboutPPo";
import styles from "./page.module.css";
import ServiceCards from "../components/ServiceCards/ServiceCards";
import EventsContainer from "../components/Events/FeedbackContainer";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import { pageTransitions, pageVariables } from "./_pageAnimations";
import ChatBox from "../AI-agent-chat/ChatBox";

const Home: React.FC = () => {
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
      <ChatBox />
      <ServiceCards />
      <EventsContainer />
      <Contacts />
      <Footer />
    </motion.div>
  );
}

export default Home;