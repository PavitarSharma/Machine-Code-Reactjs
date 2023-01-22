import { useState } from "react";

const DynamicInput = () => {
  const [inputFields, setInputFields] = useState([
    {
      firstName: "",
      lastName: "",
    },
  ]);

  const handleOnChange = (event, index) => {
    let values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleAddField = () => {
    setInputFields([...inputFields, { firstName: "", lastName: "" }]);
  };

  const handleRemoveField = (index) => {
    let values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(inputFields);
  };
  return (
    <>
      {inputFields.map((input, index) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "22px",
            marginLeft: "20px",
          }}
          key={index}
        >
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={input.firstName}
              onChange={(event) => handleOnChange(event, index)}
              style={{ padding: "10px 8px", outline: "none" }}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={input.lastName}
              onChange={(event) => handleOnChange(event, index)}
              style={{
                padding: "10px 8px",
                outline: "none",
                marginLeft: "10px",
              }}
            />
          </div>
          <div>
            {inputFields.length !== 1 && (
              <button
                onClick={() => handleRemoveField(index)}
                style={{ padding: "4px 16px", fontSize: "22px" }}
              >
                -
              </button>
            )}
            {inputFields.length - 1 === index && (
              <button
                style={{
                  padding: "4px 16px",
                  fontSize: "22px",
                  marginLeft: "10px",
                }}
                onClick={handleAddField}
              >
                +
              </button>
            )}
          </div>
        </div>
      ))}
      <button
        style={{
          padding: "10px 16px",
          marginTop: "20px",
          marginLeft: "20px",
        }}
        onClick={handleOnSubmit}
      >
        Submit
      </button>
    </>
  );
};

export default DynamicInput;
