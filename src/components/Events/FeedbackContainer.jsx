import React, { useEffect, useState } from "react";
import styles from "./FeedbackContainer.module.scss";
import { Button } from "@mui/material";
import Link from "next/link";
import supabase from "@/api/supabaseClient";

export default function EventsContainer() {
  const [approvedFeedback, setApprovedFeedback] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApprovedFeedback();
  }, []);

  async function fetchApprovedFeedback() {
    try {
      const { data, error } = await supabase
        .from("feedback_message")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) setError("Ошибка загрузки отзывов:", error);
      else {
        setApprovedFeedback(data);
      }
    } catch (err) {
      setError("Непредвиденная ошибка при загрузке:", error);
    }
  }
  return (
    <div className={styles.feedbackMessages}>
      {/* Reviews Section */}
      <section className={styles.reviews}>
        <h2>Отзывы о нашей организации</h2>
        <div className={styles.reviewsSlider}>
          {approvedFeedback.map((item, idx) => {
            if (item.is_approved) {
              return (
                <div className={styles.reviewCard} key={idx}>
                  <h6>{`${item.created_at}`.slice(0, 19)}</h6>
                  <p>“{item.text}”</p>
                  <h4>{`${item.last_name} ${item.first_name}`}</h4>
                </div>
              );
            }
          })}
        </div>
      </section>

      <div className={styles.content}>
        <Link href="/about">
          <Button>Написать отзыв</Button>
        </Link>
      </div>
    </div>
  );
}
