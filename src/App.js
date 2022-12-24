import { useContext } from "react";
import { ShareTask } from "./util/userContext";
import "./App.css";
import Tasks from "./components/Tasks";
import CompletedTasks from "./components/CompletedTasks";

function App() {
  const { doneTasks, setDoneTasks } = useContext(ShareTask);
  const { tasks, setTasks } = useContext(ShareTask);
  // const { alert, showAlert } = useContext(ShareTask);

  const swap = () => {
    setTasks(doneTasks);
    setDoneTasks(tasks);
  };

  // const undoSwap = () => {
  //   setTasks(doneTasks);
  //   setDoneTasks(tasks);
  // };

  return (
    <div className="App">
      {/* {alert ? (
        <div className="alert show">
          <p>swapped successfully!</p>
          <button
            onClick={() => {
              undoSwap();
            }}
          >
            undo
          </button>
        </div>
      ) : null} */}

      <header>
        <h1>TaskZ</h1>
        <p>A task manager built using react.js</p>
      </header>
      <button
        onClick={() => {
          swap();
          // showAlert(true);
        }}
      >
        Swap All
      </button>
      <main>
        <Tasks />
        <CompletedTasks />
      </main>
    </div>
  );
}

export default App;
