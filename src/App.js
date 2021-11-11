import { useEffect, useState } from 'react';
import spaceAdventure from './spaceAdventure';
import selectRandom from './selectRandom';
// import RandomSynonyms from './RandomSynonyms';
import PromiseTest from './PromiseTest';
import LoopAPI from './LoopAPI';
import './App.css';

function App() {

  const [currentStory, setCurrentStory] = useState({});
  
  const generateStory = () => {
    const thisStory = {}
    for (const element in spaceAdventure) {
      const selectedElement = selectRandom(spaceAdventure[element]);
      thisStory[element] = selectedElement;
    }
    setCurrentStory(thisStory);
  }

  useEffect( () => {
    generateStory();
  }, [])

  return (
    <div className="App">
      <a href="https://johnharper.itch.io/lasers-feelings" target="_blank" rel="noreferrer noopener">
        <h1>Lasers &amp; Feelings</h1>
      </a>
      <h2>by John Harper</h2>
      <button onClick={generateStory}>Tell me a story!</button>
      <p>
        <span className="element">{currentStory.threat}</span> want(s) to <span className="element">{currentStory.want}</span> the <span className="element">{currentStory.target}</span> which will <span className="element">{currentStory.result}</span>!
      </p>
      {/* <PromiseTest currentStory={currentStory}/> */}
      <LoopAPI currentStory={currentStory}/>
    </div>
  );
}

export default App;

/*

TRYING TO GET RANDOMIZED INDIVIDUAL WORDS BY CLICK

  const getRandomSynonym = (phrase) => {
    const url = new URL('https://api.datamuse.com/words');
    url.search = new URLSearchParams({
      ml: phrase, // ml = "means like"
      max: 1
    });
    fetch(url)
      .then(response => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse[0].word);
      });
  }

  const handleWordClick = (e) => {
    if (e.target.className == "element") {
      // console.log(newStory);
      // console.log(e.target);
      console.log(e.target.textContent);
    }
  }

*/