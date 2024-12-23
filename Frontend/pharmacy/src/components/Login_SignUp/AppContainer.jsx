import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Panels from "./Panels";

const AppContainer = () => {
  const [signUpMode, setSignUpMode] = useState(false);

  const toggleMode = () => {
    setSignUpMode(!signUpMode);
  };

  return (
    <div className={`container ${signUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <Login />
          <Signup toggleToLogin={() => setSignUpMode(false)} />
        </div>
      </div>
      <Panels toggleMode={toggleMode} />
    </div>
  );
};

export default AppContainer;
