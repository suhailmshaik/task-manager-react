import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import CompletedTasks from "./components/CompletedTasks";
import shareTask from "./util/userContext";

function App() {
  const [doneTasks, setDoneTasks] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>TaskZ</h1>
        <p>A task manager built using react.js</p>
      </header>
      <button>Swap All</button>
      <main>
        <shareTask.Provider value={{ doneTasks, setDoneTasks }}>
          <Tasks />
          <CompletedTasks />
        </shareTask.Provider>
      </main>
    </div>
  );
}

export default App;
