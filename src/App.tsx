import React from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/MenuItem/MenuItem";
import { topics } from "./data/topics";
import Main from "./components/Main/Main";

function App() {

  return (
    <div className="App">
     <header>
       <div className="App__logo">
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
  );
}

export default App;
