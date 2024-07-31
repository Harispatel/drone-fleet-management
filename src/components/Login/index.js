/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../data/data.json";
import LoginLayout from "./LoginLayout";

const Login = () => {
  // State variables for username, password, and error message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle login logic
  const handleLogin = () => {
    const user = data.users.find(
      // Check and Verify User entered Username and PAssword with Predefined JSON
      (user) => user.username === username && user.password === password
    );
    if (user) {
      navigate("/overview");
      //  If Username or password is Empty
    } else if (username == "" || password == "") {
      setError("Please Enter details");
    } else {
      //  If Username or password Doesn't match
      setError("Invalid credentials");
    }
  };

  return (
    <LoginLayout
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      error={error}
    />
  );
};

export default Login;
