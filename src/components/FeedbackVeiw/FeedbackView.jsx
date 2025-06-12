import React, { useEffect, useState } from "react";
import styles from "./FeedbackView.module.scss";
import supabase from "@/api/supabaseClient";
import { Button } from "@mui/material";
import Skeletone from "../Skeletone/Skeletone";

export default function FeedbackView() {
  const [feedback, setFeedback] = useState([]);
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
                <p>“{item.text}”</p>
                <h4>{`${item.last_name} ${item.first_name}`}</h4>
                <Button onClick={() => update(item.id, item.is_approved)} variant="outlined">
                  {item.is_approved ? "Скрыть" : "Одобрить"}
                </Button>
              </div>
            );
          })}
    </div>
  );
}
