import {useEffect, useState, useContext} from 'react'
import reactLogo from "./assets/react.svg";
import "./App.css";
import ShinCodeContext from './main';

function App() {
  const [count, setCount] = useState(0);
  const shincodeInfo = useContext(ShinCodeContext);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(()=>{
    console.log('hello hooks');
  },[])

  return (
    <div className="App">
      <h1>UseState</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
      <hr />
      <h1>useContext</h1>
      <p>{shincodeInfo.name}</p>
      <p>{shincodeInfo.age}</p>

    </div>
  );
}

export default App;
