import React, { ChangeEvent, FunctionComponent, ReactNode } from "react";

import "./Person.css";

interface Props {
  name: string;
  age: number;
  click?: () => void;
  changed?: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}

const Person = (props: Props) => {
  return(
  <div className="Person">
    <p onClick={props.click}>
      I'm {props.name} and I am {props.age} years old!
    </p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name} />
  </div>
  );
};
export default Person;
