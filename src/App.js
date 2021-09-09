import { useState } from 'react';
import spaceAdventure from './spaceAdventure';
import selectRandom from './selectRandom';
import RandomSynonyms from './RandomSynonyms';
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
      <h1>Lasers &amp; Feelings</h1>
      <button onClick={generateStory}>Tell me a story!</button>
      <p>
        <span className="element">{newStory.threat}</span> want(s) to <span className="element">{newStory.want}</span> the <span className="element">{newStory.target}</span> which will <span className="element">{newStory.result}</span>!
      </p>
      <RandomSynonyms newStory={newStory}/>
    </div>
  );
}

export default App;