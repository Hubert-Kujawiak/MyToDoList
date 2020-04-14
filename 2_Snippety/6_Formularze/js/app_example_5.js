import React from "react";
import ReactDOM from "react-dom";
import useInput from "./hooks/useInput";

const FormExample = () => {
  const [name, connectName] = useInput("");
  const [age, connectAge] = useInput(25);

  return (
    <form>
      <input type="text" {...connectName}/>
      <input type="number" {...connectAge}/>
    </form>
  );
};

const App = () => <FormExample/>;

ReactDOM.render(<App/>, document.getElementById("app"));
