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
    fullname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    password: "",
    confirmpassword:""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");

  // Function to validate zip code
const validateZipCode = (zipCode) => {
  // Regular expression to match US zip code format
  const zipCodeRegex = /^\d{5}(?:-\d{4})?$/;
  return zipCodeRegex.test(zipCode);
};



  const handleChange = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
     // Check if password and confirmPassword match
  if (e.target.name === "password" || e.target.name === "confirmpassword") {
    if (e.target.name === "password") {
      // Clear the password match error when the user changes the password field
      setPasswordMatchError("");
    }
    if (values.password !== values.confirmpassword) {
      setPasswordMatchError("Passwords do not match");
    } else {
      setPasswordMatchError("");
    }
  }

    // Check if zip code is valid
    if (e.target.name === "zipcode") {
      if (!validateZipCode(e.target.value)) {
        setZipCodeError("Please enter a valid zip code");
      } else {
        setZipCodeError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match before submitting
    if (values.password !== values.confirmpassword) {
      setPasswordMatchError("Passwords do not match");
      return; // Exit the function early
    }

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
          name="address"
          value={values.address}
          placeholder="Address"
          onChange={handleChange}
        />
        </div>
        <div className="signupform-field">
        <input
          type="text"
          name="city"
          value={values.city}
          placeholder="City"
          onChange={handleChange}
        />
        </div>
        <div className="signupform-field">
        <input
          type="text"
          name="state"
          value={values.state}
          placeholder="State"
          onChange={handleChange}
        />
        </div>
        <div className="signupform-field">
        <input
          type="text"
          name="zipcode"
          value={values.zipcode}
          placeholder="Zipcode"
          onChange={handleChange}
        />
        </div>
        {zipCodeError && <div className="error">{zipCodeError}</div>}

        <div className="signupform-field">
        <input
          type="password"
          name="password"
          value={values.password}
          placeholder="......"
          onChange={handleChange}
        />
        </div>
        <div className="signupform-field">
        <input
          type="password"
          name="confirmpassword"
          value={values.confirmpassword}
          placeholder="......"
          onChange={handleChange}
        />
        </div>
        {passwordMatchError && <div className="error">{passwordMatchError}</div>}

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
    professionaltype:"",
    officephone: "",
    personalphone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    yearsofexperience: "",
    licensenumber: "",
    password: "",
    confirmpassword:""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");

  // Function to validate zip code
const validateZipCode = (zipCode) => {
  // Regular expression to match US zip code format
  const zipCodeRegex = /^\d{5}(?:-\d{4})?$/;
  return zipCodeRegex.test(zipCode);
};


const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

  // Check if password and confirmPassword match
  
    if (e.target.name === "confirmpassword" && values.password !== e.target.value) {
      setPasswordMatchError("Passwords do not match. Re enter");
    }else{
      setPasswordMatchError("");
    }
  
  // Check if zip code is valid
  if (e.target.name === "zipcode") {
    if (!validateZipCode(e.target.value)) {
      setZipCodeError("Please enter a valid zip code");
    } else {
      setZipCodeError("");
    }
  }
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match before submitting
  if (values.password !== values.confirmpassword) {
    setPasswordMatchError("Passwords do not match,please set password again");
    return; // Exit the function early
  }

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
        <div className="signupform-field input-signupform">
            <label>Professional Type</label>
            <select
              className="select-input"
              name="professionaltype"
              value={values.professionaltype}
              onChange={handleChange}
              required 
              >
            <option value="">Select Professional Type</option>
            <option value="builders">Builders</option>
            <option value="architects">Architects</option>
            <option value="interiordesigners">Interior Designers</option>
  </select>
</div>
        <div className="signupform-field">
        <label>Office Phone</label>
        <input
          type="tel"
          name="officephone"
          value={values.officephone}
          placeholder="Office Number"
          onChange={handleChange}
          pattern="[0-9]*" // Allow only numeric characters
          required
        />
        </div>
        <div className="signupform-field">
        <label>Personal Phone</label>
        <input
          type="tel"
          name="personalphone"
          value={values.personalphone}
          placeholder="Personal Number"
          pattern="[0-9]*" // Allow only numeric characters
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
          placeholder="......"
          onChange={handleChange}
          required
        />
        </div>
        <div className="signupform-field">
        <label>Confirm Your Password</label>
        <input
          type="password"
          name="confirmpassword"
          value={values.confirmpassword}
          placeholder="......"
          onChange={handleChange}
          required
        />
        </div>
       
        </div>
        {passwordMatchError && <div className="error">{passwordMatchError}</div>}

        {zipCodeError && <div className="error">{zipCodeError}</div>}

        <div className="signupform-field signupbutton-container">
        <button
          type="submit"
          className="axil-btn btn-fill-primary btn-fluid btn-primary"
          style={{ marginBlock: 10 }}>Sign Up
        </button>
        </div>
        {errorMessage && <div className="error"> {errorMessage} </div>}
      </form>
    </div>
  );
}

export default SignupForms;