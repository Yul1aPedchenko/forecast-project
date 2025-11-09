import styles from "./AuthModal.module.scss";
export const AuthModal = ({ isOpen }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  return (
    <>
      <div className={`${styles.modal} ${isOpen ? "" : styles.active}`}>
        <div className={styles.overlay}>
          <div className={styles.modal__wrap}>
            <h2 className={styles.modal__title}>Sign Up</h2>
            <form>
              <label htmlFor="">
                Username
                <input type="text" name="username" id="username" placeholder="Username" />
              </label>
              <label htmlFor="">
                E-Mail
                <input type="text" name="email" id="email" placeholder="E-Mail" />
              </label>
              <label htmlFor="">
                Password
                <input type="text" name="password" id="password" placeholder="Password" />
              </label>
              <button type="submit">Sign up</button>
              <a href="#">
                Already have an account? <span>Log In</span>
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
