import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Allroutes } from "./Routes/Allroutes";
function App() {
  return (
    <div className="App">
      <div className="siderbody">
        <Sidebar />
      </div>
      <div className="mainbody">
        <Navbar />
        <Allroutes />
      </div>
    </div>
  );
}

export default App;
