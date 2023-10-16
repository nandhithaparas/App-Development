
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Dashboard from './DashBoard/Dashboard';
import Dasboardop from './DashBoard/Dasboardop';
import Navbar from './NavBar/Navbar';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/dash" element={<Dashboard/>}/>
    <Route path="/nav" element={<Navbar/>}/>
    <Route path="/dashboard" element={<Dasboardop/>}/>
    
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
