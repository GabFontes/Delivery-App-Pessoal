import React from "react";

export default function ItemsCounter() {
  [num, setNum] = useState(0);

  incrementNum = () => {
    if (num <10) setNum(Number(num) + 1);
  }

  decrementNum = () => {
    if (num > 0) setNum(num - 1);
  }

  handleChange = (e) => {
    setNum(e.target.value);
  }

  return (
    <div>
      <button type="button" onClick={decrementNum}>-</button>
      <input type="text" value={num} onChange={handleChange}/>
      <button type="button" onClick={incrementNum}>+</button>
    </div>
  )
}
