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
    



    return (
        <>
        <SEO title="Service One" />
      
            <div className="service-scroll-navigation-area">

                
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

                

               

            </div>
            
           
       
        </>
    )
}

export default ServiceOne;