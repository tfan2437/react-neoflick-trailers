import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Player from "./pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PlayerTV from "./pages/Player/PlayerTV";
import SearchResults from "./pages/SearchResults/SearchResults";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        navigate("/");
      } else {
        console.log("Logged Out");
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/searchresults/:id" element={<SearchResults />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/playertv/:id" element={<PlayerTV />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
