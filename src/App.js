import "./App.css";
import { Routes, Route } from "react-router-dom";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/add-student" element={<AddStudent />} />
      </Routes>
    </div>
  );
}

export default App;
