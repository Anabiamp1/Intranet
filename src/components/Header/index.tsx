import { useState } from "react";
import banco from "../../assets/banco.png";
import styles from "./styles.module.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className={styles.container}>
        <img src={banco} alt="Logo" className={styles.logo} />

        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.search}
            placeholder="Pesquisar..."
          />
          <button className={styles.iconButton}>
            <img src="/src/assets/lupa.svg" alt="Buscar" />
          </button>
        </div>

        <div className={styles.rightIcons}>
          <button className={styles.homeButton}>
            <img src="/src/assets/home.svg" alt="Home" />
          </button>

          <button className={styles.menuButton} onClick={toggleMenu}>
            <img src="/src/assets/menu.svg" alt="Menu" />
          </button>

          {/* Painel do menu */}
          <div className={`${styles.menuPanel} ${menuOpen ? styles.active : ""}`}>
            <a href="#">Minha Conta</a>
            <a href="#">Chat Equipe</a>
            <a href="#">Sugestões</a>
            <a href="#">Pesquisas</a>
            <a href="#">Configurações</a>
            <a href="#">Sair</a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`${styles.menuOverlay} ${menuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      />
    </>
  );
}