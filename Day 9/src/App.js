
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Home/Login';
import Signup from './Components/Home/Signup';
import Home from './Components/Home/Home';
import Dashboard from './Components/DashBoard/Dashboard';
import Faq from './Components/Home/Faq';
import Profile from './Components/Profile/Profile';
import Guide from './Components/Profile/Guide';
import GuideDetails from './Components/Profile/GuideDetails';
import Tips from './Components/Home/Tips';

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/faq" element={<Faq/>}/>
    <Route path="/guide" element={<Guide/>}/>
    <Route path="/details" element={<GuideDetails/>}/>
    <Route path="/tips" element={<Tips/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
