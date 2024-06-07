import React, { useState } from "react";
import "./list.css";

const List = ({ items, setItems, toast }) => {
  const [editInput, setEditInput] = useState("");
  const [editIndex, setEditIndex] = useState([]);

  const deleteItems = (key) => {
    const updateItem = items.filter((data, index) => index !== key);
    setItems(updateItem);
    toast.success("Item deleted", { theme: "dark" });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditInput(items[index]);
  };

  const saveEdit = (index) => {
    const updateItems = [...items];
    updateItems[index] = editInput;
    setItems(updateItems);
    setEditIndex(null);
    setEditInput("");
    toast.success("Saved changes", { theme: "dark" });
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditInput("");
    toast.info("No changes", { theme: "dark" });
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editInput}
                  onChange={(event) => setEditInput(event.target.value)}
                />
              </div>
            ) : (
              item
            )}
            <div className="icons">
              {editIndex === index ? (
                <>
                  <i
                    className="fas fa-check"
                    onClick={() => saveEdit(index)}
                  ></i>
                  <i className="fas fa-window-close" onClick={cancelEdit}></i>
                </>
              ) : (
                <i
                  className="fas fa-edit"
                  onClick={() => handleEdit(index)}
                ></i>
              )}

              <i
                className="fas fa-trash-alt"
                onClick={() => deleteItems(index)}
              ></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
