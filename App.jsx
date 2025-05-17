import { useState } from "react";

function App() {
  const [count , setCount] = useState(0);
  const [toggle , setToggle] = useState(false);
  const [value , setValue] = useState("");

  const toggleChange = () => {
    setToggle(prev => !prev)
  }

  return (
    <>
      <h3>カウンター</h3>
      {count}
      <button onClick={() => setCount(prev => prev +=1)}>+</button>
      <button onClick={() => setCount(prev => prev -=1)}>-</button>

      <h3>トグル</h3>
      <button onClick={toggleChange}>{toggle ? "表示" : "非表示"}</button>

      <h3>入力フォーム</h3>
      <input type="text" value={value} setValue={(e) => setValue(e.target.value)}/>
    </>
  );
}

export default App;
