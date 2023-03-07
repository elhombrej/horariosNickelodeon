import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import {
  createTheme,
  //responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { useState } from "react";
import NavegationBar from "./Components/NavegationBar";

function App() {
  const [mode, setMode] = useState("light");

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "dark" && {
        primary: {
          main: "#bdbdbd",
          background: "#eeeeee",
        },
        secondary: {
          main: "#bdbdbd",
        },
        third: {
          main: "#00c853",
        },
      }),
      ...(mode === "light" && {
        primary: {
          main: "#ffac33",
        },
        secondary: {
          main: "#bdbdbd",
        },
        third: {
          main: "#00c853",
        },
      }),
    },
    typography: {
      // responsiveFontSizes(darkModeTheme)
      fontFamily: ["arial"],
      fontWeight: ["bold"],
    },
  });

  const darkModeTheme = createTheme(getDesignTokens(mode));

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkModeTheme}>
        <NavegationBar mode={mode} setMode={setMode} />
        <Routes>
          <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
