import { useState } from 'react';
import selectRandom from './selectRandom';
import spaceAdventure from './spaceAdventure';
import './App.css';

function App() {

  const [newStory, setNewStory] = useState({});

  const generateStory = () => {
    let thisStory = {}
    for (let element in spaceAdventure) {
      const selectedElement = selectRandom(spaceAdventure[element]);
      thisStory[element] = selectedElement;
    }
    setNewStory(thisStory);
  }

  return (
    <div className="App">
      <h1>LASERS AND FEELINGS</h1>
      <button onClick={generateStory}>Tell me a story!</button>
      <p>A threat...</p>
      <p>{newStory.threat}</p>
      <p>want(s) to...</p>
      <p>{newStory.want}</p>
      <p>the...</p>
      <p>{newStory.target}</p>
      <p>which will...</p>
      <p>{newStory.result}</p>
    </div>
  );
}

export default App;