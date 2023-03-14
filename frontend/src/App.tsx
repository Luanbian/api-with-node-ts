import axios from 'axios';
import { useState } from 'react';

const baseURL = 'http://localhost:3000';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('');

  function createUser(e:any) {
    e.preventDefault()
    axios.post(`${baseURL}/newUser`,{ name, age, role}).then((response) => {
      console.log(response.data)
    })
  }

  return (
    <>
      <h1>Create</h1>
      <form onSubmit={createUser}>
        <label>Nome</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <label>Idade</label>
        <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)}/>
        <label>Funçao</label>
        <input type="text" id="role" value={role} onChange={(e) => setRole(e.target.value)}/>
        <input type="submit" value="Create"/>
      </form>
    </>
  )
}

export default App
