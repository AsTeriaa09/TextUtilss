import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light");

  const [toggleText, setToggleText] = useState("Dark Theme");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setToggleText("dark Theme");
      showAlert("dark mode enabled", "Success");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "light";
    } else {
      setMode("light");
      setToggleText("Dark Theme");
      showAlert("light mode enabled", "Success");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "dark";
    }
  };

  const toggleMode2 = () => {
    if (mode === "light") {
      setMode("dark");
      setToggleText("blue Theme");
      showAlert("blue theme enabled", "Success");
      document.body.style.backgroundColor = "#00005f";
      document.body.style.color = "light";
    } else {
      setMode("light");
      setToggleText("Dark Theme");
      showAlert("blue theme disabled", "Success");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "dark";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleText={toggleText}
          toggleMode={toggleMode}
          toggleMode2={toggleMode2}
        />

        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Text heading="enter your text to analyse" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
