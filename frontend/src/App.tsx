import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "http://localhost:8080";

interface IUser {
  id: String;
  name: String;
  age: String;
  role: String;
}

const ListOfUsers: React.FC = () => {
  const [list, setList] = useState<IUser[] | null>();
  useEffect(() => {
    axios.get(`${baseURL}/users`).then((response) => {
      setList(response.data.result);
    });
  }, []);
  return (
    <>
      {list?.map((item) => (
        <div key={item.id.toString()}>
          <ul>
            <li>id:{item.id}</li>
            <li>nome: {item.name}</li>
            <li>age: {item.age}</li>
            <li>função: {item.role}</li>
          </ul>
        </div>
      ))}
    </>
  );
};

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");

  function createUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios.post(`${baseURL}/users`, { name, age, role }).then((response) => {
      console.log(response.data);
    });
  }

  function updateUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .put(`${baseURL}/users/${id}`, { name, age, role })
      .then((response) => {
        console.log(response);
      });
  }

  function deleteUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios.delete(`${baseURL}/users/${id}`).then((response) => {
      console.log(response);
    });
  }

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
      <ListOfUsers />

      <br />

      <h1>Update</h1>
      <form onSubmit={updateUser}>
        <label>Id</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
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
        <input type="submit" value="Update" />
      </form>

      <br />

      <h1>Delete</h1>
      <form onSubmit={deleteUser}>
        <label>Id</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <input type="submit" value="delete" />
      </form>
    </>
  );
}

export default App;
