'use client'
import React, { useState } from "react";
import styles from "./Admin.module.scss";
import FeedbackView from "@/components/FeedbackVeiw/FeedbackView";
import AddEvents from "@/components/AddEvents/AddEvents";
import DocumentsView from "@/components/DocumentsView/DocumentsView";
import ConnectUs from "@/components/ConnectUs/ConnectUs";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("reviews");

  const renderContent = () => {
    switch (activeTab) {
      case "reviews":
        return <FeedbackView />
      case "events":
        return <AddEvents />
      case "documents":
        return <DocumentsView />
      case "connect":
        return <ConnectUs />
      default:
        return null;
    }
  };

  return (
    <div className={styles.adminPage}>
      <div className={styles.header}>Панель админа</div>
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
        >Добавить события
        </button>
        <button
          className={
            activeTab === "documents" ? styles.activeButton : styles.button
          }
          onClick={() => setActiveTab("documents")}
        >
          Просмотр документов
        </button>
        <button
          className={
            activeTab === "connect" ? styles.activeButton : styles.button
          }
          onClick={() => setActiveTab("connect")}
        >
          Хочет связаться с нами
        </button>
      </div>
      <div className={styles.contentContainer}>{renderContent()}</div>
    </div>
  );
};

export default AdminPage;