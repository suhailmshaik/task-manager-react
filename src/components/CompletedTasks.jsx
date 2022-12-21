import React, { useContext } from "react";
import shareTask from "../util/userContext";

const CompletedTasks = () => {
  const { doneTasks, setDoneTasks } = useContext(shareTask);

  return (
    <div className="completed-tasks-div">
      <h2>CompletedTasks</h2>
      <div className="tasks-container">
        {/* map function to render task names from doneTasks state */}
        {doneTasks.map((task, index) => (
          <p key={index}>{task.name}</p>
        ))}
      </div>
    </div>
  );
};

export default CompletedTasks;
