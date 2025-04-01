import { Routes, Route, Navigate } from "react-router";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="peaksoft" />}>
        <Route path="peaksoft" element={<h1>Peaksoft</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
