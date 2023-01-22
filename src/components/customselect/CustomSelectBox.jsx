import React, { useState } from "react";
import "./style.css";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";

const values = ["Value1", "Value2", "Value3", "Value4", "Value5"];
const CustomSelectBox = () => {
  const [options, setOptions] = useState(values);
  const [selectOption, setSelectOption] = useState(false);
  const [search, setSearch] = useState("");
  const [selectOptions, setSelectOptions] = useState([]);

  const handleOnSelect = () => {
    setSelectOption((prev) => !prev);
  };

  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSelectOption = (value, index) => {
    setSelectOptions((prevState) => [value, ...prevState]);

    const values = [...options];
    values.splice(index, 1);
    setOptions(values);
  };

  const handleRemoveOption = (item) => {
    if (selectOptions.includes(item)) {
      setSelectOptions((prevState) =>
        prevState.filter((existing) => existing !== item)
      );
    }

    setOptions([...options, item]);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__box" onClick={handleOnSelect}>
        <div className="dropdown__select-box">
          <div className="options-box">
            {selectOptions.map((item, index) => (
              <div key={index} className="options">
                <label>{item}</label>
                <AiOutlineCloseCircle
                  onClick={() => handleRemoveOption(item)}
                />
              </div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search value"
            value={search}
            onChange={handleOnChange}
          />
        </div>
        <span
          className={`${
            selectOption ? "dropdown__icon rotate-icon" : "dropdown__icon"
          }`}
        >
          <MdArrowDropDown />
        </span>
        {selectOption ? (
          <div className="dropdown__options">
            {options
              .filter((item) => {
                if (search !== "") {
                  return item.toLowerCase().includes(search.toLowerCase());
                }

                return item;
              })
              .map((data, index) => {
                return (
                  <ul key={index}>
                    <li onClick={() => handleSelectOption(data, index)}>
                      {data}
                    </li>
                  </ul>
                );
              })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CustomSelectBox;
