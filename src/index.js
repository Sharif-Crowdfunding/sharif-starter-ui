import { ChakraProvider } from "@chakra-ui/react";
import "./assets/css/App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme/theme";
import App from "./container/App";
import axios from "axios";
import { RtlProvider } from "./components/rtlProvider/RtlProvider";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "x-csrftoken";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <RtlProvider>
      <App />
    </RtlProvider>
  </ChakraProvider>
);
