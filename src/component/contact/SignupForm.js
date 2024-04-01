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
      <div>
        {/* <p>Click here to register if you're a client looking for Professional </p> */}
        <button
          className="axil-btn btn-fill-primary btn-fluid btn-primary"
          onClick={handleUserClick}
        >
          User
        </button>
      </div>
      <div>
        <button
          className="axil-btn btn-fill-primary btn-fluid btn-primary"
          style={{ marginBlock: 10 }}
          onClick={handleProfessionalClick}
        >
          Professional
        </button>
        {/* <p> Click here if You're a Professional to setup your Portfolio</p> */}
      </div>
      {formType === "user" && <UserSignupForm />}

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
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    password: "",
  });
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
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
    // Send form data to API
  };

  return (
    <div>
      <form onSubmit={handleSubmit} class="form-control">
        <input
          type="text"
          name="firstname"
          value={values.firstname}
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastname"
          value={values.lastname}
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={values.email}
          placeholder="E-mail"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          value={values.phone}
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address1"
          value={values.address1}
          placeholder="Address Line 1"
          onChange={handleChange}
        />
        <input
          type="text"
          name="address2"
          value={values.address2}
          placeholder="Address Line 2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          value={values.city}
          placeholder="City"
          onChange={handleChange}
        />
        <input
          type="text"
          name="state"
          value={values.state}
          placeholder="State/Province"
          onChange={handleChange}
        />
        <input
          type="text"
          name="pincode"
          value={values.pincode}
          placeholder="Pincode/ZipCode"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          value={values.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="axil-btn btn-fill-primary btn-fluid btn-primary"
          style={{ marginBlock: 10 }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

function ProfessionalSignupForm() {
  //All the properties are set to empty strings.
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    phone: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    licensenumber: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // submit form
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", values)
      .then((result) => {
        console.log("result");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} class="form-control">
        <input
          type="text"
          name="fullname"
          value={values.fullname}
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          value={values.PhoneNumber}
          placeholder="PhoneNumber"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          value={values.CompanyName}
          placeholder="Company Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address1"
          value={values.address1}
          placeholder="Address Line 1"
          onChange={handleChange}
        />
        <input
          type="text"
          name="address2"
          value={values.address2}
          placeholder="Address Line 2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          value={values.city}
          placeholder="City"
          onChange={handleChange}
        />
        <input
          type="text"
          name="state"
          value={values.state}
          placeholder="State/Province"
          onChange={handleChange}
        />
        <input
          type="text"
          name="pincode"
          value={values.pincode}
          placeholder="Pincode/ZipCode"
          onChange={handleChange}
        />
        <input
          type="text"
          name="licensenumber"
          value={values.LicenseNumber}
          placeholder="License Number"
          onChange={handleChange}
          required
        />
         <input
          type="text"
          name="password"
          value={values.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="axil-btn btn-fill-primary btn-fluid btn-primary"
          style={{ marginBlock: 10 }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForms;
