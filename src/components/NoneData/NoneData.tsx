import React from "react";
import styles from './NoneData.module.scss';

interface NoneDataProps {
  title: string;
  text: string;
}

export default function NoneData({ title, text }: NoneDataProps) {
  return (
    <div className={styles.emptyState}>
      <div className={styles.emptyIcon}>💬</div>
      <p className={styles.emptyText}>{title}</p>
      <p className={styles.emptySubtext}>
        {text}
      </p>
    </div>
  );
}
