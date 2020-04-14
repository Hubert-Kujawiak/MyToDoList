import React, {useState} from "react";
import ReactDOM from "react-dom";

const App = () => <Counter/>;

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(prevState => prevState + 1);
  };

  return (
    <>
      <h1>Liczba kliknięć: {counter}</h1>
      <button onClick={handleClick}>Kliknij!</button>
    </>
  );
};


ReactDOM.render(<App/>, document.getElementById("app"));