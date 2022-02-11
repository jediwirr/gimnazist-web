import React from 'react';
import './App.css';
import List from './components/List/List';
import { topics } from './data/topics';
import { ITopic } from "./types/types"

function App() {
  return (
    <div className="App">
      <List items={topics} renderItem={(topic: ITopic) =>
        <p>{topic.title}</p>
      } />
    </div>
  );
}

export default App;
