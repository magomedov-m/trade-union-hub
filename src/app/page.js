import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu";
import Banner from "@/components/Banner/Banner";
import AboutPPo from "@/components/AboutPPO/AboutPPo";
import styles from './page.module.css'
import ServiceCards from "@/components/ServiceCards/ServiceCards";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavigationMenu />
      <Banner />
      <AboutPPo />
      <ServiceCards />
    </div>
  );
}
