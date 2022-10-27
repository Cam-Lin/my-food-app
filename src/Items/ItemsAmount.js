import React, { useContext, useState } from "react";
import FoodContext from "../Context/food-context";

const ItemsAmount = () => {
  const [amount, setAmount] = useState(0);

  const addHandler = () => {
    setAmount(amount + 1);
  };

  return (
    <div className="flex flex-col content-end">
      <label>Amount</label>
      <input
        type="number"
        step="1"
        value={amount}
        className="w-6 h-6"
        onChange={() => {}}
      ></input>
      <button onClick={addHandler}>+ Add</button>
    </div>
  );
};

export default ItemsAmount;
