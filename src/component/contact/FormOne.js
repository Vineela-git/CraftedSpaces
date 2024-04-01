import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FormOne = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [user, setUser] = useState(null);

  const form = useRef();

  const [result, showresult] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  //prevents the default form submission behavior, which is a page reload
  //Once you've prevented the default behavior, you can execute custom logic

  const handleLogin = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "usersuccess") {
          navigate("/userhome");
        } else if (result.data === "success") {
          navigate("/");
        } else if (result.data === "invalid password") {
          setErrorMessage("invalid password");
        }
        else{
            setErrorMessage("No records found, Please sign up first!")
        }
      })
      .catch((err) => console.log(err));
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  //To navigate to signup page when the button gets clicked.

  const handleSignup = () => {
    navigate("/signup");
  };

  if (!loggedIn) {
    return (
      <form ref={form} onSubmit={handleLogin} className="axil-contact-form">
        <div id="login" className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="contact-email"
            placeholder="example@mail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb--40">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="........"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errorMessage && <div className="error"> {errorMessage} </div>}
        </div>

        <div className="form-group mb--40">
          <label>
            <a href="#">Forgot Password?</a>
          </label>
        </div>

        <div className="form-group">
          <button
            type="login"
            className="axil-btn btn-fill-primary btn-fluid btn-primary"
            name="login-btn"
          >
            Login
          </button>
        </div>

        <div className="form-group">
          {" "}
          Don't have an account? <a href="/signup">Sign up here</a>{" "}
        </div>
      </form>
    );
  }
};

export default FormOne;