import React from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import LoginSignup from './pages/SignupPage';
import Builders from './pages/Builders';
import Architects from './pages/Architects';
import InteriorDesigner from './pages/InteriorDesigners';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import PersonalPortfolio from './pages/PersonalPortfolio';
import UserLoginHome from './pages/UserLoginHome';
import ProfessionalLoginHome from './pages/ProfessionalLoginHome';
import ProfessionalAccountEdit from './pages/ProfessionalAccountEdit';
import CompanyDetails from './pages/CompanyDetails';

import SearchResult from './common/header/SearchResult';



import './assets/scss/app.scss';
import Arcadia from './pages/ArchitectProjects/Arcadia';
import Horizon from './pages/ArchitectProjects/Horizon';
import UrbanScape from './pages/ArchitectProjects/UrbanScape';
import BuildWell from './pages/BuilderProjects/BuildWell';
import Elite from './pages/BuilderProjects/Elite';
import Summit from './pages/BuilderProjects/Summit';
import MasterCraft from './pages/BuilderProjects/MasterCraft';
import Unity from './pages/ArchitectProjects/Unity';
import Luxe from './pages/DesignerProjects/Luxe';
import Artisan from './pages/DesignerProjects/Artisan';
import UrbanNest from './pages/DesignerProjects/UrbanNest';
import Evolve from './pages/DesignerProjects/Evolve';

const App = () => {
  return (
	<BrowserRouter>
		<ScrollToTop>
			<Routes>
				<Route path={process.env.PUBLIC_URL + "/"} element={<HomePage />}/>
				<Route path={process.env.PUBLIC_URL+"/login"} element={<Login/>}/>
				<Route path={process.env.PUBLIC_URL+"/about-us"} element={<AboutUs/>}/>
				<Route path={process.env.PUBLIC_URL+"/signup"} element={<LoginSignup/>}/>
				<Route path={process.env.PUBLIC_URL + "/builders"} element={<Builders/>}/>
				<Route path={process.env.PUBLIC_URL+"/architects"} element={<Architects/>}/>
				<Route path={process.env.PUBLIC_URL +"/interior-designers"} element={<InteriorDesigner/>}/>
				<Route path={process.env.PUBLIC_URL+"/contact-us"} element={<Contact/>}/>
				<Route path={process.env.PUBLIC_URL+"/portfolio"} element={<PersonalPortfolio/>}/>
				<Route path={process.env.PUBLIC_URL+"/company"} element={<CompanyDetails/>}/>
				<Route path={process.env.PUBLIC_URL+"/arcadia-architects"} element={<Arcadia/>}/>
				<Route path={process.env.PUBLIC_URL+"/horizon-architects"} element={<Horizon/>}/>
				<Route path={process.env.PUBLIC_URL+"/unity-architects"} element={<Unity/>}/>
				
				<Route path={process.env.PUBLIC_URL+"/urbanscape-architects"} element={<UrbanScape/>}/>
				
				<Route path={process.env.PUBLIC_URL+"/buildwell-builders"} element={<BuildWell/>}/>
				<Route path={process.env.PUBLIC_URL+"/elitebuilders"} element={<Elite/>}/>
				<Route path={process.env.PUBLIC_URL+"/mastercraft-builders"} element={<MasterCraft/>}/>
				<Route path={process.env.PUBLIC_URL+"/summitbuilders-co"} element={<Summit/>}/>

				<Route path={process.env.PUBLIC_URL+"/luxe-interiors"} element={<Luxe/>}/>
				<Route path={process.env.PUBLIC_URL+"/artisan-interiors"} element={<Artisan/>}/>
				<Route path={process.env.PUBLIC_URL+"/urban-nest-design"} element={<UrbanNest/>}/>
				<Route path={process.env.PUBLIC_URL+"/evolve-interior-design"} element={<Evolve/>}/>

				<Route path={process.env.PUBLIC_URL+"/userhome"} element={<UserLoginHome/>}/>
				<Route path={process.env.PUBLIC_URL+"/professionalhome"} element={<ProfessionalLoginHome/>}/>
				<Route path={process.env.PUBLIC_URL+"/profile-edit"} element={<ProfessionalAccountEdit/>}/>
				<Route path={process.env.PUBLIC_URL +"/api/search"} element={<SearchResult />} />


			</Routes>
		</ScrollToTop>
	</BrowserRouter>
  )
}

export default App;