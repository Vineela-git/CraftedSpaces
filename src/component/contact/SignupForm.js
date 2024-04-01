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
    address: "",
    city: "",
    state: "",
    zipcode: "",

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
      <form onSubmit={handleSubmit} className="form-control">
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
          name="location"
          value={values.location}
          placeholder="Location"
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          value={values.address}
          placeholder="Address"
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
        console.log("result");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-control">
        <label>Company Name</label>
        <input
          type="text"
          name="companyname"
          value={values.companyname}
          placeholder="Company Name"
          onChange={handleChange}
          required
        />
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          value={values.firstname}
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          value={values.lastname}
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        <label>Office Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <label>Office Phone</label>
        <input
          type="tel"
          name="officephone"
          value={values.officenumber}
          placeholder="Office Number"
          onChange={handleChange}
          required
        />
        <label>Personal Phone</label>
        <input
          type="tel"
          name="personalphone"
          value={values.personalnumber}
          placeholder="Personal Number"
          onChange={handleChange}
        />
        <label>Address</label>
        <textarea
          className="form-control textarea"
          id="address"
          name="address"
          rows="6"
          value={values.address}
          onChange={handleChange}
        ></textarea>
        <label>City</label>
        <input
          type="text"
          name="city"
          value={values.city}
          placeholder="City"
          onChange={handleChange}
          required
        />
        <label>State</label>
        <input
          type="text"
          name="state"
          value={values.state}
          placeholder="State"
          onChange={handleChange}
          required
        />
        <label>ZipCode</label>
        <input
          type="text"
          name="zipcode"
          value={values.zipcode}
          placeholder="ZipCode"
          onChange={handleChange}
          required
        />
        <label>Enter your Company Registration Number here: </label>
        <input
          type="text"
          name="licensenumber"
          value={values.licensenumber}
          placeholder="License Number"
          onChange={handleChange}
          required
        />
        <label>How Many years have you been in the Industry?</label>
        <input
          type="number"
          name="yearsofexperience"
          value={values.yearsofexperience}
          placeholder=""
          onChange={handleChange}
          required
        />
        <label>Setup Your Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          placeholder=""
          onChange={handleChange}
          required
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
