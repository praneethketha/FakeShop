import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [flip, setFlip] = useState(false);
  return (
    <>
      <div className="section_center loginPage">
        {/* singinPage */}
        <section className={`login_signup front ${flip && "flip"}`}>
          <h2>Sign In</h2>
          <form className="form">
            <div className="input_group">
              <input type="email" name="email" id="email" required=" " />
              <label>email</label>
              <span></span>
            </div>
            <div className="input_group">
              <input
                type="password"
                name="password"
                id="password"
                required=" "
              />
              <label>Password</label>
              <span></span>
            </div>
            <div className="login__span">
              <div>
                <input type="checkbox" name="remember" id="rememeber" />
                <span>Remember me</span>
              </div>
              <p>forget password?</p>
            </div>
            <button type="submit" className="btn">
              Log in
            </button>
            <div className="create_account">
              Do'nt You have an account?
              <span onClick={() => setFlip(!flip)}>SignUp Now!</span>
            </div>
          </form>
        </section>
        {/* singup page */}
        <section className={`login_signup back ${flip && "flipback"}`}>
          <h2>Sign Up</h2>
          <form className="form">
            <div className="input_group">
              <input type="text" name="name" id="name" required=" " />
              <label>name</label>
              <span></span>
            </div>
            <div className="input_group">
              <input type="email" name="email" id="email" required=" " />
              <label>email</label>
              <span></span>
            </div>
            <div className="input_group">
              <input
                type="password"
                name="password"
                id="password"
                required=" "
              />
              <label>Set Password</label>
              <span></span>
            </div>
            <div className="input_group">
              <input
                type="password"
                name="password"
                id="password"
                required=" "
              />
              <label>Confirm Password</label>
              <span></span>
            </div>
            <button type="submit" className="btn">
              SignUp
            </button>
            <div className="create_account">
              Do You already have an account?
              <span onClick={() => setFlip(!flip)}>SignIn</span>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Login;
