import React, {useState} from "react";
import ReactDOM from "react-dom";

const FormExample = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(25);

  return (
    <form>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
    </form>
  );
};

const App = () => <FormExample/>;

ReactDOM.render(<App/>, document.getElementById("app"));