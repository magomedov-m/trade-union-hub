import React from "react";
import styles from './NoneData.module.scss'

export default function NoneData(props) {
  return (
    <div className={styles.emptyState}>
      <div className={styles.emptyIcon}>💬</div>
      <p className={styles.emptyText}>{props.title}</p>
      <p className={styles.emptySubtext}>
        {props.text}
      </p>
    </div>
  );
}
