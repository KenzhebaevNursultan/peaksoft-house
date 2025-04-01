import styles from "./Main.module.css";
import peaksoftSvg from "../../assets/svg/peaksoft.svg";
// import computer from "../../assets/svg/computer.svg";
import circle from "../../assets/svg/cicle.svg";
import Container from "../../layouts/Container";

function Main() {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.wrapper}>
          <h1>
            <img src={peaksoftSvg} alt="peaksoft-house" />
          </h1>
          <div className={styles.computerImage}>
            <img src={circle} alt="peaksoft-computer" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Main;
