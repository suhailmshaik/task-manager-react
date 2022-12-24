import React, { useContext } from "react";
// import addedTasks from "../util/addedTasks";
import tasksDone from "../util/tasksDone";
// import shareTask from "../util/userContext";
import { ShareTask } from "../util/userContext";

const Tasks = () => {
  const { setDoneTasks } = useContext(ShareTask);
  // const [tasks, setTasks] = useState(addedTasks);
  const { tasks, setTasks } = useContext(ShareTask);

  const handleAddTAsk = (task) => {
    if (task !== "") {
      setTasks([...tasks, { name: task }]);
    }
  };

  // handleRemoveTask function removes the task on click
  const handleRemoveTask = (taskName) => {
    // pushing the taskname into an tasksDone array and then setting tasksDone array for doneTasks state
    tasksDone.push({
      name: taskName,
    });
    setDoneTasks(tasksDone);
    // console.log(doneTasks);
    setTasks((current) => current.filter((task) => task.name !== taskName));
  };

  return (
    <div className="tasks-div">
      <h2>current tasks</h2>
      <p>you have {tasks.length} tasks left</p>
      <div className="tasks-container">
        {tasks.map((task, index) => (
          <p
            onClick={(e) => {
              const removeTaskName = e.target.innerText;
              // console.log(removeTaskName);
              handleRemoveTask(removeTaskName);
            }}
            className="single-task"
            key={index}
          >
            {task.name}
          </p>
        ))}
      </div>

      <div className="add-task-div">
        <input type="text" placeholder="add task" />
        <p
          onClick={(e) => {
            const newTaskName = e.target.previousElementSibling.value;
            handleAddTAsk(newTaskName);
            e.target.previousElementSibling.value = "";
          }}
        >
          add
        </p>
      </div>
    </div>
  );
};

export default Tasks;
