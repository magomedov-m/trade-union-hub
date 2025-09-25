"use client";
import React, { useEffect, useState } from "react";
import styles from "./EmployeeRegistry.module.scss";
import { motion } from "framer-motion";
import { pageVariables, pageTransitions } from "../_pageAnimations";
import { createAccountUrl } from "../../backend/api/url.ts";
import { employeesDefaultData } from "../../backend/data/defaultData";

interface Employee {
  fullName?: string;
  position?: string;
  faculty?: string;
  email?: string;
  phone?: string;
  socialMedia?: string;
  experience?: string;
  education?: string;
  skills?: string;
}

const EmployeeRegistry: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  async function getEmployees() {
    try {
      let res = await fetch(createAccountUrl);
      let data: Employee[] = await res.json();
      setEmployees(data);
      return data;
    } catch (err) {
      console.error("Ошибка при получении данных о сотрудниках:", err);
    }
  }

  useEffect(() => {
    getEmployees();
  }, []);

  // Поисковик сотрудников по ФИО (пока не работает из-за изменений в структуре объекта)
  const [name, setName] = useState("");
  let filteredEmployee = employees.filter((item) => {
    return (
      item.fullName.split(" ")[0].toLowerCase().includes(name.toLowerCase()) ||
      item.fullName.split(" ")[1].toLowerCase().includes(name.toLowerCase()) ||
      item.fullName.split(" ")[2].toLowerCase().includes(name.toLowerCase())
    );
  });

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
        <input
          type="text"
          placeholder="Поиск по ФИО..."
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.grid}>
        {employees.length
          ? employees.map((emp) => (
              <EmployeeCard key={emp.email} employee={emp} />
            ))
          : employeesDefaultData.map((emp) => (
              <EmployeeCard key={emp.id} employee={emp} />
            ))}
      </div>
    </motion.div>
  );
};

export default EmployeeRegistry;

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div key={employee.email} className={styles.card}>
      <div className={styles.header}>
        <div className={styles.info}>
          <h4 className={styles.fullName}>
            {employee.fullName || "😎 Имя в процессе заполнения"}
          </h4>
          <p>- {employee.position || "🏢 Пока не назначена"}</p>
          <span className={styles.status}>
            {employee.faculty || "🤷‍♂️ Пока нет информации"}
          </span>
        </div>
        <button
          className={styles.expandButton}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "▲" : "▼"}
        </button>
      </div>

      {expanded && (
        <div className={styles.details}>
          <div className={styles.contacts}>
            Почта:{" "}
            <a href={`mailto:${employee.email || ""}`}>
              {employee.email || "😅 Email скрыт"}
            </a>
            <br />
            Телефон:
            <a href={`tel:${employee.phone || ""}`}>
              {employee.phone || "📞 Нет телефона"}
            </a>
            <br />
            {`${employee.socialMedia.split(" ")[0]} `}
            <a
              href={employee.socialMedia || "#"}
              target="_blank"
              rel="noreferrer"
            >
              {employee.socialMedia.split(" ")[1] || "🌐 Нет соц. сети"}
            </a>
          </div>

          <div className={styles.extraInfo}>
            <p>Опыт: {employee.experience || "💼 В процессе накопления"}</p>
            <p>Образование: {employee.education || "🎓 Пока в пути"}</p>
            <p>Навыки: {employee.skills || "😉 В процессе изучения"}</p>
          </div>
        </div>
      )}
    </div>
  );
};
