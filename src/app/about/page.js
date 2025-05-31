"use client";
import { motion } from "framer-motion";
import { pageVariables, pageTransitions } from "../_pageAnimations";
import styles from "./AboutUsPage.module.scss";

export default function About() {
  return (
    <motion.div
      exit={pageVariables.out}
      animate={pageVariables.in}
      initial={pageVariables.out}
      transition={pageTransitions}
      className={styles.container}
    >
      <section className={styles.hero}>
        <h1 className={styles.title}>О нас</h1>
        <p className={styles.subtitle}>
          Профсоюзная организация Дагестанского государственного медицинского
          университета — это место, где заботятся о студентах и сотрудниках
          университета.
        </p>
        <button className={styles.ctaButton}>Узнать больше</button>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <h2>Наша миссия</h2>
        <p>
          Наша главная цель — защита прав и интересов членов профсоюза. Мы
          стремимся обеспечить комфортные условия для работы, обучения и отдыха
          сотрудников и студентов.
        </p>
        <p>
          Организация регулярно проводит мероприятия, тренинги и встречи для
          улучшения профессионального и личного развития своих членов.
        </p>
        <img
          className={styles.missionImage}
          src="/images/teamwork.svg"
          alt="Командная работа"
        />
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Что мы предлагаем?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <img src="/images/news.svg" alt="Новости" />
            <h3>Актуальные новости</h3>
            <p>Будьте в курсе всех событий и мероприятий в университете.</p>
          </div>
          <div className={styles.featureCard}>
            <img src="/images/calendar.svg" alt="Календарь" />
            <h3>Календарь мероприятий</h3>
            <p>Следите за предстоящими событиями и участвуйте в них.</p>
          </div>
          <div className={styles.featureCard}>
            <img src="/images/documents.svg" alt="Документы" />
            <h3>Полезные документы</h3>
            <p>Получите доступ к важным материалам и ресурсам.</p>
          </div>
          <div className={styles.featureCard}>
            <img src="/images/support.svg" alt="Поддержка" />
            <h3>Поддержка</h3>
            <p>Мы всегда готовы ответить на ваши вопросы и помочь.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <h2>Наша команда</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img src="/images/team1.jpg" alt="Член команды" />
            <h3>Иван Иванов</h3>
            <p>Председатель профсоюза</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/team2.jpg" alt="Член команды" />
            <h3>Анна Петрова</h3>
            <p>Заместитель председателя</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/team3.jpg" alt="Член команды" />
            <h3>Магомед Алиев</h3>
            <p>Ответственный за мероприятия</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className={styles.reviews}>
        <h2>Отзывы наших членов</h2>
        <div className={styles.reviewsSlider}>
          <div className={styles.reviewCard}>
            <p>
              “Профсоюз помог мне в трудной ситуации на работе. Очень благодарен
              за поддержку и внимание к моим проблемам!”
            </p>
            <h4>Алиса Р.</h4>
          </div>
          <div className={styles.reviewCard}>
            <p>
              “Участие в мероприятиях профсоюза — это всегда интересно и
              познавательно. Спасибо за такую активную работу!”
            </p>
            <h4>Руслан К.</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <h2>Свяжитесь с нами</h2>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Ваше имя" required />
          <input type="email" placeholder="Ваш email" required />
          <textarea placeholder="Ваше сообщение" required></textarea>
          <button type="submit">Отправить</button>
        </form>
        <div className={styles.contactInfo}>
          <p>Адрес: г. Махачкала, ул. Ленина, 45</p>
          <p>Телефон: +7 (8722) 56-78-90</p>
          <p>Email: profmed@dsmu.ru</p>
        </div>
      </section>
    </motion.div>
  );
}
