
import "./main.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Page404 from "./pages/Page404";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;

//http://localhost:3001/api-docs/   (pour le swagger)
