import { useEffect, useState } from "react";
import selectRandom from "./selectRandom";

const LoopAPI = (props) => {
  const { currentStory } = props;
  const [ newStory, setNewStory ] = useState({});
  const joiningWords = ['a', 'the', 'in', 'with']
  
  const replaceCurrentStory = async () => {
    
    // create a newStoryObject to store each string
    const newStoryObject = { ...newStory }

    for (const element in currentStory) {

      // break the current element into an array
      const elementArray = currentStory[element].split(' ');
      const newElementArray = [];

      for (const wordToReplace of elementArray) {
        // skip 'a', 'the', 'in' and 'with'
        let skipJoiningWord = false;
        joiningWords.map( (word) => {
          if (word === wordToReplace.toLowerCase()) {
            skipJoiningWord = true;
          }
        });
        // check if wordToReplace is a joining word
        if (skipJoiningWord) {
          // if true, add to new array
          newElementArray.push(wordToReplace);
        // otherwise generat a synonym
        } else {
          // API fetch setup
          const url = new URL('https://api.datamuse.com/words');
          url.search = new URLSearchParams({
            ml: wordToReplace, // ml = "means like"
            // max: 10
          });
          // call the API for 10 random synonyms
          const response = await fetch(url);
          // turn the synonyms in a json array
          const synonymsArray = await response.json();
            // add code to compare random options to 'likely to follow'
          // choose a random word from the json array
          const newWord = await selectRandom(synonymsArray).word;
          // add that word to a replacement array
          newElementArray.push(newWord);
        }
      }

      // turn the replacement array into a string
      const newStoryElement = newElementArray.join(' ');
      // add the new string to the relevant story element
      newStoryObject[element] = newStoryElement;
    }
    // set the generated story in state
    setNewStory(newStoryObject);
  }

  return (
    <div>
      <button onClick={replaceCurrentStory}>Generate Some Chaos</button>
      <p>
        <span className="element threat">{newStory.threat}</span> want(s) to <span className="element">{newStory.want}</span> the <span className="element">{newStory.target}</span> which will <span className="element">{newStory.result}</span>!
      </p>
    </div>
  );
}

export default LoopAPI;