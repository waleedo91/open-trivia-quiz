import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Quiz from "./components/quiz/Quiz";
import TopBar from "./components/topBar/TopBar";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-time" element={<Quiz />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
