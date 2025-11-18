import styles from "./styles.module.css";
import julia from "../../assets/julia.png";
import { Calendar } from "../../utils/Calendar";
import agenda from "../../assets/agenda.png";
import events from "../../assets/events.png";

export function Main() {
  return (
    <div className={styles.container}>
      <img src={julia} alt="Julia" className={styles.julia} />

      <div className={styles.calendarWrapper}>
        <Calendar />
       
       <div className={styles.agenda}>
        <img src={agenda} alt="Agenda" />
        <img src={events} alt="Events" />
        </div>
      </div>
    </div>
  );
}
