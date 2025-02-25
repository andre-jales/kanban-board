import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeMode } from "../../types/ThemeMode";
import { ThemeContext } from "../../hooks/useTheme";

const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const savedMode = localStorage.getItem("themeMode") as ThemeMode | null;
  const [mode, setMode] = useState<ThemeMode>(savedMode || "dark");

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
