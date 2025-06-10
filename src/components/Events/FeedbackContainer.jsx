import React, { useState } from "react";
import styles from "./FeedbackContainer.module.scss";
import { Button } from "@mui/material";
import Link from "next/link";

export default function EventsContainer() {
  const [data, setData] = useState([]);
  async function getApprovedFeedback() {
    
  }
  return (
    <div className={styles.feedbackMessages}>
      {/* Reviews Section */}
      <section className={styles.reviews}>
        <h2>Отзывы о нашей организации</h2>
        <div className={styles.reviewsSlider}>
          <div className={styles.reviewCard}>
            <p>
              “Профсоюз помог мне в трудной ситуации на работе. Очень благодарна
              за поддержку и внимание к моим проблемам!”
            </p>
            <h4>Мусаева Венера</h4>
          </div>
          <div className={styles.reviewCard}>
            <p>
              “Участие в мероприятиях профсоюза — это всегда интересно и
              познавательно. Спасибо за такую активную работу!”
            </p>
            <h4>Шахбанов Руслан</h4>
          </div>
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
