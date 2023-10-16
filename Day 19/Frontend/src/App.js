
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Home/Login';
import Signup from './Components/Home/Signup';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Contact from './Components/Home/Contact';
import Profile from './Profile/Profile';
import Guide from './Profile/Guide';
import Account from './Profile/Account';
import Faq from './Components/Home/Faq';
import Details from './Components/Dashboard/Details';
import Sample from './Components/Home/sample';
import Photographer from './Profile/Photographer';


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/guide' element={<Guide/>}/>
    <Route path='/account' element={<Account/>}/>
    <Route path='/details' element={<Details/>}/>
    <Route path='/photographer' element={<Photographer/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/faq' element={<Faq/>}/>
    <Route path='/sample' element={<Sample/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App;
