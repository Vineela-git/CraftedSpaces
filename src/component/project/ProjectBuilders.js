import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ProjectPropTwo from './itemProp/ProjectPropTwo';
import ProjectData from "../../data/project/ProjectData.json";
import { Link } from 'react-router-dom';

const portfolioData = ProjectData;

const ProjectBuilders = () => {
    return (
        <div className="section section-padding-equal bg-color-ship-gray">
            <div className="container">
            <SectionTitle 
                subtitle="Case study"
                title="Builders"
                description="From concept to completion, we construct spaces that inspire and endure."
                textAlignment="heading-light-left mb--90"
                textColor="" 
            />
            <div className="project-add-banner">
                <div className="content">
                    <span className="subtitle">Building</span>
                    <h3 className="title">Project 1</h3>
                    <div className="">
                        
                    </div>
                </div>
                <div className="">
                    <img src={process.env.PUBLIC_URL + "/images/project/mobile-mockup.png"} alt="Mockup" />
                </div>
            </div>
        
            <div className="more-project-btn">
                <Link to={process.env.PUBLIC_URL + "/project-grid-two"} className="axil-btn btn-fill-white">Discover More Projects</Link>
            </div>
        </div>
    </div>
    )
}

export default ProjectBuilders;