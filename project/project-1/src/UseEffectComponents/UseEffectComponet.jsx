import React, { useEffect, useState } from "react";

const UseEffectComponet = () => {
  let [amount, setAmount] = useState(0);
  let [count, setCount] = useState(0);
  let [first, setFirst] = useState(0);

  useEffect(() => {
    setAmount(amount + 100);
  }, [count]);

  return (
    <div className="text-3xl font-bold underline">
      <h1>amount on the cart : {amount}</h1>
      <h1>Value on the cart : {count}</h1>
      <h1>Value on the cart : {first}</h1>
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        add to cart
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setFirst(first + 1);
        }}
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        add to first cart
      </button>
    </div>
  );
};

export default UseEffectComponet;
