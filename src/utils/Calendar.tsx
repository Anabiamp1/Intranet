import { useState } from "react";
import styles from "../Main/styles.module.css";

export function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthNames = [
    "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
    "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
  ];

  const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  function generateDays() {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const days = [];

    // dias em branco antes do 1
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={"b" + i}></div>);
    }

    // dias do mês
    for (let d = 1; d <= daysInMonth; d++) {
      const isToday =
        d === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();

      days.push(
        <div
          key={d}
          className={`${styles.day} ${isToday ? styles.today : ""}`}
        >
          {d}
        </div>
      );
    }

    return days;
  }

  function handlePrev() {
    setCurrentMonth((m) => (m === 0 ? 11 : m - 1));
    if (currentMonth === 0) setCurrentYear((y) => y - 1);
  }

  function handleNext() {
    setCurrentMonth((m) => (m === 11 ? 0 : m + 1));
    if (currentMonth === 11) setCurrentYear((y) => y + 1);
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHeader}>
        <button onClick={handlePrev}>◀</button>

        <h2>
          {monthNames[currentMonth]} {currentYear}
        </h2>

        <button onClick={handleNext}>▶</button>
      </div>

      <div className={styles.calendarWeekdays}>
        {weekdays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className={styles.calendarDays}>
        {generateDays()}
      </div>
    </div>
  );
}