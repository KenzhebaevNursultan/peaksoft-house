import Container from "../../layouts/Container";
import Title from "../UI/Title";
import styles from "./Graduates.module.css";
import o from "../../assets/graduates/o.png";
import sber from "../../assets/graduates/sber.png";
import kicb from "../../assets/graduates/kicb.png";
import pay from "../../assets/graduates/pay.png";
import wed from "../../assets/graduates/wed.png";
import fra from "../../assets/graduates/fra.png";
import our from "../../assets/graduates/our.png";
import inS from "../../assets/graduates/in.png";

const COMPANIES = [
  { id: "s1", icon: o, alt: "O!" },
  { id: "s2", icon: sber, alt: "Сбер!" },
  { id: "s3", icon: kicb, alt: "KICB!" },
  { id: "s4", icon: pay, alt: "paydala!" },
  { id: "s5", icon: wed, alt: "webdevs!" },
  { id: "s6", icon: fra, alt: "fraxis!" },
  { id: "s7", icon: our, alt: "outsmartly!" },
  { id: "s8", icon: inS, alt: "InStat!" },
];

function Graduates() {
  return (
    <div className={styles.about}>
      <Container>
        <Title title="Биздин буТуруучулор кайсыл жерлерде иштейт" />
        <div className={styles.companies}>
          {COMPANIES.map((item) => {
            return (
              <div key={item.id} className={styles.companiesCard}>
                <div className={styles.companiesCardImage}>
                  <img src={item.icon} alt={item.alt} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Graduates;
