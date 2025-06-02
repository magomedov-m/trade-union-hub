"use client";
import React, { useState } from "react";
import styles from "./EmployeeRegistry.module.scss";
import { motion } from "framer-motion";
import { pageVariables, pageTransitions } from "../_pageAnimations";
// import { FaEnvelope, FaPhone, FaLinkedin, FaUserCircle } from 'react-icons/fa';
// import { MdExpandMore } from 'react-icons/md';

const employees = [
  {
    id: 1,
    name: "Иван Петров",
    position: "Разработчик",
    department: "IT",
    status: "В офисе",
    startDate: "2021-04-12",
    bio: "Закончил МГТУ, опыт работы в стартапах и крупных компаниях.",
    education: "МГТУ, Информатика",
    skills: ["JavaScript", "React", "Node.js"],
    email: "ivan.petrov@example.com",
    phone: "+7 123 456-78-90",
    linkedin: "https://linkedin.com/in/ivanpetrov",
  },
  // Другие сотрудники...
];

const EmployeeCard = ({ employee }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {/* <FaUserCircle className={styles.avatar} /> */}
        <div className={styles.info}>
          <h3>{employee.name}</h3>
          <p>
            {employee.position} —{" "}
            <span className={styles[employee.department.toLowerCase()]}>
              {employee.department}
            </span>
          </p>
          <span className={styles.status}>{employee.status}</span>
        </div>
        <button
          className={styles.expandButton}
          onClick={() => setExpanded(!expanded)}
        >
          {/* <MdExpandMore className={expanded ? styles.rotated : ''} /> */}
        </button>
      </div>

      <div className={styles.details}>
        <p>
          <strong>Дата начала:</strong> {employee.startDate}
        </p>
        <p>
          <strong>Образование:</strong> {employee.education}
        </p>
        <p>
          <strong>Навыки:</strong> {employee.skills.join(", ")}
        </p>
        <p>
          <strong>Биография:</strong> {employee.bio}
        </p>
        <div className={styles.contacts}>
          <a href={`mailto:${employee.email}`}></a>
          <a href={`tel:${employee.phone}`}></a>
          <a href={employee.linkedin} target="_blank" rel="noreferrer"></a>
        </div>
        <button className={styles.messageBtn}>Отправить сообщение</button>
      </div>
    </div>
  );
};

const EmployeeRegistry = () => {
  return (
    <motion.div
      exit={pageVariables.out}
      animate={pageVariables.in}
      initial={pageVariables.out}
      transition={pageTransitions}
      className={styles.registryPage}
    >
      <h1>Реестр сотрудников</h1>
      <div className={styles.searchSection}>
        <input type="text" placeholder="Поиск по имени, должности, отделу..." />
        {/* Возможность фильтрации по отделам и ролям */}
      </div>
      <div className={styles.grid}>
        {employees.map((emp) => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
      </div>
    </motion.div>
  );
};

export default EmployeeRegistry;
