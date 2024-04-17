import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Route, Redirect } from "react-router-dom";

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
  // useEffect(() => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       // If token exists, decode it to check if user is logged in
  //       const decoded = jwtDecode(token);
  //       if (decoded.user) {
  //         setUser(decoded.user);
  //         setLoggedIn(true);
  //         navigate("/userhome");
  //       } else if (decoded.professional) {
  //         // You can handle professional user case here
  //         setLoggedIn(true);
  //         navigate("/professionalhome");
  //       }
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []); // Empty dependency array to run only once when component mounts

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const decoded = jwtDecode(token);
          if (decoded.userId) {
            setUser(decoded.user);
            setLoggedIn(true);
            navigate("/userhome");
          } else if (decoded.professionalId) {
            setLoggedIn(true);
            navigate("/professionalhome");
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    checkLogin();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      const { token } = response.data;
      console.log(token);
      localStorage.setItem("token", token);
      if (token) {
        const decoded = jwtDecode(token);
        if (decoded.userId) {
          setUser(decoded.user);
          setLoggedIn(true);
          navigate("/userhome");
        } else if (decoded.professionalId) {
          setLoggedIn(true);
          navigate("/professionalhome");
        }
      } else {
        if (response.data === "invalid") {
          console.log("Invalid password"); // Log invalid password error
          setErrorMessage("invalid password");
        } else {
          console.log("No records found"); // Log no records found error
          setErrorMessage("No records found, Please sign up first!");
        }
      }
    } catch (err) {
      console.log(err);
      setErrorMessage("Error occurred during login");
    }
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