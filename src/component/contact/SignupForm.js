import React from "react";
import { useState } from 'react';


function SignupForms() {
  const [formType, setFormType] = useState();

  const handleUserClick = () => {
    setFormType('user');
  }
  
  const handleProfessionalClick = () => {
    setFormType('professional');
  }

  return (
    <div>
      <button className="axil-btn btn-fill-primary btn-fluid btn-primary" onClick={handleUserClick}>User</button>

      <button className="axil-btn btn-fill-primary btn-fluid btn-primary" style={{marginBlock: 10}} onClick={handleProfessionalClick}>Professional</button>
      
      {formType === 'user' && (
        <UserSignupForm />  
      )}

      {formType === 'professional' && (
        <ProfessionalSignupForm />
      )}
    </div>
  );
}

function UserSignupForm() {

      const [values, setValues] = useState({
        fullname: '',
        email: '', 
        phone: '',
        location: '',
        address: '' 
      });
    
      const handleChange = (e) => {
        e.preventDefault();
        setValues({
          ...values,
          [e.target.name]: e.target.value  
        });
      }
     
      const handleSubmit = (e) => {
        e.preventDefault();
        // Send form data to API
      }
    
      return (
        <form onSubmit={handleSubmit} class ="form-control">
          <input type="text" name="fullname" value={values.fullname} placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" value={values.email} placeholder="E-mail" onChange={handleChange} required />
          <input type="tel" name="phone" value={values.phone} placeholder="Phone Number" onChange={handleChange} required />
          <input type="text" name="location" value={values.location} placeholder="Location" onChange={handleChange} />
          <input type="text" name="address" value={values.address} placeholder="Address" onChange={handleChange}/>
          <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary"style={{marginBlock: 10}}>Sign Up</button>
        </form>
      );
    }
    


function ProfessionalSignupForm() {
//All the properties are set to empty strings. 
        const [values, setValues] = useState({ 
          fullname: '',
          email: '',
          PhoneNumber:'',
          title: '',
          CompanyName: '',
          yearsOfExperience: '',
          LicenseNumber:''
        });
      
        const handleChange = (e) => {
          e.preventDefault();
          setValues({
            ...values,
            [e.target.name]: e.target.value  
          });
        };
      
        const handleSubmit = (e) => {
          // submit form  
        };
      
        return (
          <form onSubmit={handleSubmit} class="form-control">
          
            <input type="text" name="fullname" value={values.fullname} placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" value={values.email} placeholder="Email" onChange={handleChange}  required />
            <input type="tel" name="PhoneNumber"  value={values.PhoneNumber} placeholder="PhoneNumber" onChange={handleChange} required />
            <input type="text" name="CompanyName"  value={values.CompanyName} placeholder="Company Name" onChange={handleChange} required/>
            <input type="text" name="Location" value={values.Location} placeholder="Location" onChange={handleChange} required/>
            <input type="text"  name="LicenseNumber" value={values.LicenseNumber} placeholder="License Number" onChange={handleChange} required />
            <button type="submit"className="axil-btn btn-fill-primary btn-fluid btn-primary"style={{marginBlock: 10}}>Sign Up</button>
          </form>
        );
      
      }
      


export default SignupForms;