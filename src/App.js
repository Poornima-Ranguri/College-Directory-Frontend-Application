import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Profile from "./components/UserDetails";
import "./App.css";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/register" element={<RegisterForm />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route to="/not-found" />
    </Routes>
  </BrowserRouter>
);

export default App;
