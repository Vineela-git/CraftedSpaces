import React from 'react';
import SEO from '../common/SEO';
import ProjectHome from '../component/project/ProjectHome';


const ProjectGridTwo = () => {

    return (
        <>
        <SEO title="Project Builders" />
       
        <main className="main-wrapper">
           
            <ProjectHome colSize="col-xl-4 col-md-6" columnGap="row-15"/>
            
        </main>
        </>
    )
}

export default ProjectGridTwo;