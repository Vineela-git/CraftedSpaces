import React from 'react';
import ProfEditHeader from '../common/header/ProfEditHeader';
import ProfEditBanner from '../component/banner/ProfEditBanner';
import EditAccount from '../component/editprofile/EditAccount';
import SectionTitle from '../elements/section-title/SectionTitle';
import EditProject from '../component/editprofile/Edit Project';
import AddProject from '../component/editprofile/AddProject';

const ProfileEdit = () => {

    return (
        <>
    
        <main className="main-wrapper">
        <ProfEditHeader />
        <ProfEditBanner />
        <EditAccount/>
        <div className="section section-padding" id="about-me">
                    <div className="container">
                        <SectionTitle 
                            title="About Me"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        />
                    </div>
        </div>
        <EditProject/>
        <AddProject/>
        </main>
        </>
    )
}

export default ProfileEdit;

