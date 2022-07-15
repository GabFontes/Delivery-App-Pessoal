import React, { useState } from "react";

export default function ItemsCounter() {
  [num, setNum] = useState(0);

  // Constantes com o máximo e o mínimo de itens no estado
  const maxItems = 10;
  const minItems = 0;

  // Função que incrementa o número
  incrementNum = () => {
    if (num < maxItems) setNum(Number(num) + 1);
  }

  // Função que decrementa o número
  decrementNum = () => {
    if (num > minItems) setNum(num - 1);
  }

  // Função que altera o valor do estado com base no input
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
