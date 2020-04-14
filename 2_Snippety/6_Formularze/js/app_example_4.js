import React, {useState} from "react";
import ReactDOM from "react-dom";

const FormExample = () => {
  const [form, setForm] = useState({ name: "", age: 25 });

  const handleChange = (e) => {
    const [name, value] = e.target;
    setForm(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    });
  };

  return (
    <form>
      <input type="text" name="name" value={form.name} onChange={handleChange}/>
      <input type="number" name="age" value={form.age} onChange={handleChange}/>
    </form>
  );
};

const App = () => <FormExample/>;

ReactDOM.render(<App/>, document.getElementById("app"));