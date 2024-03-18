import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/Authentication/ForgotPassword/index";
import Login from "./components/Authentication/Login/index";
import Dashboard from "./components/Dashboard/index";
import "./index.css";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
