import { useEffect, useState } from "react";
import "./App.css";
import NewList from "./NewList";

function App() {
  

  return (
    <main className="text-left p-20">
      <div className="bg-white shadow-md p-6 rounded-md space-y-6 text-gray-600">
        <h1 className="text-4xl font-bold text-center">
          Birthday reminder project
        </h1>
        <h3 className="text-2xl font-semibold"> birthdays today</h3>
        <NewList />

        <button
          onClick={() => console.log("clicked")}
          className="text-white px-5 py-2 font-semibold bg-green-600"
        >
          Clear All
        </button>
      </div>
    </main>
  );
}

export default App;
