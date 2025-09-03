import Setting from '@/components/common/setting/Setting';
import IdeasAdviceMain from '@/components/ideas-advice/IdeasAdviceMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import GenresListingArea from '../genres/page'


const page = () => {
    return (
        <Wrapper>
            <div className="ms-all-content ms-all-content-space">
                <main>
                    {/* <IdeasAdviceMain /> */}
                    <Setting />
                    <GenresListingArea />

                </main>
            </div>
        </Wrapper>
    );
};

export default page;