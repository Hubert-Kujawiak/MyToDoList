import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <Counter/>;2
};

class Counter extends React.Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    console.log("Działa");

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      };
    });
  };

  render() {
    return (
      <>
        <h2>Twoje kliknięcia: {this.state.counter}</h2>
        <button onClick={this.handleClick}>Kliknij!</button>
      </>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));