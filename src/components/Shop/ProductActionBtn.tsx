"use client"
import useCart from '@/hooks/useCart';
import Link from 'next/link';
import React from 'react';
import CartProductSection from '../cart/CartProductSection';

const ProductActionBtn = () => {
    const { UseWishlstQuantity, UseCartProductQuantity } = useCart();
    const TotalCartQuantity = UseCartProductQuantity();
    const TotalWishListQuantity = UseWishlstQuantity();

    return (
        <>
            <div className="ms-product-action-btn">
                <ul>
                    <li><Link className="cart" href="/cart">
                        <i className="flaticon-trolley-cart"></i></Link>
                        <span>{TotalCartQuantity}</span>
                    </li>
                    {/* <li><Link href="/wishlist"><i className="flaticon-heart"></i>
                        <span>{TotalWishListQuantity}</span>
                    </Link></li> */}
                </ul>
            </div>
            {/* <CartProductSection/> */}
        </>
    );
};

export default ProductActionBtn;