import { ChakraProvider } from "@chakra-ui/react";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import "./assets/css/App.css"
import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme/theme";
import App from "./container/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ThemeEditorProvider>
        <App />
      </ThemeEditorProvider>
    </React.StrictMode>
  </ChakraProvider>
);

