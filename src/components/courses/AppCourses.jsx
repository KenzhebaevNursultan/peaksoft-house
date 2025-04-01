import Container from "../../layouts/Container";
import Title from "../UI/Title";
import styles from "./AppCourses.module.css";
import springBoot from "../../assets/backend/boot.png";
import hibernate from "../../assets/backend/logos_hibernate.png";
import java from "../../assets/backend/logos_java.png";
import security from "../../assets/backend/ses.png";
import spring from "../../assets/backend/spring.png";
// fr
import javascript from "../../assets/frontend/js.png";
import html from "../../assets/frontend/html.png";
import css from "../../assets/frontend/css.png";
import sass from "../../assets/frontend/sass.png";
import react from "../../assets/frontend/react.png";
import redux from "../../assets/frontend/redux.png";
import mu from "../../assets/frontend/mu.png";
import web from "../../assets/frontend/web.png";

const JAVA = [
  { id: "d3", title: "Java", image: java, alt: "Java", course: "Java" },
  { id: "d3", title: "JDBC", image: java, alt: "JDBC", course: "JDBC" },
  {
    id: "d3",
    title: "hibernate",
    image: hibernate,
    alt: "Hibernate",
    course: "Hibernate",
  },
  {
    id: "d333",
    title: "Spring MVC",
    image: spring,
    alt: "Spring MVC",
    course: "Spring MVC",
  },
  {
    id: "d3",
    title: "Spring Security",
    image: security,
    alt: "Spring Security",
    course: "Spring Security",
  },
  {
    id: "d3",
    title: "Spring Boot",
    image: springBoot,
    alt: "Spring Boot",
    course: "Spring Boot",
  },
];

const JS = [
  {
    id: "u7",
    title: "JavaScript",
    image: javascript,
    alt: "JavaScript",
    course: "JavaScript",
  },
  {
    id: "u8",
    title: "HTML",
    image: html,
    alt: "HTML",
    course: "HTML",
  },
  {
    id: "u9",
    title: "Css",
    image: css,
    alt: "Css",
    course: "Css",
  },
  {
    id: "u39",
    title: "Sass",
    image: sass,
    alt: "Sass",
    course: "Sass",
  },
  {
    id: "u12",
    title: "React",
    image: react,
    alt: "React",
    course: "React",
  },
  {
    id: "u1s2",
    title: "Redux",
    image: redux,
    alt: "Redux",
    course: "Redux",
  },
  {
    id: "u199",
    title: "Material UI",
    image: mu,
    alt: "Material UI",
    course: "Material UI",
  },
  {
    id: "u1299",
    title: "Webpack",
    image: web,
    alt: "Webpack",
    course: "Webpack",
  },
];

function CourseCard({ course, programms, back }) {
  return (
    <div className={!back ? styles.course : styles.extra}>
      <h3 className={!back ? styles.courseTitle : styles.courseTitleBlack}>
        {course} - <span>9 аЙ</span>
      </h3>
      <div className={styles.courseInfo}>
        {programms.map((item) => {
          return (
            <div
              className={
                !back ? styles.coursesInfoCard : styles.coursesInfoCardBack
              }
              title={item.title}
            >
              <div>
                <img src={item.image} alt={item.alt} />
              </div>
              <div
                className={
                  !back
                    ? styles.coursesInfoCardText
                    : styles.coursesInfoCardTextBlack
                }
              >
                {item.course}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AppCourses() {
  return (
    <div className={styles.about}>
      <Container>
        <Title title="IT курстар" />
        <div className={styles.aboutCards}>
          <CourseCard course={"front-end"} programms={JS} />
          <CourseCard course={"Back-end"} programms={JAVA} back />
        </div>
      </Container>
    </div>
  );
}

export default AppCourses;
