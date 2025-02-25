import Home from "./components/home/Home";
import TopBar from "./components/topBar/TopBar";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <TopBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
