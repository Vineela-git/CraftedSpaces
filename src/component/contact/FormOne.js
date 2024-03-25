import React, { useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';


const FormOne = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    
    const [user, setUser] = useState(null);

    const form = useRef();

    const [ result, showresult ] = useState(false);

   
//prevents the default form submission behavior, which is a page reload
//Once you've prevented the default behavior, you can execute custom logic

      const handleLogin = (e) => {
        e.preventDefault();
        
        // Normally would call API and validate credentials
        // For now, we're just simulating login
    
        setLoggedIn(true);

        setUser({
          name:'John',
          email: 'john@email.com',
          password: 'pass'
        });
      }
        

        setTimeout(() => {
            showresult(false);
        }, 5000);

//To navigate to signup page when the button gets clicked. 

        const navigate = useNavigate();
        const handleSignup = () => {
            navigate('/signup');
          }

          if(!loggedIn) {
          
    return (

      
        <form ref={form} onSubmit={handleLogin}  className="axil-contact-form">
        
        <div id="login" className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" name="contact-email" placeholder="example@mail.com" required />
        </div>
        <div className="form-group mb--40">
            <label>Password</label>
            <input type="password" className="form-control" name="password" placeholder="........" required />
        </div>
        
        <div className="form-group mb--40"><label><a href="#">Forgot Password?</a></label>
        </div>

        <div className="form-group">
            <button type="login" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="login-btn">Login</button>
        </div>
    
        <div className="form-group"> Don't have an account? <a href="/signup">Sign up here</a> </div>
        
      
    </form>
    ) 

    
          }
          
}

export default FormOne;