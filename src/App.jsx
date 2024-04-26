import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/Home/HomeScreen";
import AdminScreen from "./Screens/Admin/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
