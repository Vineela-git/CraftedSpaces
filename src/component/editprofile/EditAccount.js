import React, {useRef, useState,useEffect} from 'react';
import axios from 'axios';

import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';
import SectionTitle from '../../elements/section-title/SectionTitle';

const Result = () => {
    return (
        <Alert variant="success" className="success-msg">
        Your details have been successfully updated.
        </Alert>
    )
}

const FormThree = () => {

    const form = useRef();

    const [ result, showresult ] = useState(false);
    const [user, setUser] = useState(null);
    const[isEditing,setEditing] = useState(false);
   
    const [formData, setFormData] = useState({
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
    });

// We use the useEffect hook to update the form data (formData) with the user's information as placeholders 
// when the user prop changes.

  useEffect(() => {
    if (user) {
      setFormData({
        firstname: user.firstname || '',
        lastname: user.lastname || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address ||'',
        city: user.city ||'',
        state: user.state ||'',
        zipcode:user.zipcode ||''


      });
    }
  }, [user]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Make an API call to fetch the user data from the backend
        const response = await axios.get('/profile-edit');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, []);


        setTimeout(() => {
            showresult(false);
        }, 5000);

// The handleChange function updates the form data state (formData) as the user types into the input fields.
        const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value
          });
        };
      


    return (

         
        <form ref={form}  className="axil-contact-form">
        <div className="container">
          <SectionTitle title="Account Settings" description="" textAlignment="heading-left" textColor="" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              
              <div className="row mb-3">

              <div className="col-md-6">
                  <label htmlFor="first-name">Company Name</label>
                  <input type="text" 
                         className="form-control" 
                         id="companyname" 
                         name="companyname"
                        value={formData.companyname}
                        onChange={handleChange} 
                        
                        />
                </div>
                <div className="col-md-6">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" 
                         className="form-control" 
                         id="firstname" 
                         name="firstname"
                        value={formData.firstname}
                        onChange={handleChange} 
                        
                         />
                </div>
                <div className="col-md-6">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" 
                         className="form-control" 
                         id="lastname" 
                         name="lastname" 
                         value={formData.lastname}
                          onChange={handleChange}
                           />
                </div> 
              </div>


              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="first-name">Email</label>
                  <input type="email" 
                         className="form-control" 
                         id="email" 
                         name="email" 
                         value={formData.email}
                         onChange={handleChange}
                         
                          />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone">Office Phone Number</label>
                  <input type="phone" 
                         className="form-control" 
                         id="phone" 
                         name="officephone" 
                         value={formData.officephone}
                         onChange={handleChange}
                           />
                </div>
              </div>

              <div className="row mb-3">
               <div className="col-md-6">
                  <label htmlFor="contact-message">Address</label>
                  <textarea className="form-control textarea" 
                            id="address" 
                            name="address" 
                            rows="6" 
                            value={formData.address}
                            onChange={handleChange}>
                            </textarea>
                </div>
                <div className="col-md-6">
                  <label htmlFor="pincode">City</label>
                  <input type="text" 
                         className="form-control" 
                         id="city" 
                         name="city" 
                         value={formData.city}
                         onChange={handleChange}
                         
                          />
                </div>        
              </div>

              <div className="row mb-3">
              <div className="col-md-6">
                  <label htmlFor="pincode">State</label>
                  <input type="text" 
                         className="form-control" 
                         id="state" 
                         name="state" 
                         value={formData.state}
                         onChange={handleChange}
                          />
                </div> 
                <div className="col-md-6">
                  <label htmlFor="pincode">Zipcode/Pincode</label>
                  <input type="text" 
                         className="form-control" 
                         id="zipcode" 
                         name="zipcode" 
                         value={formData.zipcode}
                         onChange={handleChange}
                         
                          />
                </div>  
                <div className="col-md-6">
                  <label htmlFor="pincode">Years of Experience</label>
                  <input type="text" 
                         className="form-control" 
                         id="yearsofexperience" 
                         name="yearsofexperience" 
                         value={formData.yearsofexperience}
                         onChange={handleChange}
                         
                          />
                </div> 
                <div className="col-md-6">
                  <label htmlFor="pincode">License Number</label>
                  <input type="text" 
                         className="form-control" 
                         id="licensenumber" 
                         name="licensenumber" 
                         value={formData.licensenumber}
                         onChange={handleChange}
                         
                          />
                </div>       
              </div>

              <div className="row mb-3">
              <div className="col-md-6">
                  <label htmlFor="text">Reset Password</label>
                  <input type="password" className="form-control" id="reset-password" name="reset-password" placeholder="....." required />
                </div> 
                <div className="col-md-6">
                  <label htmlFor="text">Confirm Password</label>
                  <input type="password" className="form-control" id="confirm-password" name="confirm-password" placeholder="......" required />
                </div>        
              </div>

              
              <div className="row justify-content-center">
                <div className="col-md-12 text-end">
                  <button type="submit" className="axil-btn btn-fill-primary w-auto btn-primary" name="submit-btn">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="container">
          <div className="form-group">
            {result ? <Result /> : null}
          </div>
        </div>
      </form>
    )
}

export default FormThree;

