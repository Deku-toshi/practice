import { useState } from "react";

function App() {
  const [count , setCount] = useState(0);

  return (
    <>
      <h3>カウンター</h3>
      {count}
      <button onClick={() => setCount(prev => prev +=1)}>+</button>
      <button onClick={() => setCount(prev => prev -=1)}>-</button>
    </>
  );
}

export default App;
