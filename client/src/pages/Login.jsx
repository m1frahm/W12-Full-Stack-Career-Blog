import React from "react";
//can use rafc shortcut

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='username'></input>
        <input required type="password" placeholder='password'></input>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
