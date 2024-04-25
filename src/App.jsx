import { useState } from "react";

import Index from "./components/Home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="index">
        <Index />
      </div>
    </>
  );
}


export default App;
