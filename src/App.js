import './App.css';
import  {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import User from './components/User/User';
import NavBar from './components/Navbar/Navbar';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path ="/users/:userId" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
