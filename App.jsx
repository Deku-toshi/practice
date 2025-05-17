import { useState } from "react";

function App() {
  const [count , setCount] = useState(0);

  return (
    <>
      <h3>カウンター</h3>
      {count}
      <button>+</button>
      <button>-</button>
    </>
  );
}

export default App;
