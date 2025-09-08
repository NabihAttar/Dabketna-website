import React from 'react';
import BrandSectionOne from '../SliderElements/BrandSlider/BrandSectionOne';
import HeroOne from './HeroOne';
import TextScrollArea from '../SliderElements/TextScrollSlider/TextScrollArea';
import PopularAreaOne from '../SliderElements/PopularSlider/PopularAreaOne';
import WorkArea from './WorkArea';
import TrendingareaOne from './TrendingareaOne';
import FunctionBandsSectionOne from './FunctionBandsSectionOne';
import TestimonialSliderOne from '../SliderElements/TestimonialSlider/TestimonialSliderOne';
import LatestNewsOne from './LatestNewsOne';
import PartnerAreaSliderOne from '../SliderElements/PartnerAreaSlider/PartnerAreaSliderOne';
import CtaArea from './CtaArea';
import SpecialEventSliderOne from '../SliderElements/SpecialEventSlider/SpecialEventSliderOne';
import AboutTeamArea from '../about/AboutTeamArea';
import ChooseUsArea from '../about/ChooseUsArea';
import WorkSystemAreaFour from '../work-system/WorkSystemAreaFour';
import ProductArea from '../Shop/ProductArea';
import GenresListingArea from '../genres/GenresListingArea'

const HomeMainArea = () => {
    return (
        <>
            {/* <BrandSectionOne /> */}
            <HeroOne />
            <TextScrollArea />
            <WorkArea />
            <SpecialEventSliderOne />
            <GenresListingArea />
            {/* <TrendingareaOne /> */}
            
            <ProductArea />
            <LatestNewsOne /> 
            <FunctionBandsSectionOne />
            
            <PartnerAreaSliderOne />
            {/* <WorkSystemAreaFour /> */}
            {/* <ChooseUsArea /> */} 
            {/* <AboutTeamArea /> */}
            {/* <TestimonialSliderOne /> */}
            {/* <PopularAreaOne /> */}
            {/*  <CtaArea /> */}
        </>
    );
};

export default HomeMainArea;