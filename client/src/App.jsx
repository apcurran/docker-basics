import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [plays, setPlays] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((result) => result.json())
      .then((data) => setPlays(data));
  }, []);

  return (
    <main>
      <h1>Some Shakespeare Plays</h1>
      <ul>
        {plays.map((play) => {
          return <li key={play.id}>{play.title}</li>;
        })}
      </ul>
    </main>
  );
}

export default App;
