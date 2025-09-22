import React, { useEffect, useState } from "react";
import styles from "./FeedbackContainer.module.scss";
import { Button } from "@mui/material";
import Link from "next/link";
import { addFeedbackMessageUrl } from "@/backend/api/url";

export default function EventsContainer() {
  const [approvedFeedback, setApprovedFeedback] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFeedback();
  }, []);

  async function fetchFeedback() {
    try {
      const response = await fetch(addFeedbackMessageUrl);
      const feedbackMsgs = await response.json();

      if (error) setError("Ошибка загрузки отзывов:", error);
      else {
        setApprovedFeedback(feedbackMsgs);
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
          {approvedFeedback.map((item) => {
            if (item.is_approved) {
              return (
                <div className={styles.reviewCard} key={item.created_at}>
                  <h3>{new Date(item.created_at).toLocaleString()}</h3>
                  <br />
                  <p>“{item.msg}”</p>
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
