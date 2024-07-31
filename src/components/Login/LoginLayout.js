import React from "react";
import "../../Assets/styles/LoginStyle.css";
const LoginLayout = ({
  username,
  setUsername,
  password,
  setPassword,
  handleLogin,
  error,
}) => {
  return (
    // Background container for login page
    <div className="login-background">
      <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div className="login-form p-5 rounded shadow">
          <h2>Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              required
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              required
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
