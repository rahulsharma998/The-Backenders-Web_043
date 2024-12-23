import React from "react";
//import "@fortawesome/fontawesome-free/css/all.css";

const Panels = ({ toggleMode }) => {
  return (
    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>New here?</h3>
          <p>Enter your personal details and start your journey with us</p>
          <button className="btn transparent" onClick={toggleMode}>
            Sign up
          </button>
        </div>

        <img
          src="https://raw.githubusercontent.com/ShivamGurjar07/q13s016/b305c05cbec889c54a675b3a392138cb253e8537/medicn2.svg"
          className="image"
          alt="Register"
        />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>One of us?</h3>
          <p>To keep connected with us, please login with your personal info</p>
          <button className="btn transparent" onClick={toggleMode}>
            Sign in
          </button>
        </div>
        <img
          src="https://raw.githubusercontent.com/ShivamGurjar07/q13s016/b305c05cbec889c54a675b3a392138cb253e8537/medicn.svg"
          className="image"
          alt="Register"
        />
      </div>
    </div>
  );
};

export default Panels;
