import { useEffect, useState } from "react";
import { type User } from "./types.d";
import { UsersLists } from "./components/UsersList";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then(res => res.json())
      .then(res => setUsers(res.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1>Prueba técnica</h1>
      <UsersLists users={users} />
    </>
  )
}

export default App;


