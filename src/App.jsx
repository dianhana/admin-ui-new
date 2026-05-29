import "./App.css";
import { Routes, Route } from "react-router-dom";

import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;