import Setting from '@/components/common/setting/Setting';
import EventMainArea from '@/components/event/EventMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import GenresListingArea from '../genres/page';
import EventDetailsMain from '../event-details/page';

const page = () => {
    return (
        <Wrapper>
            <div className="ms-all-content ms-all-content-space">
                <main>
                    <EventMainArea />
                    {/* <Setting /> */}
                    {/* <GenresListingArea/> */}
                    <EventDetailsMain/>
                </main>
            </div>
        </Wrapper>
    );
};

export default page;