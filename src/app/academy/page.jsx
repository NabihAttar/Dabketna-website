
"use client";

import Setting from '@/components/common/setting/Setting';
import IdeasAdviceMain from '@/components/ideas-advice/IdeasAdviceMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import GenresListingArea from '../genres/page'
import EventDetailsMain from '../event-details/page'

import { PhotoProvider, PhotoView } from 'react-photo-view';

import trending_genre_data from '@/data/trending-genres-data';



const page = () => {
    return (
        <Wrapper>
           
            <EventDetailsMain/>
        </Wrapper>
    );
};

export default page;