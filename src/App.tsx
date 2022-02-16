import React from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/MenuItem/MenuItem";
import { topics } from "./data/topics";
import Main from "./components/Main/Main";

import { css } from "@emotion/css";
import { ThemeProvider } from "@emotion/react";

const theme = {
  color: {
    primary: "white",
    secondary: "lightblue",
  },
  textColor: {
    primary: "red",
    secondary: "white",
  }
};

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header>
          <div className={css`
              width: 50%;
              margin: 0 auto;
              height: 80px;
          `}>
            <img src='https://gimnazist.spb.ru/templates/jtnschool/images/logo_gym%20(book%20antiqua).png' alt="logo" />
          </div>
          <h1>Проект Санкт-Петербургской гимназии «АЛЬМА-МАТЕР»</h1>
          <div className="header__background"></div>
          <Menu topics={topics} renderItem={topic =>
              <MenuItem key={topic.title} topic={topic} />
            } />
        </header>
        <div className="container">
            <Main />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
