'use client'
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import chooseBgImg from '../../../public/assets/img/choose/choose-bg.png';
import { TLetestNews, idType } from '@/types/types';
import latest_news_data from '@/data/latest-news-data';
import Link from 'next/link';
import EventDetailsSidebar from '../event-details/EventDetailsSidebar';

const EventDetailsMain = ({ id }: idType) => {
    const event: TLetestNews | undefined = latest_news_data.find((item) => item.id === id);

    return (
        <>
            <Breadcrumb title={event?.title} />

            <section className="ms-event-details-area pt-0 pb-70 mt-5">
                <div className="container">
                    {/* Image as header */}
                    <div className="ms-event-dimg m-img mb-40">
                        <Image
                            src={chooseBgImg}
                            loader={imageLoader}
                            placeholder="blur"
                            loading="lazy"
                            style={{ width: '100%', height: 'auto', borderRadius: '15px' }}
                            alt="event image"
                        />
                    </div>

                    {/* Content with sidebar on left and text on right */}
                    <div className="row">
                        <div className="col-lg-4">
                            <EventDetailsSidebar />
                        </div>
                        <div className="col-lg-8">
                            <div className="ms-event-details-content">
                                <h2 className="ms-event-dtitle mb-20">{event?.title}</h2>

                                <p className="mb-25">
                                    Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We&apos;ll provide help and support 24 hours a day, 7 days a week...
                                </p>

                                <p className="mb-25">
                                    Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei...
                                </p>

                                <p className="mb-25">
                                    Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.
                                </p>

                                <p className="mb-25">
                                    Our hand-picked acts will guarantee you fantastic wedding entertainment for each part. We&apos;ll provide help and support 24 hours a day, 7 days a week, right up until outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.
                                </p>
                            </div>

                            <Link href="/checkout" className="vr-btn">
                                <span>Enroll Now</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventDetailsMain;
