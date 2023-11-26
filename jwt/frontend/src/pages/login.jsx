import { useState } from "react";
import { LoginController } from "../controllers/mainControllers";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  return (
    <div>
      <input type="email" onChange={(value) => setEmail(value.target.value)} />
      <br />
      <input
        type="password"
        onChange={(value) => setPassword(value.target.value)}
      />
      <br />
      <button type="button" onClick={() => LoginController(email, password)}>
        Login
      </button>
      <button type="button" onClick={() => navigate("/signup")}>
        Signup
      </button>
    </div>
  );
};
