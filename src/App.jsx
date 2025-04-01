import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Main from "./components/main/Main";
import About from "./components/about/About";
import AppCourses from "./components/courses/AppCourses";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="main" />} />
        <Route path="main" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<AppCourses />} />
      </Route>
    </Routes>
  );
}

export default App;
