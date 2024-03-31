import React from 'react';

import SEO from '../common/SEO';

import SectionTitle from '../elements/section-title/SectionTitle';
import ProjectPropArchitect from '../component/project/itemProp/ProjectPropArchitect';
import ServiceData from "../data/service/ArchitectCompanyData.json";
import { slugify } from '../utils';

const allData = ServiceData;


const Architectsone = () => {

    
    const architects1= allData.filter(data => slugify(data.cate ? data.cate : "") === "conceptual-design");
    const architects2= allData.filter(data => slugify(data.cate ? data.cate : "") === "project-management");
    const architects3= allData.filter(data => slugify(data.cate ? data.cate : "") === "feasibility-studies");
    

    



    return (
        <>
        <SEO title="Architects one" />
      
            <div className="service-scroll-navigation-area">
                
        

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
                            <ProjectPropArchitect colSize="col-lg-5 col-md-6" serviceStyle="service-style-2" serviceData={architects1}/>
                            <ProjectPropArchitect colSize="col-lg-5 col-md-6" serviceStyle="service-style-2" serviceData={architects2}/>
                            <ProjectPropArchitect colSize="col-lg-5 col-md-6" serviceStyle="service-style-2" serviceData={architects3}/>
                        </div>
                    </div>
                </div>

               

            </div>
            
           
       
        </>
    )
}

export default Architectsone;