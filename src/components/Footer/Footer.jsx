import { Container } from "../Container/Container";

import Logo from "../../images/logo.svg";
import Inst from "../../images/footer/inst.svg";
import Fb from "../../images/footer/fb.svg";
import Ws from "../../images/footer/ws.svg";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <Container>
        <div className={styles.footer__wrapper}>
          <a href="#" className={styles.footer__logo}>
            <img className={styles.footer__icon} src={Logo} alt="logo" />
          </a>
          <div className={styles.footer__wrap}>
            <div className={styles.footer__subwrap}>
              <h2 className={styles.footer__title}>Address</h2>
              <a href="https://maps.app.goo.gl/azMYyCBvhG8EMtrNA" className={styles.footer__link}>
                Svobody str. 35 Kyiv <br /> Ukraine
              </a>
            </div>
            <div className={styles.footer__subwrap}>
              <h2 className={styles.footer__title}>Contact us</h2>
              <ul className={styles.footer__list}>
                <li>
                  <a href="https://www.instagram.com/forecast_platform?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className={styles.footer__sm}>
                    <img src={Inst} alt="inst" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/wxforecast/" className={styles.footer__sm}>
                    <img src={Fb} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@weather?is_from_webapp=1&sender_device=pc" className={styles.footer__sm}>
                    <img src={Ws} alt="tt" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
