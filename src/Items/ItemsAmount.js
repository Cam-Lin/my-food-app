const ItemsAmount = () => {
  const amountHandler = () => {};

  return (
    <div className="flex flex-col content-end">
      <label>Amount</label>
      <input
        type="number"
        step="1"
        value="0"
        className="w-6 h-6"
        onChange={amountHandler}
      ></input>
      <button>+ Add</button>
    </div>
  );
};

export default ItemsAmount;
