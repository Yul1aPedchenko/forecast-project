import { Container } from "../../Container/Container";
import styles from "./MobileMenu.module.scss";
import User from "../../../images/user.svg";
export const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && <div className={styles.backdrop} onClick={onClose}></div>}

      <div className={`${styles.mobile} ${isOpen ? styles.open : ""}`}>
        <Container>
          <div className={styles.mobile__wrap}>
            <nav className={styles.mobile__nav}>
              <ul className={styles.mobile__list}>
                <li className={styles.mobile__item}>
                  <a href="#" className={styles.mobile__link}>Who we are</a>
                </li>
                <li className={styles.mobile__item}>
                  <a href="#" className={styles.mobile__link}>Contacts</a>
                </li>
                <li className={styles.mobile__item}>
                  <a href="#" className={styles.mobile__link}>Menu</a>
                </li>
              </ul>
            </nav>
            <div className={styles.mobile__actions}>
              <img className={styles.mobile__user} src={User} alt="user avatar" />
              <button className={styles.mobile__signup}>Sign Up</button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
