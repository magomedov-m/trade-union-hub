"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { pageVariables, pageTransitions } from "../_pageAnimations";
import styles from "./EventsPage.module.scss";
import { Button } from "@mui/material";
import AddEventForm from "../../components/AddEventForm/AddEventForm";

interface Events {
  id: number;
  title: string;
  date: string;
  time?: string;
  description: string;
  image: string;
  location?: string;
  category?: string;
  organizer?: string;
  participants?: number;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Events[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const response = await fetch("http://localhost:8080/api/events");
      if (!response.ok) throw new Error("Ошибка загрузки событий");
      const data = await response.json();
      setEvents(data);
    } catch (err) {
      setError("Не удалось загрузить события");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const handleEventAdded = () => {
    fetchEvents();
    setShowAddForm(false);
  };

  if (loading) {
    return (
      <motion.div
        exit={pageVariables.out}
        animate={pageVariables.in}
        initial={pageVariables.out}
        transition={pageTransitions}
        className={styles.container}
      >
        <div className={styles.hero}>
          <h1 className={styles.title}>События и новости</h1>
        </div>
        <div className={styles.eventsList}>Загрузка...</div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        exit={pageVariables.out}
        animate={pageVariables.in}
        initial={pageVariables.out}
        transition={pageTransitions}
        className={styles.container}
      >
        <div className={styles.hero}>
          <h1 className={styles.title}>События и новости</h1>
        </div>
        <div className={styles.eventsList}>{error}</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      exit={pageVariables.out}
      animate={pageVariables.in}
      initial={pageVariables.out}
      transition={pageTransitions}
      className={styles.container}
    >
      <header className={styles.hero}>
        <h1 className={styles.title}>События и новости</h1>
        <p className={styles.subtitle}>
          Узнайте больше о прошедших и предстоящих мероприятиях нашего
          университета.
        </p>
        <Button
          variant="outlined"
          onClick={() => setShowAddForm(!showAddForm)}
          sx={{ mt: 2 }}
        >
          {showAddForm ? "Скрыть форму" : "Добавить событие"}
        </Button>
      </header>

      {showAddForm && (
        <div className={styles.addFormContainer}>
          <AddEventForm onEventAdded={handleEventAdded} />
        </div>
      )}

      <div className={styles.eventsList}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <img
              src={event.image}
              alt={event.title}
              className={styles.eventImage}
            />
            <div className={styles.eventContent}>
              <h2 className={styles.eventTitle}>{event.title}</h2>
              <p className={styles.eventDate}>
                {new Date(event.date).toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                {event.time && ` в ${event.time}`}
              </p>
              {event.location && (
                <p className={styles.eventLocation}>📍 {event.location}</p>
              )}
              {event.category && (
                <p className={styles.eventCategory}>🏷️ {event.category}</p>
              )}
              <p className={styles.eventDescription}>{event.description}</p>
              {event.organizer && (
                <p className={styles.eventOrganizer}>
                  Организатор: {event.organizer}
                </p>
              )}
              {event.participants && (
                <p className={styles.eventParticipants}>
                  Участников: {event.participants}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {events.length === 0 && (
        <div className={styles.noEvents}>Нет событий</div>
      )}
    </motion.div>
  );
};

export default Events;
