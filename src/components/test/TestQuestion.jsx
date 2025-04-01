import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import Container from "../../layouts/Container";
import Title from "../UI/Title";
import styles from "./Test.module.css";
import { QUESTIONS, TITLE } from "./data";

export const RESULTS = {
  RU: {
    finishText: "Тест завершен!",
    result: "Ваш результат:",
    wait: "Подождите пару секунд, мы считываем ваши ответы...",
  },
  KG: {
    finishText: "Тест аяктады!",
    result: " Сиздин жыйынтык:",
    wait: "Бир нече секунд күтө туруңуз, жообуңузду текшерип жатабыз...",
  },
};

export const FEEDBACKS = {
  RU: {
    4: "Вы — Великий программист!",
    3: "Вы — Перспективный программист!",
    2: "Вы — Начинающий программист, впереди много работы!",
  },
  KG: {
    4: "Сиз — Улуу программист!",
    3: "Сиз — Перспективдүү программист!",
    2: "Сиз — Башталгыч программист, алдыда көп иш бар!",
  },
};

function getFeedback(score, language = "RU") {
  return FEEDBACKS[language][score > 3 ? 4 : score === 3 ? 3 : 2];
}

function TestQuestions() {
  const [lang, setLang] = useState("KG");
  const [testState, setTestState] = useState({
    currentQuestionIndex: 0,
    selectedAnswers: [],
    isTestCompleted: false,
    score: 0,
    timeLeft: 3,
  });

  useEffect(() => {
    // Проверяем, был ли уже сохранен результат
    const savedFeedback = localStorage.getItem("testFeedback");
    if (savedFeedback) {
      // Если результат есть, сразу показываем его
      const parsedFeedback = JSON.parse(savedFeedback);
      setTestState({
        ...parsedFeedback,
        isTestCompleted: true,
        timeLeft: 0, // чтобы не показывалось ожидание
      });
    }
  }, []);

  const changeLanguage = (language) => setLang(language);

  const handleAnswerSelect = (isCorrect) => {
    setTestState((prev) => {
      const updatedScore = prev.score + (isCorrect ? 1 : 0);
      const nextQuestionIndex = prev.currentQuestionIndex + 1;
      return {
        ...prev,
        selectedAnswers: [...prev.selectedAnswers, isCorrect],
        score: updatedScore,
        currentQuestionIndex: nextQuestionIndex,
        isTestCompleted: nextQuestionIndex >= QUESTIONS[lang].length,
      };
    });
  };

  useEffect(() => {
    if (testState.isTestCompleted) {
      const timer = setInterval(() => {
        setTestState((prevState) => {
          if (prevState.timeLeft === 1) {
            clearInterval(timer);
            // Сохраняем результат в localStorage
            localStorage.setItem(
              "testFeedback",
              JSON.stringify({
                score: testState.score,
                feedback: getFeedback(testState.score, lang),
                lang: lang,
              })
            );
          }

          if (prevState.timeLeft <= 0) {
            clearInterval(timer);
            return prevState;
          }
          return { ...prevState, timeLeft: prevState.timeLeft - 1 };
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [testState.isTestCompleted, testState.score, lang]);

  const renderResults = () => (
    <div className={styles.result}>
      <h3>{RESULTS[lang].finishText}</h3>
      <p>
        {RESULTS[lang].result} {testState.score} / {QUESTIONS[lang].length}
      </p>
      <p className={styles.feedback}>{getFeedback(testState.score, lang)}</p>
      <NavLink to="/">{lang === "KG" ? "Башкы бет" : "Главная"}</NavLink>
    </div>
  );

  return (
    <div className={styles.about}>
      <Container>
        <Title title={TITLE[lang]} />
        <div className={styles.buttons}>
          <button
            className={`${styles.button} ${lang === "RU" && styles.active}`}
            onClick={() => changeLanguage("RU")}
            disabled={lang === "RU"}
          >
            Русский
          </button>
          <button
            className={`${styles.button} ${lang === "KG" && styles.active}`}
            onClick={() => changeLanguage("KG")}
            disabled={lang === "KG"}
          >
            Kыргызча
          </button>
        </div>
        <div>
          {!testState.isTestCompleted ? (
            <div className={styles.cont}>
              <h2 className={styles.contTitle}>
                {QUESTIONS[lang][testState.currentQuestionIndex].question}
              </h2>
              <div className={styles.ques}>
                {QUESTIONS[lang][testState.currentQuestionIndex].options.map(
                  (option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(option.isCorrect)}
                    >
                      {option.answer}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : (
            <div className={styles.cont}>
              {testState.timeLeft !== 0 && (
                <h2 className={styles.wait}>
                  {RESULTS[lang].wait} {testState.timeLeft}
                </h2>
              )}
              {testState.timeLeft === 0 && renderResults()}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default TestQuestions;
