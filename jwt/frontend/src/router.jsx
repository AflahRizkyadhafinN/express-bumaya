import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";

export default function RouterIndex() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
