import Redirect from "./Redirect";
import { BrowserRouter, Routes, Route, Link, useHistory, useNavigation } from "react-router-dom";
import About from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import Student from "./Student";

export const App = () => {

  const handleNavigate = () => {

  }

  return (
    <>
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/student/jim-smith">Student: Jim Smith</Link>
        </li>
        <li>
          <Link to="/student/jane-smith/50001">Student: Jane Smith 50001</Link>
        </li>
        <li>
            <Link onClick={() => handleNavigate } to="/redirect">Redirect</Link>
        </li>
      </ul>
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />} />
        
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/student/:studentname" element={<Student />} />
        
        <Route path="/student/:studentname/:studentno" element={<Student />} />
        
        <Route path="/redirect" element={<Redirect/>}/>
      </Routes>
    </BrowserRouter>
    </> 
    )
}



export default App;
