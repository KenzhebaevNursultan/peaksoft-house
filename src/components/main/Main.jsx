import styles from "./Main.module.css";
import peaksoftSvg from "../../assets/svg/peaksoft.svg";
// import computer from "../../assets/svg/computer.svg";
import circle from "../../assets/svg/cicle.svg";
import Container from "../../layouts/Container";
import inst from "../../assets/icons/inst.svg";
import tele from "../../assets/icons/telegram.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";

function Main() {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.wrapper}>
          <h1>
            <img
              className={styles.peak}
              src={peaksoftSvg}
              alt="peaksoft-house"
            />
          </h1>
          <div className={styles.computerImage}>
            <img src={circle} alt="peaksoft-computer" />
          </div>
        </div>

        <div className={styles.mainAddress}>
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
      </Container>
    </div>
  );
}

export default Main;
