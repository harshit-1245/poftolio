
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Skills from "./components/Skill/Skill"
import Experience from "./components/Experience/Experience"
import Project from "./components/Project/Project"
import MainHeader from './components/mainheader/MainHeader';
import Navbar from './components/navbar/Navbar';





function App() {


  return (
   
   <BrowserRouter>
   
   <Navbar/>
      
   <Routes>
    <Route path='/' element={<MainHeader/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/contact' element={<Project/>}/>
      </Route>
   </Routes>
   
   
   </BrowserRouter>
  
  );
}

export default App;
