import "./app.css";
import Draggable from "./components/elements/Draggable";
import NavBar from "./components/elements/NavBar";
import Note from "./components/note/Note";

function App() {
  return (
    <div className="flex flex-col h-screen relative bg-zinc-100">
      <NavBar />
      <Draggable>
        <Note heading="Hello world">
          <div className="">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi </p>
          </div>
        </Note>
      </Draggable>
    </div>
  );
}

export default App;
