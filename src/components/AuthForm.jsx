import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ toggleAuthForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TO DO: implement login or create account logic
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "Create Account"}</h2>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />

        <button type="submit">{isLogin ? "Login" : "Create Account"}</button>

        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button type="button" onClick={handleToggle}>
            {isLogin ? "Create Account" : "Login"}
          </button>
        </p>
        <button type="button" onClick={toggleAuthForm}>
          Cancel
        </button>
      </form>
    </>
  );
};

export default AuthForm;
