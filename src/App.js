import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';


import HomePage from './pages/HomePage';
import LoginSignup from './pages/SignupPage';
import Builders from './pages/Builders';
import Architects from './pages/Architects';
import InteriorDesigner from './pages/InteriorDesigners';
import AboutHomePage from './component/about/AboutHomePage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

import './assets/scss/app.scss';

const App = () => {
  return (
    <Router>
		<ScrollToTop>
			<Routes>
				<Route path={process.env.PUBLIC_URL + "/"} element={<HomePage />}/>
				<Route path={process.env.PUBLIC_URL+"/login"} element={<AboutHomePage/>}/>
				<Route path={process.env.PUBLIC_URL+"/about-us"} element={<AboutUs/>}/>
				<Route path={process.env.PUBLIC_URL+"/signup"} element={<LoginSignup/>}/>
				<Route path={process.env.PUBLIC_URL + "/builders"} element={<Builders/>}/>
				<Route path={process.env.PUBLIC_URL+"/architects"} element={<Architects/>}/>
				<Route path={process.env.PUBLIC_URL +"/interior-designers"} element={<InteriorDesigner/>}/>
				<Route path={process.env.PUBLIC_URL+"/contact-us"} element={<Contact/>}/>

			</Routes>
		</ScrollToTop>
    </Router>
  )
}

export default App;
