import React, { useContext } from "react";
import { ShareTask } from "../util/userContext";

const CompletedTasks = () => {
  let { doneTasks, setDoneTasks } = useContext(ShareTask);

  const clearTasks = () => {
    for (let i = 0; i <= doneTasks.length; i++) {
      doneTasks.pop();
    }
    setDoneTasks([]);
    console.log(doneTasks);
  };

  const handleRemoveTask = (taskName) => {
    setDoneTasks((current) => current.filter((task) => task.name !== taskName));
  };
  return (
    <div className="completed-tasks-div">
      <h2>CompletedTasks</h2>
      <div className="tasks-container">
        {/* map function to render task names from doneTasks state */}
        {doneTasks.map((task, index) => (
          <p
            className="single-task"
            onClick={(e) => {
              const removeTaskName = e.target.innerText;
              handleRemoveTask(removeTaskName);
            }}
            key={index}
          >
            {task.name}
          </p>
        ))}
      </div>
      <button onClick={() => clearTasks()}>clear tasks</button>
    </div>
  );
};

export default CompletedTasks;
