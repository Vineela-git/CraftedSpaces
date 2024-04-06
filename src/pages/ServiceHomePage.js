import React from 'react';

import SEO from '../common/SEO';

import SectionTitle from '../elements/section-title/SectionTitle';
import ServiceProp from '../component/service/ServiceProp';
import ServiceData from "../data/service/ServiceMain.json";
import { slugify } from '../utils';

const allData = ServiceData;


const ServiceOne = () => {

    const builders1 = allData.filter(data => slugify(data.cate ? data.cate : "") === "site-preparation");
    const builders2 = allData.filter(data => slugify(data.cate ? data.cate : "") === "structural-assembly");
    const builders3 = allData.filter(data => slugify(data.cate ? data.cate : "") === "customization-and-special-projects");
    const architects1= allData.filter(data => slugify(data.cate ? data.cate : "") === "conceptual-design");
    const architects2= allData.filter(data => slugify(data.cate ? data.cate : "") === "project-management");
    const architects3= allData.filter(data => slugify(data.cate ? data.cate : "") === "feasibility-studies");
    const interiordesigners1= allData.filter(data => slugify(data.cate ? data.cate : "") === "space-planning-and-layout-design");
    const interiordesigners2= allData.filter(data => slugify(data.cate ? data.cate : "") === "color-palette-and-material-selection");
    const interiordesigners3= allData.filter(data => slugify(data.cate ? data.cate : "") === "customized-design-solutions");


    const interiordesigners = allData.filter(data => slugify(data.cate ? data.cate : "") === "interior-designers");
    



    return (
        <>
        <SEO title="Service One" />
      
            <div className="service-scroll-navigation-area">

                {/* Service Nav */}
                
                <nav id="onepagenav" className="service-scroll-nav navbar onepagefixed">
                    <div className="container">
                        <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#builders">Builders</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#architects">Architects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#interior-designers">Interior Designers</a>
                        </li>
                      
                        </ul>
                    </div>
                </nav>

                <div className="section section-padding" id="builders">
                    <div className="container">
                        <SectionTitle 
                            subtitle="Service"
                            title="Builders"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        
                        />
                   
                        <div className="row" >
                            <ServiceProp  colSize="col-xl-5 col-md-6 " serviceStyle="service-style-2" serviceData={builders1}/>
                            <ServiceProp colSize="col-xl-5 col-md-6 " serviceStyle="service-style-2" serviceData={builders2}/>
                            <ServiceProp colSize="col-xl-5 col-md-6 " serviceStyle="service-style-2" serviceData={builders3}/>
                            
                        </div>
                        
                       
                    </div>
                </div>

                <div className="section section-padding bg-color-light" id="architects">
                    <div className="container">
                        <SectionTitle 
                            subtitle="Service"
                            title="Architects"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        
                        />
                        <div className="row">
                            <ServiceProp colSize="col-lg-5 col-md-6" serviceStyle="service-style-2" serviceData={architects1}/>
                            <ServiceProp colSize="col-lg-5 col-md-6" serviceStyle="service-style-2" serviceData={architects2}/>
                            <ServiceProp colSize="col-lg-5 col-md-6" serviceStyle="service-style-2" serviceData={architects3}/>
                        </div>
                    </div>
                </div>

                <div className="section section-padding" id="interior-designers">
                    <div className="container">
                        <SectionTitle 
                            subtitle="Service"
                            title="Interior Designers"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        
                        />
                        <div className="row">
                            <ServiceProp colSize="col-lg-5 col-md-6" serviceStyle="service-style-2" serviceData={interiordesigners1}/>
                            <ServiceProp colSize="col-lg-5 col-md-6" serviceStyle="service-style-2" serviceData={interiordesigners2}/>
                            <ServiceProp colSize="col-lg-5 col-md-6" serviceStyle="service-style-2" serviceData={interiordesigners3}/>
                        </div>
                    </div>
                </div>

               

            </div>
            
           
       
        </>
    )
}

export default ServiceOne;