import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { slugify } from '../../utils';
import ProjectData from "../../data/project/ProjectData.json";
import VideoOne from '../../component/video/VideoOne';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';



const allProjectData = ProjectData;

const AboutMaster = () => {
    
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
                                <p>Our team comprises seasoned professionals who bring a wealth of experience and expertise 
                                    to every project, ensuring a seamless journey from conception to completion. </p>
                                
                               <p> Committed to sustainability and innovation, we leverage cutting-edge technologies 
                                and eco-friendly practices to create sustainable, future-ready spaces 
                                that inspire and endure.</p>                          
                            
                        </div>
                        <div className="col-lg-6 offset-xl-1">
                            <div className="why-choose-us">
                                <div className="section-heading heading-left">
                                    <h3 className="title">We delivered</h3>
                                    <p>Our portfolio reflects a diverse range of completed ventures, from iconic landmarks to bespoke residences, demonstrating our versatility and capability to meet varied client needs.</p>
                                </div>
                                <Accordion defaultActiveKey="1">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><FaCompress /> Strategy</Accordion.Header>
                                        <Accordion.Body>
                                        Tailored approaches ensuring optimal outcomes at every turn.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><FaCode /> Design</Accordion.Header>
                                        <Accordion.Body>
                                        Tailored approaches ensuring optimal outcomes at every turn.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header><FaGlobe /> Development</Accordion.Header>
                                        <Accordion.Body>
                                        Tailored approaches ensuring optimal outcomes at every turn.
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

export default AboutMaster;