import React, { useState } from "react";
import "../../assets/css/style.css";

const Signup = ({ toggleToLogin }) => {
  const [name, setName] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (/*!firstName || !lastName || !mobile ||*/!name|| !email || !password) {
        setError("Please fill in all fields.");
        return;
      }

      const response = await fetch("https://the-backenders-043-1.onrender.com/api/users/register", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // firstName,
          // lastName,
          // mobile,
          name,
          email,
          password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to sign up");
      }

      alert("Sign up successful!");
      toggleToLogin();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form action="#" className="sign-up-form" onSubmit={handleSignup}>
      <h2 className="title">Sign up</h2>
      {error && (
        <p className="error" style={{ color: "red" }}>
          {error}
        </p>
      )}

      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div> */}

      {/* <div className="input-field">
        <i className="fas fa-phone"></i>
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div> */}

      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
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

      <input type="submit" className="btn" value="Sign up" />

      <div>
        <button
          type="button"
          className="btn"
          style={{ width: "50px", margin: "5px" }}
        >
          <i className="fab fa-google"></i>
        </button>
        <button
          type="button"
          className="btn"
          style={{ width: "50px", margin: "5px" }}
        >
          <i className="fab fa-facebook-f"></i>
        </button>
        <button
          type="button"
          className="btn"
          style={{ width: "50px", margin: "5px" }}
        >
          <i className="fab fa-twitter"></i>
        </button>
        <button
          type="button"
          className="btn"
          style={{ width: "50px", margin: "5px" }}
        >
          <i className="fab fa-linkedin-in"></i>
        </button>
      </div>
    </form>
  );
};

export default Signup;
