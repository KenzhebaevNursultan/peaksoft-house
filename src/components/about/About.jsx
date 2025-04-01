import Container from "../../layouts/Container";
import Title from "../UI/Title";
import styles from "./About.module.css";
import team from "../../assets/images/team.png";
import Statistic from "./Statistic";

function About() {
  return (
    <div>
      <Container>
        <div className={styles.about}>
          <Title title="Биз жөнүндө" />
          <div className={styles.aboutContent}>
            <div>
              <p>
                <span>PeakSoft House</span> - бул PeakSoft IT компаниясынын
                онлайн жана офлайн окутуу курстары. Биз талап кылынган{" "}
                <span>Back-end (Java)</span> жана{" "}
                <span>Front-end (JavaScript)</span>, IT адистерин online -
                offline даярдайбыз. <span>Нольдон</span> баштап биринчи жумуш
                күнүнө чейин.
              </p>
              <p>
                <span>Peaksoft House</span> - сан эмес сапат учун иштейт. Себеби
                биздин программада темаларды бышыктоо учун, окуунун ар бир
                этабында студенттерге сынактар каралган. Эгерде студент окуунун
                бир этабын жакшы оздоштуро албаса, кайра ошол этапты окууга
                туура келет же болбосо окуудан четтетилет.
              </p>
              <p>
                <span>Peaksoft House 2020</span> - жылы ноябрь айында
                негизделген. Эн алгач окутуу онлайн форматында гана откорулгон.
                <span>2021-жылы июнь</span> айында <span>Бишкекте</span> кампус
                ачылып окутуунун офлайн форматы дагы киргизилген. Азыркы учурда
                Кыргызстанда гана эмес, Москва шаарында дагы филиалыбыз бар,
                ошол эле учурда дуйно жузу боюнча кыргыз тилинде билим алгысы
                келген студенттер онлайн форматында окушат.
              </p>
            </div>
            <div>
              <img src={team} alt="team-peaksoft" />
            </div>
          </div>
          <div className={styles.statistic}>
            <Title title="Статистика" />
            <Statistic />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
