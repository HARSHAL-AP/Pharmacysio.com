import logo from "./logo.svg"; 
import react,{useEffect,useState} from "react"
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Allroutes } from "./Routes/Allroutes";
function App() {
  return (
    <div className="App">
        <Navbar />
       
        <Allroutes />
       
        
        
    </div>
  );
}

export default App;
