import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../utils/listSlice";

const ListGroup = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.list);

  const handleClick = (task) => {
    dispatch(removeItem(task)); // Pass the task to remove
  };

  return (
    <div className="mt-10 flex justify-center w-full">
      <div className="w-1/2 flex flex-col  space-y-2">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex justify-center items-center space-x-2"
          >
            <p className="p-2 border rounded-l-full border-slate-950">{task}</p>
            <button
              className="bg-red-400 rounded-r-full p-2"
              onClick={() => handleClick(task)} // Pass the task to handleClick
            >
              Task Complete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListGroup;
