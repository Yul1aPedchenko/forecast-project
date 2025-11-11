import { useState } from "react";
import styles from "./AuthModal.module.scss";

export const AuthModal = ({ isModalOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  return (
    <>
      {isModalOpen &&
        (isSignUp ? (
          <div className={styles.overlay} onClick={onClose}>
            <div className={`${styles.modal} ${isModalOpen ? "" : styles.active}`} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modal__wrap}>
                <h2 className={styles.modal__title}>Sign Up</h2>
                <form>
                  <label htmlFor="username">
                    Username
                    <input type="text" name="username" id="username" placeholder="Username" />
                  </label>
                  <label htmlFor="email">
                    E-Mail
                    <input type="text" name="email" id="email" placeholder="E-Mail" />
                  </label>
                  <label htmlFor="password">
                    Password
                    <input type="text" name="password" id="password" placeholder="Password" />
                  </label>
                  <button type="submit">Sign up</button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsSignUp(false);
                    }}
                  >
                    Already have an account? <span>Log In</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.overlay} onClick={onClose}>
            <div className={`${styles.modal} ${isModalOpen ? "" : styles.active}`} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modal__wrap}>
                <h2 className={styles.modal__title}>Log In</h2>
                <form>
                  <label htmlFor="email">
                    E-Mail
                    <input type="text" name="email" id="email" placeholder="E-Mail" />
                  </label>
                  <label htmlFor="password">
                    Password
                    <input type="text" name="password" id="password" placeholder="Password" />
                  </label>
                  <button type="submit">Log In</button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsSignUp(true);
                    }}
                  >
                    Don't have an account? <span>Sign Up</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
