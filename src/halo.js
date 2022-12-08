import React, { useState } from "react";
import "./styles.css";
/// Name should not number only english characters
// name should be leass than 10 characters
// adddress and name should be present

const characterRegex = /^[a-zA-Z]+$/;

export default function Validation(props) {
  const [formState, setFormState] = useState({
    name: "",
    add: "",
    del: "b",
    error: ""
  });
  const changeHandler = (e) => {
    const { value, name } = e.target;
    if (name === "name") {
      if (
        (value.length <= 10 && value.match(characterRegex)) ||
        value.length === 0
      ) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      } else {
        console.log("elase mai aya");
      }
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (formState.add) {
      setFormState({ ...formState, error: "" });
      console.log(formState);
    } else {
      setFormState({ ...formState, error: "Address should be present" });
    }
  };
  return (
    <form>
      {formState.error && <div style={{ color: "red" }}>{formState.error}</div>}
      <div className="input-div">
        <label>Name:</label>
        <input name="name" value={formState.name} onChange={changeHandler} />
      </div>
      <div className="input-div">
        <label>Address:</label>
        <textarea name="add" value={formState.add} onChange={changeHandler} />
      </div>
      <div className="input-div">
        <label>Delivery Type:</label>
        <select name="del" onChange={changeHandler}>
          {props.options.map((el) => (
            <option selected={formState.del === el} value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
      <button onClick={onSubmit}>Save</button>
    </form>
  );
}
