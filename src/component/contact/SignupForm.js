import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignupForms() {
  const [formType, setFormType] = useState();
  const handleUserClick = () => {
    setFormType("user");
  };

  const handleProfessionalClick = () => {
    setFormType("professional");
  };

  
    

  return (
    <div>
      <h4>Click here to register if you're a client looking for Professional! </h4>
      <div className="signupbutton-container">

        
        <button
          className="axil-btn btn-fill-primary btn-fluid btn-primary "
          onClick={handleUserClick}>User
        </button>
        
      </div>
      {formType === "user" && <UserSignupForm />}
      <div className="user-button-spacing"></div>
      <h4>Click here to register if you're a Professional looking to Showcase your Portfolio! </h4>
      <div className="signupbutton-container">
        <button
          className="axil-btn btn-fill-primary btn-fluid btn-primary"
          style={{ marginBlock: 10 }}
          onClick={handleProfessionalClick}
        >
          Professional
        </button>
        {/* <p> Click here if You're a Professional to setup your Portfolio</p> */}
      </div>
     

      {formType === "professional" && <ProfessionalSignupForm />}
    </div>
  );
}

function UserSignupForm() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",

    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", values)
      .then((result) => {
        if(result.data==="existing"){
          setErrorMessage("Already existing user, try logging in");
        }else{
          console.log(result);
          navigate("/login");
        }
        
      })
      .catch((err) => console.log(err));
    // Send form data to API
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="signupform-control">
      <div className="signupform-row">
        <div className="signupform-field">
        
        <input
          type="text"
          name="fullname"
          value={values.fullname}
          placeholder="Name"
          onChange={handleChange}
          required
        />
        </div>

        <div className="signupform-field">
        <input
          type="email"
          name="email"
          value={values.email}
          placeholder="E-mail"
          onChange={handleChange}
          required
        />
        </div>

        <div className="signupform-field">
        <input
          type="tel"
          name="phone"
          value={values.phone}
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        </div>

        <div className="signupform-field">
        <input
          type="text"
          name="location"
          value={values.location}
          placeholder="Location"
          onChange={handleChange}
        />
        </div>

        <div className="signupform-field">
        <input
          type="text"
          name="address"
          value={values.address}
          placeholder="Address"
          onChange={handleChange}
        />
        </div>

        <div className="signupform-field">
        <input
          type="text"
          name="password"
          value={values.password}
          placeholder="Password"
          onChange={handleChange}
        />
        </div>
        </div>
        <div className="signupform-field signupbutton-container">
        <button
          type="submit"
          className="axil-btn btn-fill-primary btn-fluid btn-primary"
          style={{ marginBlock: 10 }}
        >
          Sign Up
        </button>
        </div>
      </form>
    </div>
  );
}

function ProfessionalSignupForm() {

  
  //All the properties are set to empty strings.
  const [values, setValues] = useState({
    companyname: "",
    firstname: "",
    lastname: "",
    email: "",
    officephone: "",
    personalphone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    yearsofexperience: "",
    licensenumber: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", values)
      .then((result) => {
        if(result.data==="existing"){
          setErrorMessage("Already existing user, try logging in");
        }else{
 console.log("result");
        navigate("/login");
        }
       
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <div>
      <form onSubmit={handleSubmit} className="signupform-control"> 
      <div className="signupform-row">
       <div className="signupform-field">
        <label>Company Name</label>
        <input
          type="text"
          name="companyname"
          value={values.companyname}
          placeholder="Company Name"
          onChange={handleChange}
          required
        />
       </div>
      <div className="signupform-field">
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          value={values.firstname}
          placeholder="First Name"
          onChange={handleChange}
          required
        />
      </div>
        <div className="signupform-field">
        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          value={values.lastname}
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        </div>
        <div className="signupform-field">
        <label>Office Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
        </div>
        <div className="signupform-field">
        <label>Office Phone</label>
        <input
          type="tel"
          name="officephone"
          value={values.officenumber}
          placeholder="Office Number"
          onChange={handleChange}
          required
        />
        </div>
        <div className="signupform-field">
        <label>Personal Phone</label>
        <input
          type="tel"
          name="personalphone"
          value={values.personalnumber}
          placeholder="Personal Number"
          onChange={handleChange}
        />
        </div>
        <div className="signupform-field">
        <label>Address</label>
        <textarea
          className="form-control textarea"
          id="address"
          name="address"
          rows="4"
          value={values.address}
          onChange={handleChange}
        ></textarea>
        </div>
        <div className="signupform-field">
        <label>City</label>
        <input
          type="text"
          name="city"
          value={values.city}
          placeholder="City"
          onChange={handleChange}
          required
        />
        </div>
        <div className="signupform-field">
        <label>State</label>
        <input
          type="text"
          name="state"
          value={values.state}
          placeholder="State"
          onChange={handleChange}
          required
        />
        </div>
        <div className="signupform-field">
        <label>ZipCode</label>
        <input
          type="text"
          name="zipcode"
          value={values.zipcode}
          placeholder="ZipCode"
          onChange={handleChange}
          required
        />
        </div>
        <div className="signupform-field">
        <label>Enter your Company Registration Number here: </label>
        <input
          type="text"
          name="licensenumber"
          value={values.licensenumber}
          placeholder="License Number"
          onChange={handleChange}
          required
        />
        </div>
        <div className="signupform-field">
        <label> Years in the Industry?</label>
        <input
          type="number"
          name="yearsofexperience"
          value={values.yearsofexperience}
          placeholder=""
          onChange={handleChange}
          required
        />
        </div>
        <div className="signupform-field">
        <label>Setup Your Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          placeholder=""
          onChange={handleChange}
          required
        />
        </div>
       
        </div>
        <div className="signupform-field signupbutton-container">
        <button
          type="submit"
          className="axil-btn btn-fill-primary btn-fluid btn-primary"
          style={{ marginBlock: 10 }}>Sign Up
        </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForms;
