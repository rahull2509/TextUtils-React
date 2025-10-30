import React, { useState } from "react";
import Navbar from "./components/Navbar";
interface Theme {
  base: string;
  nav: string;
  mid: string;
  text: string;
}

const App: React.FC = () => {
  
  const [theme, setTheme] = useState<Theme>({
    base: "#ffffff",
    nav: "#f1f3f5",
    mid: "#e9ecef",
    text: "black",
  });

  
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
    </div>
  );
};

export default App;
