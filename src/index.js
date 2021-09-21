import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import ModalContextProvider from "./contexts/modal";
import PostContextProvider from "./contexts/postContext";

ReactDOM.render(
  <React.StrictMode>
    <ModalContextProvider>
      <PostContextProvider>
      <App />
      </PostContextProvider>
    </ModalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
