import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppRoutes from "./routes";
import "./App.css";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <ThemeProvider theme={theme}>
          <Box maxWidth="sm" margin="0 auto" sx={{ backgroundColor: "#f9f9f9" }}>
            <CssBaseline />
            <AppRoutes />
          </Box>
        </ThemeProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
