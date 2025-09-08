"use client"
import latest_news_data from '@/data/latest-news-data';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LatestNewsOne = () => {
    return (
        <>
            <section className="ms-news-area pt-130 pb-90">
                <div className="container">
                    <div className="row align-items-end mb-25 bdFadeUp">
                        <div className="col-lg-6">
                            <div className="section__title-wrapper mb-40 bd-title-anim">
                                <span className="section__subtitle">Community</span>
                                <h2 className="section__title">Join the <span className="animated-underline active">Movement</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ms-news-btn d-flex justify-content-lg-end mb-40">
                                <Link className="border__btn" href="/event">View All Event</Link>
                            </div>
                        </div>
                    </div>

                    <div className="row bdFadeUp">
                        {latest_news_data.slice(0, 3).map((item) => (
                            <div className="col-xl-4 col-md-6" key={item.id}>
                                <div className="ms-news-item p-relative zindex-1 mb-40">
                                    <div className="ms-news-overlay p-absolute"></div>
                                    {/* <Link className="ms-news4-cat" href={`/blog-details/${item.id}`}>
                                        {item.category}
                                    </Link> */}

                                    <div className="ms-news-thumb w-img">
                                        <Link href={`/blog-details/${item.id}`}>
                                            <Image
                                                loader={imageLoader}
                                                placeholder="blur"
                                                loading="lazy"
                                                style={{ width: '100%', height: "auto" }}
                                                src={item.image}
                                                alt="news image"
                                            />
                                        </Link>
                                    </div>

                                    <div className="ms-news-content ms-news-position p-absolute">
                                        <h3 className="ms-news-title mb-15">
                                            <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                                        </h3>
                                        <p className="ms-news-text mb-25">{item.description}</p>

                                        {/* Replaced Date + Comments with a button */}
                                        <div>
                                            <button
                    style={{
                      backgroundColor: "#e53935",
                      color: "#fff",
                      fontWeight: "600",
                      padding: "8px 16px",
                      borderRadius: "24px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Book Now
                  </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default LatestNewsOne;
