import React from 'react';
import SectionTitle from '../../../elements/section-title/SectionTitle';
import ProjectPropTwo from '../itemProp/ProjectPropTwo';
import ProjectData from "../../../data/project/ProjectData.json";
import { Link } from 'react-router-dom';

const portfolioData = ProjectData;

const ProjectElite = () => {
    return (
        <div className="section section-padding-equal bg-color-dark">
            <div className="container">
            <SectionTitle 
                subtitle="Portfolio"
                title="Our projects"
                description="Discover Our Projects: Transforming Dreams into Reality."
                textAlignment="heading-light-left"
                textColor=""
            />
            <div className="row row-45">
            {portfolioData.filter(data => data.id === 47 || data.id === 48).map((data) => (
                    <div className="col-md-6" key={data.id}>
                        <ProjectPropTwo projectStyle="project-style-4" portfolio={data}/>
                    </div>
                ))}

            </div>
        
        </div>
    </div>
    )
}

export default ProjectElite;