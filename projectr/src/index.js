import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./features/login/login";
import Home from "./features/Home/home";
import Cliente from "./features/Cliente/Cliente";
import ClienteEdit from "./features/Cliente/ClienteEdit.js";

import { ChakraProvider } from "@chakra-ui/react";

const matchStatestoProps = (state, ownProps) => {
  return { id: ownProps.match.params.id, categories: state.categories };
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/cliente/:id" element={<ClienteEdit />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
