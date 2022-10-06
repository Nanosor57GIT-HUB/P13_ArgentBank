// import TestReactHello from './components/TestReactHello';
import "./main.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Page404 from "./pages/Page404";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>   
        <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" element={<Dashboard />} /> 
          <Route path="*" element={<Page404 />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;


//http://localhost:3001/api-docs/   (pour le swagger)