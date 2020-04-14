import ReactDOM from "react-dom";
import React, {useState} from "react";

const Form = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Wiadomość:
        <textarea value={name} onChange={handleChange}/>
      </label>
      <input type="submit" value="Wyślij"/>
    </form>
  );
};

const App = () => <Form/>;

ReactDOM.render(<App/>, document.getElementById("app"));
