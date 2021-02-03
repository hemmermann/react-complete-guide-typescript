import React, { FunctionComponent } from "react";
import './Person.css';

interface Props {
  name: string;
  age: number;
  click?: (name: string) => void;
  changed?: (e: React.ChangeEvent<HTMLInputElement>) => void
  children?: React.ReactNode;
}

// const person: React.FC<Props> = (props) => {
//   return (
//     <div>
//       <p>
//         I`m a {props.name} my age is {props.age} !
//       </p>
//       <p>{props.children}</p>
//     </div>
//   );
// };

export const Person = ({name,age,click,changed,children} : Props) => <aside>
     <div className="Person">
          <p onClick={() => click}>
            I`m a {name} my age is {age} !
          </p>
          <p>{children}</p>
          <input type="text" onChange={changed} value={name} />
        </div>
</aside>

export default Person;
