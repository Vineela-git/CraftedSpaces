import React, {useRef, useState,useEffect} from 'react';
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
   
    const [formData, setFormData] = useState({
      firstname: '',
      lastName: '',
      email: '',
      phone: '',
      address:'',
      city:'',
      state:'',
      zipcode:''
    });


    // Update form data with user's information as placeholders
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

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yj5dgzp', 'template_hfduayo', form.current, 'WLENsTkBytC0yvItS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
          showresult(true);
      };

        setTimeout(() => {
            showresult(false);
        }, 5000);

        const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value
          });
        };
      


    return (

         
        <form ref={form} onSubmit={sendEmail} className="axil-contact-form">
        <div className="container">
          <SectionTitle title="Account Settings" description="" textAlignment="heading-left" textColor="" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" 
                         className="form-control" 
                         id="firstname" 
                         name="firstname"
                        value={formData.firstname}
                        onChange={handleChange} 
                        placeholder="First Name" 
                        required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" 
                         className="form-control" 
                         id="lastname" 
                         name="lastname" 
                         value={formData.lastname}
                          onChange={handleChange}
                         placeholder="Last Name" required />
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
                        placeholder="Email" 
                         required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="phone" 
                         className="form-control" 
                         id="phone" 
                         name="phone" 
                         value={formData.phone}
                         onChange={handleChange}
                         placeholder="phone" required />
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
                            onChange={handleChange}
                            placeholder="Address"></textarea>
                </div>
                <div className="col-md-6">
                  <label htmlFor="pincode">City</label>
                  <input type="text" 
                         className="form-control" 
                         id="city" 
                         name="city" 
                         value={formData.city}
                         onChange={handleChange}
                         placeholder="City" 
                         required />
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
                         placeholder="State" required />
                </div> 
                <div className="col-md-6">
                  <label htmlFor="pincode">Zipcode/Pincode</label>
                  <input type="text" 
                         className="form-control" 
                         id="zipcode" 
                         name="zipcode" 
                         value={formData.zipcode}
                         onChange={handleChange}
                         placeholder="Zipcode" 
                         required />
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