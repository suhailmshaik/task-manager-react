import "./App.css";
import Tasks from "./components/Tasks";
import CompletedTasks from "./components/CompletedTasks";

function App() {
  return (
    <div className="App">
      <header>
        <h1>TaskZ</h1>
        <p>A task manager built using react.js</p>
      </header>
      <button>Swap All</button>
      <main>
        <Tasks></Tasks>
        <CompletedTasks></CompletedTasks>
      </main>
    </div>
  );
}

export default App;
