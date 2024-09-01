import React from "react";
import ListGroup from "./ListGroup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "../utils/listSlice";

const MainComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    if (inputValue.trim()) {
      dispatch(addItem(inputValue));
      setInputValue("");
    }
  };

  return (
    <div>
      <div className="flex justify-center ">
        <h1 className="mt-10 text-blue-600 text-4xl">React-Redux To-Do App</h1>
      </div>
      <div className=" flex justify-center mt-10">
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          className="rounded-l-full w-1/2 p-2 border border-gray-300 rounded text-center"
          placeholder="Enter your goal here"
        />
        <button
          type="button"
          className="w-20 bg-blue-400 rounded-r-full"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
      <ListGroup></ListGroup>
    </div>
  );
};

export default MainComponent;
