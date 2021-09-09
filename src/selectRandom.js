const selectRandom = (props) => {
  const randomIndex = Math.floor(Math.random() * props.length);
  const randomSelection = props[randomIndex];
  return randomSelection;
}

export default selectRandom;