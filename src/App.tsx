import React from "react";
import "./App.css";
import Person from "./Person/Person";

interface PersonArr {
  name: string;
  age: number;
}

interface IMyState {
  count: number;
  persons: PersonArr[];
  otherState: string;
}

class App extends React.Component<{}, IMyState> {
  state = {
    // optional second annotation for better type inference
    count: 0,
    persons: [
      {
        name: "Max",
        age: 13,
      },
      {
        name: "Maxima",
        age: 43,
      },
      {
        name: "Regola",
        age: 34,
      },
    ],
    otherState: "other value",
  };

  switchNameHandler = (name: string) => {
    console.log("Was clicked!");
    this.setState({
      persons: [
        {
          name: name,
          age: 41,
        },
        {
          name: "Maximus",
          age: 32,
        },
        {
          name: "Regola",
          age: 34,
        },
      ],
    });
  };

  nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      persons: [
        {
          name: "Decimus",
          age: 41,
        },
        {
          name: event.target.value,
          age: 32,
        },
        {
          name: "Regola",
          age: 34,
        },
      ],
    });
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.switchNameHandler("Maximilian!!!!!!")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
          changed={this.nameChangeHandler}
        >
          My hobbies: football
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler}
        />
        {this.state.count}
      </div>
    );
  }
}

export default App;
