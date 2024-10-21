import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserIndex from "./pages/user/UserIndex";
import Login from "./pages/Login";


function App() {


  return (
          <Router>
            <div className="p-5">
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/user' element={<UserIndex />} />
                  <Route path="/login" element={<Login />} />
                  
              </Routes>
            </div>
                
          </Router>
  );
}

export default App;
