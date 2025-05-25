import "./app.css";
import Draggable from "./components/Draggable";
import NavBar from "./components/NavBar";
import Note from "./components/Note";

function App() {
  return (
    <div className="flex flex-col h-screen relative bg-zinc-100">
      <NavBar />
      <Draggable>
        <Note />
      </Draggable>
    </div>
  );
}

export default App;
