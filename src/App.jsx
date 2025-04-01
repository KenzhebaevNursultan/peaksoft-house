import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Main from "./components/main/Main";
import About from "./components/about/About";
import AppCourses from "./components/courses/AppCourses";
import WhyUs from "./components/whywe/WheWe";
import Lessons from "./components/lessons/Lessons";
import Graduates from "./components/Graduates/Graduates";
import Test from "./components/test/Test";
import TestQuestions from "./components/test/TestQuestion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="main" />} />
        <Route path="main" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<AppCourses />} />
        <Route path="why-us" element={<WhyUs />} />
        <Route path="lessons" element={<Lessons />} />
        <Route path="graduates" element={<Graduates />} />
        <Route path="test" element={<Test />} />
        <Route path="test/:id" element={<TestQuestions />} />
      </Route>
    </Routes>
  );
}

export default App;
