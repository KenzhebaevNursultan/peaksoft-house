import Container from "./Container";
import styles from "./AppLayout.module.css";
import logo from "../../src/assets/svg/peak.svg";
import inst from "../../src/assets/icons/inst.svg";
import tele from "../../src/assets/icons/telegram.svg";
import whatsapp from "../../src/assets/icons/whatsapp.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <img src={logo} alt="peaksoft" />
          <div className={styles.address}>
            <ul className={styles.addressList}>
              <li>
                <a href="https://go.2gis.com/eLaFR" target="_blank">
                  г.Бишкек ул.Гражданская 119
                </a>
              </li>
              <li>
                <a href="mailto:school@peaksoft.us">school@peaksoft.us</a>
              </li>
              <li>
                <a href="tel:+996500344433">+996 500 344 433</a>
              </li>
            </ul>
          </div>
          <div className={styles.social}>
            <ul className={styles.socialList}>
              <li>
                <a
                  href="https://www.instagram.com/peaksoft.house?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                >
                  <img src={inst} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://t.me/+996500344433" target="_blank">
                  <img src={tele} alt="Telegram" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/996500344433" target="_blank">
                  <img src={whatsapp} alt="WhatsApp" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.reserved}>
          © Copyright PeakSoft. All Rights Reserved
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
