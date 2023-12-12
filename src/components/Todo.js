import React, { useState } from "react";

function Todo() {
  const [inputText, setInputText] = useState("");

  const [taskItems, setTaskItems] = useState([]);
  // Handle change
  function hancleChange(event) {
    const inputValue = event.target.value;
    setInputText(inputValue);
  }

  // Handle click
  function handleClick() {
    const isPresent = taskItems.findIndex((i) => {
      return i === inputText ? true : false;
    });

    console.log(isPresent);
    if (isPresent === -1) {
      if (inputText.length > 0) {
        setTaskItems((previousValues) => {
          return [...previousValues, inputText];
        });
        setInputText("");
      } else {
        alert("please enter the task ");
      }
    } else {
      alert("this task already exist");
    }
  }

  // Handle delete
  function deleteEvent(event) {
    const deleteItem = event.target.value;
    console.log(deleteItem);
    const newArray = taskItems.filter((eachTask) => {
      return eachTask != deleteItem;
    });
    //   console.log(newArray);
    setTaskItems(newArray);
  }
  return (
    <div className="todo">
      <div className="heading">
        <h3>To-do list</h3>
      </div>
      <div>
        <input
          type="text"
          placeholder="Add item"
          onChange={hancleChange}
          value={inputText}
        ></input>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>

      <div>
        {taskItems.map((eachTask) => (
          <li>
            {eachTask}
            <button value={eachTask} onClick={deleteEvent}>
              X
            </button>
          </li>
        ))}
        <ul>{}</ul>
      </div>
    </div>
  );
}
export default Todo;
