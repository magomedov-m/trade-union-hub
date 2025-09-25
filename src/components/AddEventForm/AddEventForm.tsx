'use client'
import React from "react"
import { Button, TextField } from "@mui/material";
import styles from './AddEventForm.module.scss';

const AddEventForm: React.FC = () => {
  return (
    <div>
      <form className={styles.eventForm}>
      <TextField
        label="Название мероприятия"
        name="title"
      />
      <TextField
        label="Описание"
        name="description"
      />
      <div className={styles.row}>
        <TextField
          name="date"
          type="date"
        />
        <TextField
          name="time"
          type="time"
        />
      </div>
      <TextField
        label="Место проведения"
        name="location"
      />
      <TextField
        label="Категория"
        name="category"
      />
      <TextField
        label="Организатор"
        name="organizer"
      />
      <TextField
        label="Количество участников"
        name="participants"
        type="number"
      />
      <Button variant="outlined">Добавить мероприятие</Button>
    </form>
    </div>
  )
};

export default AddEventForm;