import React, { useState } from "react";
import { RegisterController } from "../controllers/mainControllers";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  return (
    <div>
      <h3>name</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h3>email</h3>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <h3>password</h3>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <h3>confirm password</h3>
      <input type="password" onChange={(e) => setCPassword(e.target.value)} />
      <br />
      <button
        type="submit"
        onClick={() => [
          RegisterController(name, email, password, cPassword),
          console.log(name, email, password, cPassword),
        ]}
      >
        Add user
      </button>
    </div>
  );
};
