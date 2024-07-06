import { useEffect, useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("./data.js")
      .then((res) => console.log(res.json()))
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));
  }, [setPeople]);

  console.log(people);
  return (
    <main className="text-left p-20">
      <div className="bg-white shadow-md p-6 rounded-md space-y-6 text-gray-600">
        <h1 className="text-4xl font-bold text-center">
          Birthday reminder project
        </h1>
        <h3 className="text-2xl font-semibold"> birthdays today</h3>
        <List people={people} />

        <button
          onClick={() => setPeople([])}
          className="text-white px-5 py-2 font-semibold bg-green-600"
        >
          Clear All
        </button>
      </div>
    </main>
  );
}

export default App;
