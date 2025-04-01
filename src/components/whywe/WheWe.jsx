import Container from "../../layouts/Container";
import Title from "../UI/Title";
import styles from "./WheWe.module.css";
import one from "../../assets/whyus/first.png";
import two from "../../assets/whyus/second.png";
import third from "../../assets/whyus/third.png";
import four from "../../assets/whyus/four.png";
import five from "../../assets/whyus/five.png";
import six from "../../assets/whyus/six.png";

const WHYUSARRAY = [
  {
    icon: one,
    id: "o1",
    text: "Ментор менен жекеме-жеке иштоо. Жумасына 5 кун онлайн/офлайн менторго кайрылуу.",
    system: "Ментордук система",
  },
  {
    icon: two,
    id: "o2",
    text: "Сиздин онугуунуздун ар бир баскычында алган билиминизди текшерип туруу. Каталардын устунон иштоо.",
    system: "Студенттерди катуу козомолдоо",
  },
  {
    icon: third,
    id: "o3",
    text: "Кыргыз тилинде программалоону окутуу.",
    system: "Кыргыз тилинде окутуу",
  },
  {
    icon: four,
    id: "o4",
    text: "Биздин кампус жумасына 7 кун студенттер учун ачык. Кампуста окуу учун баардык шарттар каралган.",
    system: "Кампус",
  },
  {
    icon: five,
    id: "o5",
    text: "Биздин компаниядагы IT адистери, инструкторлор, менторлор жана студенттер менен чогуу журуу, барлашуу.",
    system: "Тыгыз байланыш",
  },
  {
    icon: six,
    id: "o6",
    text: "Биз студенттерибизге иштин биринчи кунуно чейин дайыма колдоо корсотобуз.",
    system: "Колдоо корсотуу",
  },
];

function WhyUsCard({ icon, system, text, alt }) {
  return (
    <div className={styles.card}>
      <div>
        <img src={icon} alt={alt} />
      </div>
      <div className={styles.system}>{system}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}

function WhyUs() {
  return (
    <div className={styles.about}>
      <Container>
        <Title title="Эмнеге бизди тандашат?" />
        <p className={styles.title}>
          Алгачкы 2 жума өзүн-өзү текшерүү убактысы. Эгер 2 жума ичинде окуууну
          <br />
          уланта албай калса, анда 100% төлөмдөр кайтарылып берилет.
        </p>
        <p className={styles.subtitle}>Төлөмдөр ай сайын болот.</p>
        <div className={styles.wrapper}>
          {WHYUSARRAY.map((item) => (
            <WhyUsCard
              key={item.id}
              icon={item.icon}
              system={item.system}
              text={item.text}
              alt={item.id}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default WhyUs;
