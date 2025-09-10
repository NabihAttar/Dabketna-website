import React from 'react';
import GenresAboutArea from './GenresAboutArea';
import GenresListingArea from './GenresListingArea';
import FaqArea from '../about/FaqArea';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';
import BradcrumbThree from '../common/breadcrumb/BradcrumbThree'

const GenresMainArea = () => {
    return (
        <>
        <BradcrumbThree title='Special Event' />
            {/* <GenresAboutArea /> */}
            <GenresListingArea />
            {/* <FaqArea wrapperBgClass="ms-bg-2" /> */}
            {/* <PartnerAreaMain borderWrapperClass='ms-border5' spacingClass='pt-130' /> */}
            
        </>
    );
};

export default GenresMainArea;