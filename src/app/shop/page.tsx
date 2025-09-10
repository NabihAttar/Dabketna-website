
import ProductActionBtn from '@/components/Shop/ProductActionBtn';
import ShopMainArea from '@/components/Shop/ShopMainArea';
import Setting from '@/components/common/setting/Setting';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import ShopDetailsMain from '../shop-details/page'

const page = () => {
    return (
        <>
            <Wrapper>
                <div className="ms-all-content ms-all-content-space">
                    <main>
                        <ShopMainArea />
                        <Setting />
                        {/* <ShopDetailsMain/> */}
                    </main>
                </div>
            </Wrapper>
            <ProductActionBtn />
        </>
    );
};

export default page;