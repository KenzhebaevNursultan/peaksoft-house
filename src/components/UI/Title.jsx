import styles from "./Styles.module.css";

function Title({ title }) {
  return <h2 className={styles.appTitle}>{title}</h2>;
}

export default Title;
