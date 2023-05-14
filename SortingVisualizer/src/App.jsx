import { useEffect, useState } from "react";
import RandomizeArray from "./HelperFunctions/RandomizeArray";
import ArrayView from "./View/ArrayView";
import "./App.css";

function App() {
  const [barArray, setBarArray] = useState([]);
  const [displayArray, setDisplayArray] = useState([]);
  const [length, setLength] = useState(50);

  useEffect(() => {
    setBarArray(RandomizeArray(length));
  }, []);

  //Need to spread in Array so that useEffect knows an update occured
  function sortBarArray() {
    setBarArray((prevState) => [...prevState.sort()]);
  }

  return (
    <div>
      <ArrayView barArray={barArray} />
      <button onClick={sortBarArray}>sort</button>
    </div>
  );
}

export default App;
