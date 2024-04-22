import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import AdminScreen from "./Screens/AdminScreen";
import ProfileScreen from "./Screens/ProfileScreen";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        {/* <Route path="/profile" element={<ProfileScreen />} /> */}
        <Route path="/profile/:uid" element={<ProfileScreen users={[]} />} /> {/* Passer les données des utilisateurs à ProfileScreen */}

      </Routes>
    </Router>
  );
}

export default App;
