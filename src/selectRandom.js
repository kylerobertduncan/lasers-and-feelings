const selectRandom = (props) => {
  // console.log(props);
  // console.log("please select a random item from this array");
  const randomIndex = Math.floor(Math.random() * props.length);
  const randomSelection = props[randomIndex];
  return randomSelection;
}

export default selectRandom;