import React, { FunctionComponent } from "react";

interface PersonProps {
  name: string;
  age: number;
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

const Person: FunctionComponent<PersonProps> = (props) => <aside>
     <div>
          <p>
            I`m a {props.name} my age is {props.age} !
          </p>
          <p>{props.children}</p>
        </div>
</aside>
export default Person;
