import React, {Component} from "react";
import ReactDOM from "react-dom";

const App = () => <TimeOnPage/>;

class TimeOnPage extends Component {
  state = {
    seconds: 0
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        return {
          seconds: prevState.seconds + 1
        };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <h1>Minęło {this.state.seconds} sekund.</h1>;
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));