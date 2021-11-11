import "./App.css";
//import {data} from './data';
import { useState, useEffect } from "react";

const url = "https:/api.github.com/users";

const UseEffectSecondArgument = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          return (
            <li key={user.id}>
              <img src={user.avatar_url} alt="alt" />
              <div>
                <h4>{user.login}</h4>
                <a href={user.html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

function App() {
  return (
    <div className="container">
      <UseEffectSecondArgument />
    </div>
  );
}

export default App;
