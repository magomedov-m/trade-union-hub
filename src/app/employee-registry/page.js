"use client";
import React, { useState } from "react";
import styles from "./EmployeeRegistry.module.scss";
import { motion } from "framer-motion";
import { pageVariables, pageTransitions } from "../_pageAnimations";
import { Button } from "@mui/material";

const employees = [
  {
    id: 1,
    fullName: "Шахбанов Руслан Казбекович",
    faculty: "Кафедра гистологии",
    phone: null,
    email: null,
    experience: null,
    education: null,
    skills: null,
    photo: null,
    socialMedia: null,
    position: "Заведующий",
  },
  {
    id: 2,
    fullName: "Мусаева Венера Рамазановна",
    faculty: "Библиотека",
    phone: null,
    email: null,
    experience: null,
    education: null,
    skills: null,
    photo: null,
    socialMedia: null,
    position: "Директор",
  },
  {
    id: 3,
    fullName: "Мустафаев Иманали Мустафаевич",
    faculty: "Управление по работе с обучающимися",
    phone: null,
    email: null,
    experience: null,
    education: null,
    skills: null,
    photo: null,
    socialMedia: null,
    position: "Начальник",
  },
  {
    id: 4,
    fullName: "Ибрагимов Абдулмажид Магомедович",
    faculty: "Управление безопасности",
    phone: null,
    email: null,
    experience: null,
    education: null,
    skills: null,
    photo: null,
    socialMedia: null,
    position: "Помощник начальника управления",
  },
  {
    id: 5,
    fullName: "Гарунова Раисат Эдуардовна",
    faculty: "Кафедра физиологии",
    phone: null,
    email: null,
    experience: null,
    education: null,
    skills: null,
    photo: null,
    socialMedia: null,
    position: "Старший преподаватель",
  },
  {
    id: 6,
    fullName: "Ахмедова Пасихат Гитиномагомедовна",
    faculty: "Медицинский колледж",
    phone: null,
    email: null,
    experience: null,
    education: null,
    skills: null,
    photo: null,
    socialMedia: null,
    position: "Преподаватель сестринского дела",
  },
  {
    id: 7,
    fullName: "Дамаданова Аминат Гаджимагомедовна",
    faculty: "Бухгалтерия",
    phone: null,
    email: null,
    experience: null,
    education: null,
    skills: null,
    photo: null,
    socialMedia: null,
    position: "Бухгалтер расчетного отдела",
  },
  {
    id: 8,
    fullName: "Закарияева Индира Магомедовна",
    faculty: "Студентка",
    phone: null,
    email: null,
    experience: null,
    education: null,
    skills: null,
    photo: null,
    socialMedia: null,
    position: "Студентка",
  },
  {
    id: 9,
    fullName: "Абдулгалимов Рамазан Меджидович",
    faculty: "Кафедра Биофизики, информатики и мед. аппаратуры",
    phone: null,
    email: null,
    experience: null,
    education: null,
    skills: null,
    photo: null,
    socialMedia: null,
    position: "Заведующий",
  },
  {
    id: 10,
    fullName: "Гусейнова Сабина Тагировна",
    faculty: "Кафедра анатомии человека",
    phone: null,
    email: null,
    experience: null,
    education: null,
    skills: null,
    photo: null,
    socialMedia: null,
    position: "Заведующая",
  },
];

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


const EmployeeCard = ({ employee }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.info}>
          <h3>{employee.fullName}</h3>
          <p>
            - {employee.position}
          </p>
          <span className={styles.status}>{employee.faculty}</span>
        </div>
        <button
          className={styles.expandButton}
          onClick={() => setExpanded(!expanded)}
        >
        </button>
      </div>

      <div className={styles.details}>
        <div className={styles.contacts}>
          <a href={`mailto:${employee.email}`}></a>
          <a href={`tel:${employee.phone}`}></a>
          <a href={employee.linkedin} target="_blank" rel="noreferrer"></a>
        </div>
        <Button className={styles.messageBtn} variant="outlined">Подробно</Button>
      </div>
    </div>
  );
};


