import React, { useState, createContext, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const ColorModeContext = createContext({
  toggleMode: () => {},
  mode: "light",
});

export const ColorContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
        mode,
    }),
    [mode]
  );

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ColorModeContext.Provider value={colorMode} >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
