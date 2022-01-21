import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Main from './components/Main';

function App() {
  const[item,setItem]=useState("true");
  return (
    <div className="App">
        <Home/>
        <Main setItem={setItem}/>
    </div>
  );
}

export default App;
