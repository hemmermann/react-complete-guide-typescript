import React from "react";
import "./App.css";
import Person from "./Person/Person";


interface PersonArr{
  name: string,
  age: number
}

interface IMyState {
  count: number,
  persons: PersonArr[],
  otherState: string,
}

class App extends React.Component<{},IMyState> {
  state = {
    // optional second annotation for better type inference
    count: 0,
    persons: [
      {
        name: 'Max',
        age: 13
      },{
        name: 'Maxima',
        age: 43
      },{
        name: 'Regola',
        age: 34
      },
    ],
    otherState: 'other value'
  };

  switchNameHandler = () => {
    console.log('Was clicked!');
    this.setState({
      persons: [
        {
          name: 'Maximilian',
          age: 41
        },{
          name: 'Maxima',
          age: 43
        },{
          name: 'Regola',
          age: 34
        },
      ]
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >
          My hobbies: football
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        {this.state.count}
      </div>
    );
  }
}

export default App;
