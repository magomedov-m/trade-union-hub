import React, { useEffect, useState } from "react";
import styles from "./FeedbackContainer.module.scss";
import { Button } from "@mui/material";
import Link from "next/link";
import { addFeedbackMessageUrl } from "../../backend/api/url";
import NoneData from "../NoneData/NoneData";

interface FeedbackMessage {
  is_approved: boolean;
  created_at: number | string;
  first_name: string;
  last_name: string;
  msg: string;
}

export default function EventsContainer() {
  const [approvedFeedback, setApprovedFeedback] = useState<FeedbackMessage[]>(
    []
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFeedback();
  }, []);

  async function fetchFeedback(): Promise<void> {
    try {
      const response = await fetch(addFeedbackMessageUrl);
      const feedbackMsgs: FeedbackMessage[] = await response.json();

      setApprovedFeedback(feedbackMsgs);
    } catch {
      setError("Непредвиденная ошибка при загрузке отзывов");
    }
  }

  return (
    <div className={styles.feedbackMessages}>
      <section className={styles.reviews}>
        <h2>Отзывы о нашей организации</h2>
        <div className={styles.reviewsSlider}>
          {approvedFeedback.length ? (
            approvedFeedback.map((item: FeedbackMessage) => {
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
            })
          ) : (
            <NoneData
              title="Пока нет отзывов"
              text="Будьте первым, кто поделится своим мнением!"
            />
          )}
        </div>
        <Link href="/about">
          <Button className={styles.emptyButton} variant="outlined">
            Написать отзыв
          </Button>
        </Link>
      </section>
    </div>
  );
}
