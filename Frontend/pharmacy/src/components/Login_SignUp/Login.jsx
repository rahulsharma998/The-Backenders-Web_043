import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/css/style.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("https://the-backenders-043-1.onrender.com/api/users/login", {
        method: "POST",
        // credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Send email and password
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      } 
      const data = await response.json();
      // Assuming the API sends a token on successful login
      localStorage.setItem("token", data.token); // Store token in localStorage
      navigate("/"); // Redirect to home
    } catch (err) {
      setError(err.message); // Display the error message
    }
  };

  const handleGoogleLogin = async () => {
    setError("Google Login not integrated with the backend yet.");
  };

  return (
    <form action="#" className="sign-in-form" onSubmit={handleLogin}>
      <h2 className="title">Sign in</h2>
      {error && <p className="error">{error}</p>}
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <input type="submit" value="Login" className="btn solid" />
      <div>
        <button
          type="button"
          style={{ width: "50px", margin:"5px" }}
          className="btn"
          onClick={handleGoogleLogin}
        >
          <i className="fab fa-google"></i>
        </button>
        <button
          type="button"
          style={{ width: "50px" ,margin:"5px"}}
          className="btn"
        >
          <i className="fab fa-facebook-f"></i>
        </button>
        <button
          type="button"
          style={{ width: "50px" ,margin:"5px" }}
          className="btn"
        >
          <i className="fab fa-twitter"></i>
        </button>
        <button
          type="button"
          style={{ width: "50px" , margin:"5px"}}
          className="btn"
        >
          <i className="fab fa-linkedin-in"></i>
        </button>
        
      </div>
    </form>
  );
};

export default Login;
