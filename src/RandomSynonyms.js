import { useEffect, useState } from "react";

const RandomSynonyms = (props) => {

  const [synonym, setSynonym] = useState("");

  useEffect(() => {
    const url = new URL('https://api.datamuse.com/words');
    url.search = new URLSearchParams({
      ml: 'outer space', // ml = "means like"
      max: 3
    });
    fetch(url)
      .then(response => response.json())
      .then((jsonResponse) => {
        // console.log(jsonResponse);
        setSynonym(jsonResponse);
      });
  }, []);

  const handleGetSynonyms = () => {
    console.log(props.newStory);
    // split to take apart each element
    // pass each word through datamuse
    // reconstruct back into newStory object
    console.log(synonym);
  }

  return (
    <button onClick={handleGetSynonyms}>Gimme extra rando stuff!</button>
  )
}

export default RandomSynonyms;