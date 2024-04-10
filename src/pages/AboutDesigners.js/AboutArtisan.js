import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { slugify } from '../../utils';
import ProjectData from "../../data/project/ProjectData.json";
import VideoOne from '../../component/video/VideoOne';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';



const allProjectData = ProjectData;

const AboutArtisan = () => {
    
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
                                <p>Where creativity and expertise converge to redefine spaces. </p>
                                
                               <p> With a keen eye for detail and a passion for aesthetics, 
                                we transform concepts into captivating designs that reflect the unique 
                                personality and aspirations of our clients.</p>                          
                            
                        </div>
                        <div className="col-lg-6 offset-xl-1">
                            <div className="why-choose-us">
                                <div className="section-heading heading-left">
                                    <h3 className="title">We delivered</h3>
                                    <p>Our portfolio of interior design projects epitomizes our dedication to creating immersive and captivating spaces that resonate with our clients' visions.</p>
                                </div>
                                <Accordion defaultActiveKey="1">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><FaCompress /> Strategy</Accordion.Header>
                                        <Accordion.Body>
                                        Tailored approaches sculpted to meet project objectives, ensuring optimal outcomes through meticulous planning and execution.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><FaCode /> Design</Accordion.Header>
                                        <Accordion.Body>
                                        Infusing creativity and innovation into every detail, our designs transcend aesthetics to deliver functional and inspiring spaces tailored to individual needs.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header><FaGlobe /> Development</Accordion.Header>
                                        <Accordion.Body>
                                        Our development process is characterized by precision, efficiency, and unwavering commitment to quality, 
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

export default AboutArtisan;