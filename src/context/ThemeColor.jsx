import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/Themes";

const ThemeColors = (props) => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const colors = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={{ colors, themeToggler }}>
      {props.children}
    </ThemeProvider>
  );
};

export default ThemeColors;
