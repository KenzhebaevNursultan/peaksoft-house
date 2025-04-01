import { useEffect, useState } from "react";
import Container from "../../layouts/Container";
import Title from "../UI/Title";
import styles from "./Test.module.css";
import { useNavigate } from "react-router";

export const BASE_URL = "https://65a81f64e8b063d1.mokky.dev";

function Test() {
  const [phone, setPhone] = useState("+996");
  const [name, setSetname] = useState("");
  const [surname, setSurname] = useState("");
  const [user, setUser] = useState(null);
  const [feedback, setFeedback] = useState("");

  const [timer, setTimer] = useState(3); // Таймер отсчета
  const [isRedirecting, setIsRedirecting] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setPhone(e.target.value);
  };
  const handleNameChange = (e) => {
    setSetname(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newStudent = {
      name: name,
      phone: phone,
      surname: surname,
      answer: "",
    };
    const response = await fetch(`${BASE_URL}/kemin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });
    const data = await response.json();
    localStorage.setItem("USER", JSON.stringify(data));
    setIsRedirecting({ isStart: true, id: data.id });

    try {
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    let countdown;

    if (isRedirecting && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    if (timer === 0) {
      navigate(`${isRedirecting.id}`);
    }

    return () => clearInterval(countdown);
  }, [isRedirecting, timer, navigate]);

  useEffect(() => {
    const savedUser = localStorage.getItem("USER");
    const testFeedBack = localStorage.getItem("testFeedback");
    if (savedUser && testFeedBack) {
      setUser(JSON.parse(savedUser));
      setFeedback(JSON.parse(testFeedBack));
    }
  }, []);

  return (
    <div className={styles.about}>
      <Container>
        <Title title="Катталуу" />
        {!user?.name && !feedback?.feedback ? (
          <form onSubmit={onSubmit} className={styles.aboutForm}>
            <div>
              <label className={styles.label} htmlFor="">
                Атыңыз*
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Атыңыз"
                required
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <label className={styles.label} htmlFor="">
                Фамилияңыз *
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Фамилияңыз"
                required
                value={surname}
                onChange={handleSurnameChange}
              />
            </div>
            <div>
              <label className={styles.label} htmlFor="">
                Байланышуу тел *
              </label>
              <input
                type="tel"
                className={styles.input}
                placeholder="+___ (___) __ __ __"
                required
                value={phone}
                onChange={handleInputChange}
              />
            </div>
            <button className={styles.button} type="submit">
              Баштоо
            </button>
          </form>
        ) : (
          <div className={styles.aboutForm}>
            <h1 className={styles.userTitle}>
              {feedback?.lang === "KG"
                ? `Кайрадан кош келиңиз,${user.name}! Биз сизди тааныйбыз!`
                : `С возвращением, ${user.name}! Мы вас узнали!`}
            </h1>
            <h2 className={styles.userSubtitle}>
              {feedback?.lang === "KG"
                ? "Тест аяктады! Сиз тестти өтүп бүттүңүз, жыйынтык сакталды. Катышканыңыз үчүн рахмат!"
                : "Тест завершён! Вы уже прошли тест, результат сохранён. Спасибо за участие!"}
            </h2>
            <h3 className={styles.userHeader}>{feedback.feedback}</h3>
          </div>
        )}
        {isRedirecting.isStart && (
          <div className={styles.timer}>
            <p>Тест начнется через {timer} секунд...</p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Test;
