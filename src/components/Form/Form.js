import React from "react";
import { useRef } from "react";

const Form = (props) => {
  const Description = useRef()
  const Price = useRef()
  const Name = useRef()


  const getdata = (event) => {
    event.preventDefault()
    const data = {
      Name: Name.current.value,
      Description: Description.current.value,
      Price: Price.current.value,
      Amount: 0
    };
    props.onsubmit(data)
  };
  return (<>
    <form >
      <label>Candy Name: </label>
      <input type="text" id="Id" ref={Name}></input>
      <label>Description : </label>
      <input type="text" id="description" ref={Description}></input>
      <label>Price : </label>
      <input type="number" id="name" ref={Price}></input>
      <button type="submit" onClick={getdata}>Add Item</button>
      <button onClick={props.iscartopen}>Cart</button>
    </form>
      </>
  );
};

export default Form;
