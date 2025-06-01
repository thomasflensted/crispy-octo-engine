import "./app.css";
import Draggable from "./components/elements/Draggable";
import NavBar from "./components/elements/NavBar";
import Note from "./components/note/Note";

function App() {
  return (
    <div className="flex flex-col h-screen relative bg-zinc-100">
      <NavBar />
      <Draggable initialPosition={{ x: 0.5, y: 0.5 }} onDragEnd={() => console.log("Drag ended")}>
        <Note heading="Hello world">
          <div className="">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi </p>
          </div>
        </Note>
      </Draggable>
      <Draggable initialPosition={{ x: 0.2, y: 0.25 }} onDragEnd={() => console.log("Drag ended")}>
        <Note heading="Hello world">
          <div className="">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi </p>
          </div>
        </Note>
      </Draggable>
      <Draggable initialPosition={{ x: 0.4, y: 0.8 }} onDragEnd={() => console.log("Drag ended")}>
        <Note heading="Hello world">
          <div className="">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi </p>
          </div>
        </Note>
      </Draggable>
      <Draggable initialPosition={{ x: 0.75, y: 0.3 }} onDragEnd={() => console.log("Drag ended")}>
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
