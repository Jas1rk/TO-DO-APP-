import React, { useState } from "react";
import List from "../List/list";
import "./todo.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Todo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleValue = (event) => {
    event.preventDefault();
    if (input.trim() === "") {
      toast.warn("Field is empty Please add !!", {
        style: {
          color: "red",
        },
      });
    } else {
      setItems([...items, input]);
      setInput("");
      toast.success("Item added", { theme: "dark" });
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="input-session">
        <input
          type="text"
          value={input}
          placeholder="Enter items"
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={handleValue}>Add</button>
      </div>
      <List items={items} setItems={setItems} toast={toast} />
    </div>
  );
};

export default Todo;
