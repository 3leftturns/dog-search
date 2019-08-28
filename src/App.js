import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labradors : []
    }
  }

  dogs = require("./dogs.json");

  fetchLabradors = (dogs) => {
    let labradors = [];

    //your code here
    if (labradors.length > 0) {
    this.setState({labradors : []})
  }
  }

  render() {
    return (
      <div className="App">
        <p>List of Labradors!</p>
        <p>{this.state.labradors && JSON.stringify(this.state.labradors)}</p>
        <button onClick={this.fetchLabradors(this.dogs)}>Fetch!</button>
      </div>
    );
  }
}
export default App;
