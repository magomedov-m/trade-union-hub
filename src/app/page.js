'use client'
import Banner from "@/components/Banner/Banner";
import AboutPPo from "@/components/AboutPPO/AboutPPo";
import styles from './page.module.css'
import ServiceCards from "@/components/ServiceCards/ServiceCards";
import EventsContainer from "@/components/Events/EventsContainer";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Banner />
      <AboutPPo />
      <ServiceCards />
      <EventsContainer />
      <Contacts />
      <Footer />
    </div>
  );
}
