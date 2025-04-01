import Container from "../../layouts/Container";
import Title from "../UI/Title";
import styles from "./Test.module.css";

function Test() {
  return (
    <div className={styles.about}>
      <Container>
        <Title title="Азыр жазап жатам бат эле" />
      </Container>
    </div>
  );
}

export default Test;
