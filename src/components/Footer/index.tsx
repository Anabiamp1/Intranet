import { useState } from "react";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <div className={styles.container}>
      <a href="#" className={styles.linkutil}>Sobre a Empresa</a>
      <a href="#" className={styles.linkutil}>Imprensa</a>
      <a href="#" className={styles.linkutil}>Segurança</a>
      <a href="#" className={styles.linkutil}>Integridade</a>
      <a href="#" className={styles.linkutil}>Relação com investidores</a>
      <a href="#" className={styles.linkutil}>Sustentabilidade</a>
      <a href="#" className={styles.linkutil}>Preferência Cookies</a>
    
    </div>
  );
}