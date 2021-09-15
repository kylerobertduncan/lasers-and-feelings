import { useState } from "react";
import selectRandom from "./selectRandom";

const LoopAPI = (props) => {
  const { currentStory } = props;

  // console.log(currentStory);

  const [ newStory, setNewStory ] = useState({});
  
  const replaceCurrentStory = async () => {
    
    for (const element in currentStory) {
  
      // console.log(currentStory[element]);
      const newElementArray = [];
      const elementArray = currentStory[element].split(' ');
      console.log(elementArray);

      await Promise.all(
        elementArray.map( async (wordToReplace) => {

          const url = new URL('https://api.datamuse.com/words');
          url.search = new URLSearchParams({
            ml: wordToReplace, // ml = "means like"
            max: 10
          });

          const response = await fetch(url);
          const synonymsArray = await response.json();
          const newWordObject = await selectRandom(synonymsArray);
          newElementArray.push(newWordObject.word);
          // console.log(newElementArray);

        })
      )
      const newStoryElement = newElementArray.join(' ');
      const newStoryObject = {...newStory}
      // console.log(newStory);
      newStoryObject[element] = newStoryElement;
      setNewStory(newStoryObject)
    }
  }


  return (
    <div>
      <button onClick={replaceCurrentStory}>Generate Random Story</button>
    </div>
  );
}

export default LoopAPI;