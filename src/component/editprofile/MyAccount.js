import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";
import SectionTitle from "../../elements/section-title/SectionTitle";
import axios from "axios";
import Cookies from "js-cookie";
import ProfessionalLoginHeader from '../../common/header/ProfessionalLoginHeader';
import BannerProfessionalHome from '../banner/BannerProfessionalHome';
import { useNavigate } from "react-router-dom";
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
    profilePicture: null,
    additionalPictures: [],
    videoURL: "",
    aboutus: "",
    design: "",
    development: "",
    instahandle: "",
    linkedinhandle: "",
    strategy: "",
    xhandle: "",
  });
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const { data } = await axios.get(`http://localhost:3001/my-account`, {
            headers: { Authorization: `Bearer ${token}` },
          });
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
        professionaltype: user.professionaltype || "",
        personalphone: user.personalphone || "",
        address: user.address || "",
        city: user.city || "",
        state: user.state || "",
        zipcode: user.zipcode || "",
        officephone: user.officephone || "",
        yearsofexperience: user.yearsofexperience || "",
        licensenumber: user.licensenumber || "",
        profilePicture: user.profilePicture || "",
        additionalPictures: user.additionalPictures || [],
        videoURL: user.videoURL || "",
        aboutus: user.aboutus || "",
        design: user.design || "",
        development: user.development || "",
        instahandle: user.instahandle || "",
        linkedinhandle: user.linkedinhandle || "",
        strategy: user.strategy || "",
        xhandle: user.xhandle || "",
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
      if (token) {
        navigate("/profile-edit");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <> 
     <main className="main-wrapper">
        <ProfessionalLoginHeader />
            <BannerProfessionalHome/>
   
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
            <div>
              <img
                src={`http://localhost:3001/${formData.profilePicture}`}
                alt="Profile Preview"
                style={{ maxWidth: "200px", marginTop: "10px" }}
              />
            </div>
            <div>
              {formData.additionalPictures.map((picture, index) => (
                <img
                  key={index}
                  src={`http://localhost:3001/${picture}`}
                  alt={`Additional Picture ${index}`}
                  style={{ maxWidth: "200px", marginTop: "10px" }}
                />
              ))}
            </div>
            <div className="container">
              <SectionTitle
                title="Socials"
                description=""
                textAlignment="heading-left"
                textColor=""
              />
              <div className="col-md-6">
                <label htmlFor="url">Facebook URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="instahandle"
                  name="instahandle"
                  value={formData.instahandle}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="url">LinkedIn URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="linkedinhandle"
                  name="linkedinhandle"
                  value={formData.linkedinhandle}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="url">Twitter URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="xhandle"
                  name="xhandle"
                  value={formData.xhandle}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="url">Youtube Video Link</label>
                <input
                  type="text"
                  className="form-control"
                  id="videoURL"
                  name="videoURL"
                  value={formData.videoURL}
                  disabled
                />
              </div>
            </div>
            <div className="container">
              <SectionTitle
                title="About"
                description=""
                textAlignment="heading-left"
                textColor=""
              />
              <div className="col-md-6">
                <label htmlFor="url">About Us</label>
                <input
                  type="text"
                  className="form-control"
                  id="aboutus"
                  name="aboutus"
                  value={formData.aboutus}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="url">Design</label>
                <input
                  type="text"
                  className="form-control"
                  id="design"
                  name="design"
                  value={formData.design}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="url">Development</label>
                <input
                  type="text"
                  className="form-control"
                  id="development"
                  name="development"
                  value={formData.development}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="url">Strategy</label>
                <input
                  type="text"
                  className="form-control"
                  id="strategy"
                  name="strategy"
                  value={formData.strategy}
                  disabled
                />
              </div>
            </div>
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
    </main>
    </>
  );
};

export default FormTen;
