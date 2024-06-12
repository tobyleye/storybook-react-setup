import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome to our awesome app</h1>
      <div className="card">
        <Button color="primary">primary color</Button>
        <Button color="secondary">secondary color</Button>
      </div>
    </>
  );
}

export default App;
