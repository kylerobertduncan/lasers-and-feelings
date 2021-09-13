import { useState } from "react"

const PromiseTest = (props) => {
  const { currentStory } = props;
  // console.log(currentStory);

  const [ randomizedStory, setRandomizedStory ] = useState([]);
  
  const selectRandSynonym = (synArr) => {
    const randomIndex = Math.floor(Math.random() * synArr.length);
    const randomSelection = synArr[randomIndex];
    return randomSelection.word;
  }
  
// building from Juno notes using Promise.all  
  const randomizeArray = async () => {
    const dummyArray = ["Zombie", "Space", "Pirates"];
    
    // map through array of words
    const arraysOfSynonyms = dummyArray.map((word) => {
      
      // get list of synonyms
      const url = new URL('https://api.datamuse.com/words');
      url.search = new URLSearchParams({
        ml: word, // ml = "means like"
        max: 10
      });

      return fetch(url)
        .then((response) => {
          return response.json()
        });
    })
    // console.log(newArray);
    Promise.all(arraysOfSynonyms)
      .then(responses => {
        console.log(responses);
        const chosenSynonyms = responses.map((response) => {
          selectRandSynonym(response);
          // console.log(response);
        })
        console.log(chosenSynonyms);
      })

    // choose a synonym at random (selectRandom.js)
    // add the random synonym to new array
  }

  const buildRandomStory = () => {
    let newRandomStory = {};
    for (const phrase in currentStory) {
      const wordArray = currentStory[phrase].split(" ");
      const newArray = randomizeArray(wordArray);
      const newPhrase = newArray.join(" ");
      newRandomStory[phrase] = newPhrase;
    }
    setRandomizedStory(newRandomStory);
  }

  return (
    <>
      {/* <button onClick={promiseTestingFunction}>test a promise!</button> */}
      <button onClick={randomizeArray}>get random words!</button>
      <div>
        {
          randomizedStory.map( (element) => {
            return(
              <p>{element}</p>
            )
          })
        }
      </div>
    </>
  )
}

export default PromiseTest;

/*

  // example function from https://javascript.info/async-await

  async function promiseTestingFunction() {
    let promise = new Promise( (resolve, reject) => {
      setTimeout( () => resolve("done!"), 1000)
    });
    let result = await promise;
    alert(result);
  }

*/