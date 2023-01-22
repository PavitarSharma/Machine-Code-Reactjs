import React, { useState } from "react";

const MultipleCheckbox = () => {
  const [fruits, setFruits] = useState([]);
  const onHandleChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
      setFruits([...fruits, value]);
    } else {
      setFruits(fruits.filter((item) => item !== value));
    }
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(fruits);
  };
  return (
    <>
      <form>
        <input
        type="checkbox"
        name="fruits"
        value="Mango"
        onChange={onHandleChange}
      />
      <label htmlFor="">Mango</label>

      <input
        type="checkbox"
        name="fruits"
        value="Banana"
        onChange={onHandleChange}
      />
      <label htmlFor="">Banana</label>

      <input
        type="checkbox"
        name="fruits"
        value="Orange"
        onChange={onHandleChange}
      />
      <label htmlFor="">Orange</label>

      <input
        type="checkbox"
        name="fruits"
        value="Grapes"
        onChange={onHandleChange}
      />
      <label htmlFor="">Grapes</label>

      <button onClick={onHandleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default MultipleCheckbox
