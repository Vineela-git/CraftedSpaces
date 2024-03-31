import React, {useRef, useState} from 'react';
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
                  <input type="text" className="form-control" id="first-name" name="first-name" placeholder="First Name" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" className="form-control" id="last-name" name="last-name" placeholder="Last Name" required />
                </div> 
              </div>


              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="first-name">Email</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="phone" className="form-control" id="phone" name="phone" placeholder="phone" required />
                </div>
              </div>

              <div className="row mb-3">
               <div className="col-md-6">
                  <label htmlFor="contact-message">Adress</label>
                  <textarea className="form-control textarea" id="contact-message" name="contact-message" rows="6" placeholder="Your message"></textarea>
                </div>
                <div className="col-md-6">
                  <label htmlFor="pincode">City</label>
                  <input type="text" className="form-control" id="city" name="city" placeholder="City" required />
                </div>        
              </div>

              <div className="row mb-3">
              <div className="col-md-6">
                  <label htmlFor="pincode">State</label>
                  <input type="text" className="form-control" id="state" name="state" placeholder="State" required />
                </div> 
                <div className="col-md-6">
                  <label htmlFor="pincode">Zipcode/Pincode</label>
                  <input type="text" className="form-control" id="pincode" name="pincode" placeholder="Zipcode" required />
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
                  <button type="submit" className="axil-btn btn-fill-primary w-auto btn-primary" name="submit-btn">SEND</button>
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