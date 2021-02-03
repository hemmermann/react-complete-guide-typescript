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

const App: React.FC<{}> = (props) => {
  const [personsState, setPersonsState] = React.useState({
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
  });


  const switchNameHandler = () => {
    console.log("Was clicked!");
    setPersonsState({
      count: 12,
      persons: [
        {
          name: "Maximilian",
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
      otherState: personsState.otherState
    });
  };

  const [otherState, setOtherState] = React.useState('string');

  console.log(personsState,otherState);

  return (
    <div>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobbies: football
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
      personsState
      {personsState.count}
    </div>
  );
};

export default App;
