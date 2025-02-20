import { ThemeProvider } from "@emotion/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme } from "@mui/material/styles";

import "./index.css";
import App from "./App.tsx";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
