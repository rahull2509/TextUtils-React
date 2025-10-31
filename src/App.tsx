import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

interface Theme {
  base: string;
  nav: string;
  mid: string;
  text: string;
}

interface Alert {
  message: string;
  type: string;
}

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>({
    base: "#ffffff",
    nav: "#f1f3f5",
    mid: "#e9ecef",
    text: "black",
  });

  const [text, setText] = useState<string>("");

  const [alert, setAlert] = useState<Alert | null>(null);

  const showAlert = (message: string, type: string) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 2000);
  };

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <div style={{ backgroundColor: theme.base, minHeight: "100vh" }}>
      <Navbar
        title="TextUtils"
        aboutText="About"
        changeTheme={changeTheme}
        theme={theme}
        isDarkMode={theme.text === "white"}
      />

      {alert && (
        <div
          className={`alert alert-${alert.type} text-center`}
          role="alert"
          style={{ margin: "10px auto", width: "80%" }}
        >
          {alert.message}
        </div>
      )}

      <div className="container my-3">
        <TextForm
          text={text}
          setText={setText}
          theme={theme}
          heading="Enter your text to analyze"
          showAlert={showAlert}
        />
      </div>
    </div>
  );
};

export default App;
