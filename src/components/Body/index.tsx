import { useState } from "react";
import styles from "./styles.module.css";
import comuni from "../../assets/comuni.jpg";
import comu from "../../assets/comu.jpg";
import treino from "../../assets/treino.jpg";
import bot1 from "../../assets/bot1.png";
import group4 from "../../assets/group4.png";
import group6 from "../../assets/group6.png";

export function Body() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Comunicados</h1>
      </div>

      <div className={styles.infoSection}>
        
        <div className={styles.item}>
          <img src={comuni} alt="comuni" className={styles.image} />
          <div className={styles.text}>
            <h1>Lorem ipsum dolor</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
              impedit voluptates sit quasi labore alias voluptatem, pariatur
              magnam nam, beatae unde vitae animi eligendi a!
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <img src={comu} alt="comu" className={styles.image} />
          <div className={styles.text}>
            <h1>Lorem ipsum dolor</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
              impedit voluptates sit quasi labore alias voluptatem, pariatur
              magnam nam, beatae unde vitae animi eligendi a!
            </p>
          </div>
        </div>
      </div>

      <div className={styles.separator}></div>

 <div className={styles.DocsSection}>
  <div className={styles.item}>
    <img src={treino} alt="treino" className={styles.treino} />
    <div className={styles.text}>
      <h1>Lorem ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
        impedit voluptates sit quasi labore alias voluptatem, pariatur
        magnam nam, beatae unde vitae animi eligendi a!
      </p>
    </div>
  </div>

  <div className={styles.item}>
    <img src={bot1} alt="bot1" className={styles.bot1} />
  
  </div>
</div>

<div className={styles.groupsContainer}>
  <div className={styles.item}>
    <img src={group4} alt="grupo4" className={styles.grupo4} />
  </div>

  <div className={styles.item}>
    <img src={group6} alt="grupo6" className={styles.grupo6} />
  </div>
</div>
    </>
  );
}