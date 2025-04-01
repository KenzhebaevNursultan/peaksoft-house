import styles from "./About.module.css";

function Static({ text, number }) {
  return (
    <div className={styles.statistics}>
      <div className={styles.statisticsLine}>
        <p className={styles.statisticsP}>{number}</p>
        <span className={styles.statisticsPlus}>+</span>
      </div>
      <div>
        <p className={styles.statisticsText}>{text}</p>
      </div>
    </div>
  );
}

const statistics = [
  { id: "f1", number: 520, text: "Бүтүрүүчүлөр" },
  { id: "f2", number: 2000, text: "Окуучулар" },
  { id: "f3", number: 320, text: "Жумушка орношкондор" },
  { id: "f4", number: 50, text: "Менторлор" },
];

function Statistic() {
  return (
    <div className={styles.wrapper}>
      {statistics.map((item) => {
        return <Static text={item.text} number={item.number} key={item.id} />;
      })}
    </div>
  );
}

export default Statistic;
