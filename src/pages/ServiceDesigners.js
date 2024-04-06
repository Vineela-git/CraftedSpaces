import React from 'react';

import SEO from '../common/SEO';

import SectionTitle from '../elements/section-title/SectionTitle';
import ServiceProp from '../component/service/ServiceProp';
import ServiceData from "../data/service/ServiceMain.json";
import { slugify } from '../utils';

const allData = ServiceData;


const ServiceOne = () => {

    
    const interiordesigners1= allData.filter(data => slugify(data.cate ? data.cate : "") === "space-planning-and-layout-design");
    const interiordesigners2= allData.filter(data => slugify(data.cate ? data.cate : "") === "color-palette-and-material-selection");
    const interiordesigners3= allData.filter(data => slugify(data.cate ? data.cate : "") === "customized-design-solutions");


    
    



    return (
        <>
        <SEO title="Service One" />
      
            <div className="service-scroll-navigation-area">

                

                
               
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