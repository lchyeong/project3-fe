import React from "react";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl font-bold text-center">
          Welcome to My React App
        </h1>
        <Button variant="contained" color="primary" className="mt-4">
          Material-UI Button
        </Button>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
          Tailwind CSS Button
        </button>
      </header>
    </div>
  );
}

export default App;
