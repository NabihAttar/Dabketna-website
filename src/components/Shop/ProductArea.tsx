"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import NiceSelect from '../common/NiceSelect';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';
import products_data from '@/data/products-data';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import { useAppDispatch } from '@/redux/hooks';
import { cart_product } from '@/redux/slices/cartSlice';
import { ProductsType } from '@/types/types';
import { wishlist_product } from '@/redux/slices/wishlist-slice';
import { genres_filter_select, genres_select } from '@/data/nice-select-data';
import ShopModal from '../common/ShopModal/ShopModal';

const ProductArea = () => {
    const [modaldata, setModalData] = useState<any>({});
    const dispatch = useAppDispatch();

    const handleAddToCart = (product: ProductsType) => {
        dispatch(cart_product(product));
    };
    const handleAddToWishlist = (product: ProductsType) => {
        dispatch(wishlist_product(product));
    };
    const selectHandler = () => { }

    return (
        <>
            {/* 🔹 Special Events Section */}
            <section className="ms-event-area pt-80 pb-40" style={{ backgroundColor: "#1a1919" }}>
                <div className="container">
                    <div className="row align-items-center mb-15 bdFadeUp">
                        <div className="col-lg-8">
                            <div className="section__title-wrapper mb-20 bd-title-anim">
                                <span className="section__subtitle">Apparel Shop</span>
                                <h2 className="section__title">
                                    <span className="animated-underline active">All Your Dabke  </span> Apparael Needs
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="trending-btn mb-20 d-flex justify-content-lg-end">
                                <Link className="border__btn" href="/event">
                                    View All Event
                                </Link>
                            </div>
                        </div>




                        {/* 🔹 Product Area */}
                        <div className="ms-product-area pt-60 pb-80 p-relative">
                            <div className="container">
                                {/* <div className="ms-border2 pb-10 mb-65">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="ms-genres-filter ms-genres-select ms-genres-nice-select mb-10">
                                    <span className="ms-genres-text">Shop by categories :</span>
                                    <div className="ms-nice-select float-none">
                                        <NiceSelect
                                            options={genres_select}
                                            defaultCurrent={0}
                                            onChange={selectHandler}
                                            name=""
                                            className=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ms-genres-filter ms-genres-border ms-genres-select ms-genres-nice-select-two text-md-end mb-10">
                                    <span className="ms-genres-text mr-15">Short by :</span>
                                    <div className="ms-nice-select float-none">
                                        <NiceSelect
                                            options={genres_filter_select}
                                            defaultCurrent={0}
                                            onChange={selectHandler}
                                            name=""
                                            className=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                                {/* Product Grid */}
                                <div className="ms-product-wrap ms-product-grid mb-65">
                                    {
                                        products_data.slice(0, 4).map((item) => (
                                            <div className="ms-product-item" key={item.id}>
                                                <div className="ms-product-img p-relative mb-20">
                                                    {item.discount && <span className="ms-discount">25% off</span>}

                                                    <Link href={`/shop-details/${item.id}`}>
                                                        <Image
                                                            src={item.image}
                                                            loader={imageLoader}
                                                            placeholder="blur"
                                                            loading="lazy"
                                                            style={{ width: '100%', height: "auto" }}
                                                            alt="product img"
                                                        />
                                                    </Link>

                                                    <div className="ms-product-links">
                                                        <ul>
                                                            <li>
                                                                <button
                                                                    onClick={() => setModalData(item)}
                                                                    className="ms-model-show ms-product-btn"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#productModalId"
                                                                >
                                                                    <i className="flaticon-view"></i>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button
                                                                    className="ms-product-btn"
                                                                    onClick={() => handleAddToCart(item)}
                                                                >
                                                                    <i className="flaticon-trolley-cart"></i>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button
                                                                    onClick={() => handleAddToWishlist(item)}
                                                                    className="ms-product-btn"
                                                                >
                                                                    <i className="flaticon-heart"></i>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
{/* 
                                                <h3 className="ms-product-title mb-10">
                                                    <Link href={`/shop-details/${item.id}`}>
                                                        {item.title}
                                                    </Link>
                                                </h3> */}
                                                <span className="ms-product-price ms-text2">${item.price}</span>
                                            </div>
                                        ))
                                    }
                                </div>

                                {/* Pagination */}
                                {/* <div className="basic-pagination ms-border5">
                        <nav>
                            <ul>
                                <li><Link href="#"><i className="fas fa-long-arrow-left"></i></Link></li>
                                <li><Link href="#">01</Link></li>
                                <li><span className="current">02</span></li>
                                <li><Link href="#">03</Link></li>
                                <li><Link href="#">...</Link></li>
                                <li><Link href="#"><i className="fas fa-long-arrow-right"></i></Link></li>
                            </ul>
                        </nav>
                    </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <PartnerAreaMain /> */}
                <ShopModal modaldata={modaldata} />
            </section>
        </>
    );
};

export default ProductArea;
