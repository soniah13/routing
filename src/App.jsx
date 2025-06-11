import { useState } from "react";
import "./index.css";
import Homepage from "./Components/Homepage";
import Profile from "./Components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<Profile logout={logout} />} />
        </Route>

        <Route path="/login" element={<Login login={login} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
