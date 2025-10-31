import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; 


interface AlertType {
  msg: string;
  type: string;
}

interface ThemeType {
  base: string;
  nav: string;
  mid: string;
  text: string;
}

const App: React.FC = () => {
  const [alert, setAlert] = useState<AlertType | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const [theme, setTheme] = useState<ThemeType>({
    base: "white",
    nav: "#f8f9fa",
    mid: "#e9ecef",
    text: "black",
  });

  // ✅ Show alert message
  const showAlert = (message: string, type: string): void => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const changeTheme = (newTheme: ThemeType): void => {
    setIsDarkMode(false);
    setTheme(newTheme);
    document.body.style.backgroundColor = newTheme.base;
    document.body.style.color = newTheme.text;
  };

  document.body.style.backgroundColor = theme.base;
  document.body.style.color = theme.text;

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        theme={theme}
        changeTheme={changeTheme}
        isDarkMode={isDarkMode}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About theme={theme} />} />
          <Route
            path="/"
            element={
              <TextForm
                text={text}
                setText={setText}
                showAlert={showAlert}
                heading="Enter the Text To Analyze Below"
                theme={theme}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
