import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      teams: [],
    };
  }
  render() {
    return (
      <div>
        <h1>App component</h1>
      </div>
    );
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((data) => data.json())
      .then((teams) => {
        console.log(teams);
        this.setState({
          teams,
        });
      });
  }
}
