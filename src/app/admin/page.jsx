'use client'
import React, { useState } from "react";
import styles from "./Admin.module.scss";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("reviews");

  const renderContent = () => {
    switch (activeTab) {
      case "reviews":
        return <div className={styles.content}>Content for managing reviews</div>;
      case "events":
        return <div className={styles.content}>Content for adding events</div>;
      case "documents":
        return <div className={styles.content}>Content for managing documents</div>;
      default:
        return null;
    }
  };

  return (
    <div className={styles.adminPage}>
      <div className={styles.header}>Admin Panel</div>
      <div className={styles.buttonContainer}>
        <button
          className={
            activeTab === "reviews" ? styles.activeButton : styles.button
          }
          onClick={() => setActiveTab("reviews")}
        >
          Просмотр отзывов
        </button>
        <button
          className={
            activeTab === "events" ? styles.activeButton : styles.button
          }
          onClick={() => setActiveTab("events")}
        >ДОбавить события
        </button>
        <button
          className={
            activeTab === "documents" ? styles.activeButton : styles.button
          }
          onClick={() => setActiveTab("documents")}
        >
          Просмотр документов
        </button>
      </div>
      <div className={styles.contentContainer}>{renderContent()}</div>
    </div>
  );
};

export default AdminPage;