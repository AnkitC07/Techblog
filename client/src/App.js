import './App.css';
import Topbar from './components/Topbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from "./components/Login"
import Profile from './components/Profile';
import AddBlog from './components/AddBlog';
import Blog from './components/Blog';


import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    
      <Topbar/>

      <Routes>
    
        <Route path='/'
        element={<Home />}
        />

        <Route path="/login"
        element={<Login />}
        />

        <Route path="/signup"
        element={<Signup />}
        />
        <Route path='/profile'
        element={<Profile />}/>

        <Route path='/AddBlog'
        element={<AddBlog />}/>

        <Route path="/Blog"
        element={<Blog />}
        />

        
      </Routes>
    </>

  );
}

export default App;
