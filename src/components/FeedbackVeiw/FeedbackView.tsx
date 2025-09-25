'use client';
import React, { useEffect, useState } from "react";
import styles from "./FeedbackView.module.scss";
import { Button } from "@mui/material";
import Skeletone from "../Skeletone/Skeletone";
import { addFeedbackMessageUrl } from "../../backend/api/url";
import NoneData from "../NoneData/NoneData";

interface FeedbackMessage {
  first_name: string;
  last_name: string;
  msg: string;
  is_approved: boolean;
  created_at: number;
}

export default function FeedbackView() {
  const [feedback, setFeedback] = useState<FeedbackMessage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  async function fetchFeedback(): Promise<void> {
    try {
      const response = await fetch(addFeedbackMessageUrl);
      const feedbackMsgs: FeedbackMessage[] = await response.json();

      if (error) setError("Ошибка загрузки отзывов: " + error);
      else setFeedback(feedbackMsgs);
    } catch (err) {
      setError("Непредвиденная ошибка при загрузке");
    }
  }

  async function toggleApproval(item: FeedbackMessage): Promise<void> {
    try {
      const response = await fetch(`${addFeedbackMessageUrl}/${item.created_at}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_approved: !item.is_approved }),
      });

      if (!response.ok) throw new Error("Ошибка обновления отзыва");

      const updated: FeedbackMessage = await response.json();

      setFeedback((prev) =>
        prev.map((fb) => (fb.created_at === updated.created_at ? updated : fb))
      );
    } catch (err) {
      setError("Ошибка при изменении статуса");
    }
  }

  useEffect(() => { fetchFeedback(); }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (feedback.length === 0) setIsEmpty(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [feedback]);

  return (
    <div className={styles.content}>
      {isEmpty ? <NoneData title="Пока нет отзывов" text="Ожидайте, пока тут появятся сообщения" /> 
      : !feedback.length
        ? Array.from({ length: 10 }, (_, index) => <Skeletone key={index} />)
        : feedback.map((item) => (
          <div key={item.created_at} className={styles.reviewCard}>
            <h6>{new Date(item.created_at).toLocaleString()}</h6>
            <p className={styles.text}>“{item.msg}”</p>
            <h4 className={styles.name}>{`${item.last_name} ${item.first_name}`}</h4>
            <Button onClick={() => toggleApproval(item)} variant="outlined">
              {item.is_approved ? "Скрыть" : "Показать"}
            </Button>
          </div>
        ))
      }
    </div>
  );
}