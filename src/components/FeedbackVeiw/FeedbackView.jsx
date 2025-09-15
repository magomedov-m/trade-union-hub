import React, { useEffect, useState } from "react";
import styles from "./FeedbackView.module.scss";
import supabase from "@/api/supabaseClientFeedback";
import { Button } from "@mui/material";
import Skeletone from "../Skeletone/Skeletone";

export default function FeedbackView() {
  const [feedback, setFeedback] = useState([
    {
      is_approved: true,
      created_at: "2025-09-15T10:15:30",
      text: "Отличная организация! Всегда поддерживают сотрудников.",
      first_name: "Алексей",
      last_name: "Иванов",
    },
    {
      is_approved: true,
      created_at: "2025-09-14T09:45:10",
      text: "Очень полезные мероприятия и тренинги.",
      first_name: "Мария",
      last_name: "Петрова",
    },
    {
      is_approved: true,
      created_at: "2025-09-13T12:30:00",
      text: "Профессиональная команда, с которой приятно работать.",
      first_name: "Игорь",
      last_name: "Сидоров",
    },
    {
      is_approved: true,
      created_at: "2025-09-12T14:20:45",
      text: "Спасибо за внимательное отношение к каждому сотруднику.",
      first_name: "Елена",
      last_name: "Кузнецова",
    },
    {
      is_approved: true,
      created_at: "2025-09-11T08:10:55",
      text: "Организация помогает развиваться и учиться новому.",
      first_name: "Дмитрий",
      last_name: "Морозов",
    },
    {
      is_approved: true,
      created_at: "2025-09-10T16:05:20",
      text: "Отличная коммуникация и поддержка коллег.",
      first_name: "Анна",
      last_name: "Васильева",
    },
    {
      is_approved: true,
      created_at: "2025-09-09T11:50:15",
      text: "Рекомендую всем сотрудникам участвовать в мероприятиях. Рекомендую всем сотрудникам участвовать в мероприятиях.",
      first_name: "Сергей",
      last_name: "Федоров",
    },
    {
      is_approved: true,
      created_at: "2025-09-08T13:40:30",
      text: "Очень доброжелательная атмосфера и поддержка руководства.",
      first_name: "Ольга",
      last_name: "Николаева",
    },
    {
      is_approved: true,
      created_at: "2025-09-07T15:25:50",
      text: "Получила много полезной информации на тренингах.",
      first_name: "Ксения",
      last_name: "Смирнова",
    },
    {
      is_approved: true,
      created_at: "2025-09-06T09:05:10",
      text: "Замечательная организация, с которой приятно сотрудничать.",
      first_name: "Владимир",
      last_name: "Алексеев",
    },
  ]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFeedback();
  }, []);

  async function fetchFeedback() {
    try {
      const { data, error } = await supabase
        .from("feedback_message")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) setError("Ошибка загрузки отзывов:", error);
      else {
        setFeedback(data);
      }
    } catch (err) {
      setError("Непредвиденная ошибка при загрузке:", error);
    }
  }

  async function update(id, isApproved) {
    const { error } = await supabase
      .from("feedback_message")
      .update({ is_approved: !isApproved })
      .eq("id", id);
  }
  return (
    <div className={styles.content}>
      {!feedback.length
        ? Array.from({ length: 10 }, (_, index) => <Skeletone key={index} />)
        : feedback.map((item, idx) => {
            return (
              <div key={idx} className={styles.reviewCard}>
                <h6>{`${item.created_at}`.slice(0, 19)}</h6>
                <p className={styles.text}>“{item.text}”</p>
                <h4 className={styles.name}>{`${item.last_name} ${item.first_name}`}</h4>
                <Button
                  onClick={() => update(item.id, item.is_approved)}
                  variant="outlined"
                >
                  {item.is_approved ? "Скрыть" : "Одобрить"}
                </Button>
              </div>
            );
          })}
    </div>
  );
}
