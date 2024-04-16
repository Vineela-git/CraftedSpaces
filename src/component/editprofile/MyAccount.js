import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";
import SectionTitle from "../../elements/section-title/SectionTitle";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
const Result = () => {
  return (
    <Alert variant="success" className="success-msg">
      Your details have been successfully updated.
    </Alert>
  );
};

const FormTen = () => {
    const navigate = useNavigate();
  const [result, showresult] = useState(false);
  const [user, setUser] = useState(null);
  const [isEditing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    companyname: "",
    firstname: "",
    lastname: "",
    email: "",
    professionaltype: "",
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
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const { data } = await axios.get(
            `http://localhost:3001/my-account`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setUser(data);
        } else {
          console.log("User ID not found in the cookie");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  // We use the useEffect hook to update the form data (formData) with the user's information as placeholders
  // when the user prop changes.

  useEffect(() => {
    if (user) {
      setFormData({
        companyname: user.companyname || "",
        firstname: user.firstname || "",
        lastname: user.lastname || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        city: user.city || "",
        state: user.state || "",
        zipcode: user.zipcode || "",
        officephone: user.officephone || "",
        yearsofexperience: user.yearsofexperience || "",
        licensenumber: user.licensenumber || "",
      });
    }
  }, [user]);

  setTimeout(() => {
    showresult(false);
  }, 5000);

  // The handleChange function updates the form data state (formData) as the user types into the input fields.
  const handleUpdate = async (e) => {
    try {
      const token = localStorage.getItem("token");
      if(token){
navigate("/profile-edit");
      }
     
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="axil-contact-form">
      <div className="container">
        <SectionTitle
          title="Account Settings"
          description=""
          textAlignment="heading-left"
          textColor=""
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="company-name">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="companyname"
                  name="companyname"
                  value={formData.companyname}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  disabled
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="first-name">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone">Office Phone Number</label>
                <input
                  type="phone"
                  className="form-control"
                  id="phone"
                  name="officephone"
                  value={formData.officephone}
                  disabled
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="contact-message">Address</label>
                <textarea
                  className="form-control textarea"
                  id="address"
                  name="address"
                  rows="6"
                  value={formData.address}
                  disabled
                ></textarea>
              </div>
              <div className="col-md-6">
                <label htmlFor="pincode">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={formData.city}
                  disabled
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="pincode">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  value={formData.state}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="pincode">Zipcode/Pincode</label>
                <input
                  type="text"
                  className="form-control"
                  id="zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="pincode">Years of Experience</label>
                <input
                  type="text"
                  className="form-control"
                  id="yearsofexperience"
                  name="yearsofexperience"
                  value={formData.yearsofexperience}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="pincode">License Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="licensenumber"
                  name="licensenumber"
                  value={formData.licensenumber}
                  disabled
                />
              </div>
            </div>

            {/* <div className="row mb-3">
              <div className="col-md-6">
                  <label htmlFor="text">Reset Password</label>
                  <input type="password" className="form-control" id="reset-password" name="reset-password" placeholder="....." required />
                </div> 
                <div className="col-md-6">
                  <label htmlFor="text">Confirm Password</label>
                  <input type="password" className="form-control" id="confirm-password" name="confirm-password" placeholder="......" required />
                </div>        
              </div> */}

            <div className="row justify-content-center">
              <div className="col-md-12 text-end">
                <button
                  type="submit"
                  className="axil-btn btn-fill-primary w-auto btn-primary"
                  name="submit-btn"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="form-group">{result ? <Result /> : null}</div>
      </div>
    </form>
  );
};

export default FormTen;
