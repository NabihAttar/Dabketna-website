"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { imageLoader } from '@/hooks/ImageLoader';
import GenresBgImg from '../../../public/assets/img/genres/genres-bg-2.jpg';
import EventDetailsSidebar from '../event-details/EventDetailsSidebar';

interface GenresDetailsMainAreaProps {
    id: number;
}

const GenresDetailsMainArea: React.FC<GenresDetailsMainAreaProps> = ({ id }) => {
    // Now you can use `id` here if needed, e.g. to fetch event details
    return (
        <section className="ms-event-details-area pt-130 pb-70">
            <div className="container">
                <div className="row">
                    {/* Sidebar Left */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="ms-event-sidebar">
                            <EventDetailsSidebar />
                        </div>
                    </div>

                    {/* Main Content Right */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="ms-event-details-content mb-40">
                            {/* Event Image */}
                            <div className="ms-event-dimg m-img d-inline-block fix ms-br-15 mb-30">
                                <Image 
                                    src={GenresBgImg} 
                                    loader={imageLoader} 
                                    placeholder="blur"
                                    loading="lazy" 
                                    style={{ width: '100%', height: "auto" }}
                                    alt="event image" 
                                />
                                <span className="event-date">Nov 8, 2025</span>
                            </div>

                            {/* Event Title */}
                            <h2 className="mb-20" style={{ color: 'white' }}>
                                We Are A Group Of Artists, Musicians, Producers, DJs...
                            </h2>

                            <hr style={{ border: '1px solid white', width: '800px', margin: '10px 0' }} />
                            
                            {/* Event Description */}
                            <p className="mb-30">
                                Our hand-picked acts will guarantee you fantastic entertainment...
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio deleniti perspiciatis cumque odit, natus incidunt dolorem sapiente eos dicta? Ipsam vitae praesentium sit quo blanditiis vel debitis amet, nostrum nisi.
                            </p>

                            {/* CTA Buttons */}
                            <div className="event-btns" style={{ display: 'flex', gap: '8px' }}>
                                <Link href="/checkout" className="vr-btn">
                                    <span>Book Now</span>
                                </Link>
                                <Link href="/cart" className="ms-addto-cart-btn" style={{ color: 'white', border: '1px solid white' }}>
                                    <span>Available Seats</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GenresDetailsMainArea;
