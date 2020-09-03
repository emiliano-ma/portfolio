import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
//todavía no importé about and projects porque 
//se van a importar solos cuando los agregue a la función App

const App = () => {
  return (
    <div>
      <Header/>
      <Hello/>
      <Footer/>
    </div>
  )
};

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById("app")
);