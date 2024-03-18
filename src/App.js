import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
