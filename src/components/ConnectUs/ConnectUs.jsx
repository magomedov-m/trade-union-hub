import React from "react";
import styles from "./ConnectUs.module.scss";
import ContactCard from "../ContactCard/ContactCard";

export default function ConnectUs() {
  return <div className={styles.content}>
    <ContactCard />
    <ContactCard />
    <ContactCard />
    <ContactCard />
  </div>;
}
