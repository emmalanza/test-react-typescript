import { useEffect, useState } from "react";
import { type User } from "./types.d";
import { UsersLists } from "./components/UsersList";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [showColors, setShowColors] = useState(false);

  const toggleColors = () => setShowColors(!showColors);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then(res => res.json())
      .then(res => setUsers(res.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1>Prueba técnica</h1>

      <header>
          <button onClick={toggleColors}>
          {showColors ? 'Quitar color' : 'Colorear filas'}
          </button>
      </header>

      <main>
        <UsersLists showColors={showColors} users={users} />
      </main>

    </>
  )
}

export default App;


