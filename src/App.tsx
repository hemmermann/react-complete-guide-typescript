import React, { ChangeEvent } from "react";
import "./App.css";
import Person from "./Person/Person";

interface PersonArr {
  name: string;
  age: number;
}

interface IMyState {
  count?: number;
  persons?: PersonArr[];
  otherState?: string;
  showPersons?: boolean;
}

class App extends React.Component {
  state = {
    // optional second annotation for better type inference
    count: 0,
    persons: [
      {
        id: "asd1",
        name: "Max",
        age: 13,
      },
      {
        id: "sda2",
        name: "Maxima",
        age: 43,
      },
      {
        id: "zxc2",
        name: "Regola",
        age: 34,
      },
    ],
    otherState: "other value",
    showPersons: false,
  };

  switchNameHandler = (newName: string) => {
    console.log("Was clicked!");
    this.setState({
      persons: [
        {
          name: newName,
          age: 41,
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
    });
  };

  nameChangeHandler = (event: ChangeEvent<HTMLInputElement>, id: string) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (index: number) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    const buttonStyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
          {this.state.count}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React complete guide</h1>
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
