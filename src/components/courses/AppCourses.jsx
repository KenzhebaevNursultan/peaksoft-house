import Container from "../../layouts/Container";
import Title from "../UI/Title";
import styles from "./AppCourses.module.css";

function AppCourses() {
  return (
    <div className={styles.about}>
      <Container>
        <Title title="IT курстар" />
      </Container>
    </div>
  );
}

export default AppCourses;
