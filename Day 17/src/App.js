
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Home/Login';



function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
