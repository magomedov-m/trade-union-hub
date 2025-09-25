"use client";
import styles from "./Services.module.scss";
import { motion } from "framer-motion";
import { pageVariables, pageTransitions } from "../_pageAnimations";

const Services: React.FC = () => {
  return (
    <motion.div
      exit={pageVariables.out}
      animate={pageVariables.in}
      initial={pageVariables.out}
      transition={pageTransitions}
      className={styles.container}
    >
      <h1 className={styles.title}>Наши функции</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Образовательные и профессиональные возможности
        </h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            Школа профсоюзного актива: организация обучающих мероприятий для
            развития лидерских и организаторских навыков студентов.
          </li>
          <li className={styles.item}>
            Стажировки и практика: содействие в прохождении стажировок в
            медицинских учреждениях и организациях.
          </li>
          <li className={styles.item}>
            Научная поддержка: финансирование участия в конференциях, семинарах
            и олимпиадах.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Медицинская и психологическая поддержка
        </h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            Медицинские осмотры: организация регулярных медицинских осмотров и
            консультаций.
          </li>
          <li className={styles.item}>
            Психологическая помощь: предоставление консультаций и поддержки в
            трудных жизненных ситуациях.
          </li>
          <li className={styles.item}>
            Санаторно-курортное лечение: содействие в получении путевок на
            оздоровление.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Жилищно-бытовые условия</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            Контроль условий проживания: мониторинг состояния общежитий и
            содействие в решении бытовых вопросов.
          </li>
          <li className={styles.item}>
            Конкурсы на лучшее общежитие: проведение мероприятий, направленных
            на улучшение условий проживания студентов.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Культурно-массовая и спортивная деятельность
        </h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            Организация мероприятий: проведение концертов, фестивалей, экскурсий
            и других культурных мероприятий.
          </li>
          <li className={styles.item}>
            Спортивные соревнования: организация и участие в спортивных
            мероприятиях и спартакиадах.
          </li>
          <li className={styles.item}>
            Поддержка творческих коллективов: финансирование и помощь в
            организации выступлений и конкурсов.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Трудоустройство и карьерное развитие
        </h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            Временная занятость: содействие в поиске временной работы для
            студентов.
          </li>
          <li className={styles.item}>
            Карьерные консультации: проведение тренингов и семинаров по вопросам
            трудоустройства и построения карьеры.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Контактная информация</h2>
        <p>Адрес: г. Махачкала, пл. Ленина, 1</p>
        <p>Телефон: +7 (8722) 67-07-94</p>
        <p>Электронная почта: dgma@list.ru</p>
      </section>
    </motion.div>
  );
};

export default Services;
