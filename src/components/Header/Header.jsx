import { useState } from "react";
import { Container } from "../Container/Container";
import { MobileMenu } from "./MobileMenu/MobileMenu";

import styles from "./Header.module.scss";
import Logo from "../../images/logo.svg";
import User from "../../images/user.svg";
import { IoIosArrowDown } from "react-icons/io";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={`${styles.header} ${isOpen ? styles.open : ""}`}>
        <Container>
          <div className={styles.header__wrap}>
            <img className={styles.header__logo} src={Logo} alt="logo" />
            <nav className={styles.header__nav}>
              <ul className={styles.header__list}>
                <li className={styles.header__item}>
                  <a href="#" className={styles.header__link}>
                    Who we are
                  </a>
                </li>
                <li className={styles.header__item}>
                  <a href="#" className={styles.header__link}>
                    Contacts
                  </a>
                </li>
                <li className={styles.header__item}>
                  <a href="#" className={styles.header__link}>
                    Menu
                  </a>
                </li>
              </ul>
            </nav>
            <div className={styles.header__actions}>
              <button className={styles.header__signup}>Sign Up</button>
              <img className={styles.header__user} src={User} alt="user avatar" />
            </div>
            <div className={styles.header__mobile}>
              <button className={`${styles.header__btn} ${isOpen ? styles.open : ""}`} onClick={() => setIsOpen(!isOpen)}>
                Menu
                <IoIosArrowDown />
              </button>
            </div>
          </div>
        </Container>
      </header>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
