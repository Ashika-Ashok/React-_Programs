import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');


  return (
    
      <div className="App">
        <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
        <h1><strong>you typed:{text} </strong></h1>
        <h3>number of characters:{text.length}</h3>
        </div>
        
);
}
export default App
