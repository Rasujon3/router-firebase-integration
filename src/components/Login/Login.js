import React from "react";

const Login = () => {
  return (
    <div>
      <h3>Please login</h3>
      <div style={{ margin: "20px" }}>
        <button onClick={""}>Google Sign In</button>
      </div>
      <form>
        <input type="email" placeholder="Your Email" /> <br />
        <input type="password" placeholder="Password" /> <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
