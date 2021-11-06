import "./App.css";
//import {data} from './data';
import { useState } from "react";

/*const UseStateArray = () => {
    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id)
        setPeople(newPeople)
    }
    return (
        <div>
            {
                people.map((person) => {
                    const {id, name} = person;

                    return (
                        <div key={id} className="item">
                            <h4>{name}</h4>
                            <button onClick={() => removeItem(id)}>Remove</button>
                        </div>
                    )
                })
            }
            <button className="btn" onClick={() => setPeople([])}>Clear list</button>
        </div>
    )
}*/

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Adrian",
    age: 49,
    message: "random message",
  });
  const changeMessageHandler = () => {
    console.log("change message handler");
    setPerson({...person, message: 'new message'})
  };
  return (
    <div>
      <h2>Use State Object</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessageHandler}>
        Change message
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      {/*<UseStateArray/>*/}
      <UseStateObject />
    </div>
  );
}

export default App;
