import ReactDOM from "react-dom";
import React, {useState} from "react";

const Form = () => {
  const [title, setTitle] = useState("mr");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form>
      <h1>Title: {title}</h1>

      <select value={title} onChange={handleTitleChange}>
        <option value="ms">Ms</option>
        <option value="mrs">Mrs</option>
        <option value="mr">Mr</option>
      </select>
    </form>
  );
};

const App = () => <Form/>;

ReactDOM.render(<App/>, document.getElementById("app"));
