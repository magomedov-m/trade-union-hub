import React, { useEffect, useState } from "react";
import styles from "./FeedbackView.module.scss";
import supabase from "@/api/supabaseClientFeedback";
import { Button } from "@mui/material";
import Skeletone from "../Skeletone/Skeletone";
import { addFeedbackMessageUrl } from "@/backend/api/url";

export default function FeedbackView() {
  const [feedback, setFeedback] = useState([]);
  const [error, setError] = useState(null);

  async function fetchFeedback() {
    try {
      const response = await fetch(addFeedbackMessageUrl);
      const feedbackMsgs = await response.json();

      if (error) setError("Ошибка загрузки отзывов:", error);
      else {
        setFeedback(feedbackMsgs);
      }
    } catch (err) {
      setError("Непредвиденная ошибка при загрузке:", error);
    }
  }

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div className={styles.content}>
      {!feedback.length
        ? Array.from({ length: 10 }, (_, index) => <Skeletone key={index} />)
        : feedback.map((item) => {
            return (
              <div key={item.created_at} className={styles.reviewCard}>
                <h6>{new Date(item.created_at).toLocaleString()}</h6>
                <p className={styles.text}>“{item.msg}”</p>
                <h4
                  className={styles.name}
                >{`${item.last_name} ${item.first_name}`}</h4>
                <Button
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
