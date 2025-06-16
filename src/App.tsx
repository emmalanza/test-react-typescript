import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then(res => res.json())
      .then(res => setUsers(res.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1>Prueba técnica</h1>
      {
        JSON.stringify(users)
      }
    </>
  )
}

export default App;
