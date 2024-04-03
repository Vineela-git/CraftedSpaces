import React from 'react';
import {Link, useParams} from 'react-router-dom';

import { slugify } from '../utils';
import ProjectData from "../data/project/ProjectData.json";
import VideoOne from '../component/video/VideoOne';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';


const allProjectData = ProjectData;

const ProjectDetails = () => {
    
    const params = useParams();
    const projectSlug = params.slug;

    const getProjectData = allProjectData.filter(data => slugify(data.title) === projectSlug);
    const detailsProject = getProjectData[0];


    return (
        <>
   
      
            <section className="section-padding single-portfolio-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-heading heading-left mb-0">
                                <h3 className="title">About Us</h3>
                            </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed auctor eros vel nisl aliquam, at luctus magna pharetra. 
                                Nulla facilisi. Cras eget urna vitae eros rutrum convallis. </p>
                                
                               <p> Donec eu enim et tellus imperdiet tristique. Mauris sed turpis vel 
                                erat bibendum bibendum. Vestibulum ante ipsum primis in faucibus 
                                orci luctus et ultrices posuere cubilia curae; Sed at nunc risus.</p>                          
                            
                        </div>
                        <div className="col-lg-6 offset-xl-1">
                            <div className="why-choose-us">
                                <div className="section-heading heading-left">
                                    <h3 className="title">We delivered</h3>
                                    <p>Digital technology has made our world more transparent and interconnected, posing new challenges and opportunities for every business.</p>
                                </div>
                                <Accordion defaultActiveKey="1">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><FaCompress /> Strategy</Accordion.Header>
                                        <Accordion.Body>
                                        Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><FaCode /> Design</Accordion.Header>
                                        <Accordion.Body>
                                        Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header><FaGlobe /> Development</Accordion.Header>
                                        <Accordion.Body>
                                        Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VideoOne />
           
      
        </>
    )
}

export default ProjectDetails;