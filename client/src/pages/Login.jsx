import React from "react";
//can use rafc shortcut

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username'></input>
        <input type="password" placeholder='password'></input>
      </form>
    </div>
  );
};

export default Login;
