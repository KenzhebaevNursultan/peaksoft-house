import Container from "../../layouts/Container";
import Title from "../UI/Title";
import styles from "./Lesson.module.css";
import one from "../../assets/lessons/bir.jpg";
import eki from "../../assets/lessons/eki.jpg";
import uch from "../../assets/lessons/uch.jpg";
import tort from "../../assets/lessons/tort.jpg";
import besh from "../../assets/lessons/besh.jpg";

function Lessons() {
  return (
    <div className={styles.about}>
      <Container>
        <Title title="биздин сабактарыбыз кандай өтөт?" />
        <div className={styles.images}>
          <img src={one} alt="campuse" />
          <img src={eki} alt="campuse1" />
          <img src={uch} alt="campuse2" />
          <img src={tort} alt="campuse3" />
          <img src={besh} alt="campuse4" />
        </div>
      </Container>
    </div>
  );
}

export default Lessons;
