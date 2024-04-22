import React from 'react';
import ProfessionalLoginHeader from '../common/header/ProfessionalLoginHeader';
import BannerProfessionalHome from '../component/banner/BannerProfessionalHome';
import EditAccount from '../component/editprofile/EditAccount';

const ProfileEdit = () => {

    return (
        <>
    
        <main className="main-wrapper">
        <ProfessionalLoginHeader />
            <BannerProfessionalHome/>
        <EditAccount/>
        </main>
        </>
    )
}

export default ProfileEdit;

