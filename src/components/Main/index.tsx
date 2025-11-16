import styles from "./styles.module.css";
import julia from "../../assets/julia.png";
import { Calendar } from "../../utils/Calendar";

export function Main() {
  return (
    <div className={styles.container}>
      <img src={julia} alt="Julia" className={styles.julia} />

      <Calendar />
    </div>
  );
}