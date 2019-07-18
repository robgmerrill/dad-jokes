import React, { Component } from "react";
// Import in axios for ajax request
import axios from "axios";

class JokeList extends Component {
  // default prop
  static defaultProps = {
    numJokesToGet: 10
  };
  constructor(props) {
    super(props);
    this.state = { jokes: [] };
  }
  // The componentDidMount() method runs after the component output has been rendered to the DOM. 
  async componentDidMount() {
    // load jokes

    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      jokes.push(res.data.joke);
    }
    console.log(jokes);
    this.setState({ jokes: jokes });
  }
  render() {
    return (
      <div className="JokeList">
        <h1>Dad Jokes</h1>
        <div className="JokeList-jokes">
          {this.state.jokes.map(j => (
            <div>{j}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
