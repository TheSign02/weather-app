import { useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen">
      <MainContent />
      </div>
    </>
  );
}

export default App;
