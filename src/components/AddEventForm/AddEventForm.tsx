"use client";
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import styles from "./AddEventForm.module.scss";

interface EventFormData {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  organizer: string;
  participants: string;
}

interface AddEventFormProps {
  onEventAdded?: () => void;
}

const AddEventForm: React.FC<AddEventFormProps> = ({ onEventAdded }) => {
  const [formData, setFormData] = useState<EventFormData>({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    organizer: "",
    participants: "0",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          participants: parseInt(formData.participants) || 0,
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при добавлении события");
      }

      setSuccess(true);
      // Сброс формы
      setFormData({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        category: "",
        organizer: "",
        participants: "0",
      });

      // Вызываем колбэк для обновления списка
      if (onEventAdded) {
        onEventAdded();
      }

      // Сбросить сообщение об успехе через 3 секунды
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError("Не удалось добавить событие. Попробуйте позже.");
      console.error("Ошибка добавления:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {success && (
        <div
          style={{
            color: "green",
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: "#d4edda",
            borderRadius: "4px",
          }}
        >
          ✓ Событие успешно добавлено!
        </div>
      )}

      {error && (
        <div
          style={{
            color: "red",
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: "#f8d7da",
            borderRadius: "4px",
          }}
        >
          {error}
        </div>
      )}

      <form className={styles.eventForm} onSubmit={handleSubmit}>
        <TextField
          label="Название мероприятия"
          name="title"
          value={formData.title}
          onChange={handleChange}
          disabled={loading}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Описание"
          name="description"
          value={formData.description}
          onChange={handleChange}
          disabled={loading}
          required
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <div className={styles.row}>
          <TextField
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            disabled={loading}
            required
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            disabled={loading}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
        </div>
        <TextField
          label="Место проведения"
          name="location"
          value={formData.location}
          onChange={handleChange}
          disabled={loading}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Категория"
          name="category"
          value={formData.category}
          onChange={handleChange}
          disabled={loading}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Организатор"
          name="organizer"
          value={formData.organizer}
          onChange={handleChange}
          disabled={loading}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Количество участников"
          name="participants"
          type="number"
          value={formData.participants}
          onChange={handleChange}
          disabled={loading}
          fullWidth
          margin="normal"
        />
        <Button variant="outlined" type="submit" disabled={loading}>
          {loading ? "Добавление..." : "Добавить мероприятие"}
        </Button>
      </form>
    </div>
  );
};

export default AddEventForm;
