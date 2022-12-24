import { createContext, useState } from "react";
import addedTasks from "./addedTasks";
const ShareTask = createContext();

function ContextProvider({ children }) {
  const [doneTasks, setDoneTasks] = useState([]);
  const [tasks, setTasks] = useState(addedTasks);
  const { alert, showAlert } = useState(false);

  return (
    <ShareTask.Provider
      value={{ doneTasks, setDoneTasks, tasks, setTasks, alert, showAlert }}
    >
      {children}
    </ShareTask.Provider>
  );
}

export { ShareTask, ContextProvider };
