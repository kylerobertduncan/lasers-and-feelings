import { useEffect, useState } from "react";

const RandomSynonyms = (props) => {
  const { newStory } = props;
  // const [ synonym, setSynonym ] = useState("");
  const [ synonymSearch, setSynonymSearch ] = useState("");
  const [ randomStory, setRandomStory ] = useState({});

  // useEffect(() => {
  //   const url = new URL('https://api.datamuse.com/words');
  //   url.search = new URLSearchParams({
  //     ml: synonymSearch, // ml = "means like"
  //     max: 1
  //   });
  //   fetch(url)
  //     .then(response => response.json())
  //     .then((jsonResponse) => {
  //       // console.log(jsonResponse);
  //       setSynonym(jsonResponse);
  //     });
  // }, [synonymSearch]);

  // // setup a promise to wait for response?
  // const apiReturnDone = new Promise( () => {
  //   if (synonym != {}) {
  //     fulfill('API call returns content');
  //   } else {
  //     reject('API has no content');
  //   }
  // })

  const getRandomSynonym = (searchTerm) => {
    const url = new URL('https://api.datamuse.com/words');
    url.search = new URLSearchParams({
      ml: searchTerm, // ml = "means like"
      max: 1
    });
    fetch(url)
      .then(response => response.json())
      .then((jsonResponse) => {
        // console.log(jsonResponse[0].word);
        const synonym = jsonResponse[0].word
        console.log(synonym);
        return(synonym);
      });
  }

  // const getRandomSynonym = (searchTerm) => {
  //   setSynonymSearch(searchTerm);
  //   return(synonym);
  // }

  const handleGetSynonyms = () => {
    // console.log(props.newStory);
    let newRandomStory = {};
    // console.log(newRandomStory);
    for (const element in newStory) {
      // console.log(element);
      // split to take apart each element
      const wordArray = newStory[element].split(" ");

      // pass each word through datamuse
      const randomArray = wordArray.map( (word) => {
        getRandomSynonym(word);
        // compare to 'likely to follow' word list ??
      })
      console.log(randomArray);
      // this returns all undefined, before the getRandomSynonym loop can run/resolve ??

      // reconstruct back into newStory object
      newRandomStory[element] = randomArray
      // .join(" ");      
      // console.log(newRandomStory);
    }
    // console.log(synonym);
  }

  return (
    <button onClick={handleGetSynonyms}>Gimme extra rando stuff!</button>
  )
}

export default RandomSynonyms;