import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "http://localhost:3000";

interface IUser {
  id: Number;
  name: String;
  age: String;
  role: String;
}

interface IProps {
  list: IUser[];
}

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");
  const [list, setList] = useState(null || []);

  function createUser(e: any) {
    e.preventDefault();
    axios.post(`${baseURL}/newUser`, { name, age, role }).then((response) => {
      console.log(response.data);
    });
  }

  useEffect(() => {
    axios.get(`${baseURL}/`).then((response) => {
      setList(response.data.result);
    });
  }, []);

  const ListOfUsers: React.FC<IProps> = ({ list }) => {
    return (
      <>
        {list.map((item) => (
          <div key={item.id.toString()}>
            <ul>
              <li>nome: {item.name}</li>
              <li>age: {item.age}</li>
              <li>função: {item.role}</li>
            </ul>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <h1>Create</h1>
      <form onSubmit={createUser}>
        <label>Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Idade</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Funçao</label>
        <input
          type="text"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <input type="submit" value="Create" />
      </form>
      <br />
      <h1>Read</h1>
      <ListOfUsers list={list} />
    </>
  );
}

export default App;
