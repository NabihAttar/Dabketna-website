/* eslint-disable react/no-unescaped-entities */

"use client"
import React from 'react';
import WorkBgImg from "../../../public/assets/img/bg/work-bg.jpg";
import thumb1 from '../../../public/assets/img/work/work-thumb-01.png';
import thumb2 from '../../../public/assets/img/work/work-thumb-02.png';
import thumb3 from '../../../public/assets/img/work/work-thumb-03.png';
import vectorShape from '../../../public/assets/img/work/vactoe-shape.png';
import workArrowImg from '../../../public/assets/img/work/arrow.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import Link from 'next/link';
import WorkSystemAreaFour from '../work-system/WorkSystemAreaFour';

const WorkArea = () => {
    const work_future_data = [
        {
            id: 1,
            icon: <div style={{ width: 40, height: 40, background: "#ccc" }} />,
            title: "Our Mission",
            description: "To inspire, educate, and connect people globally through Dabke, preserving its heritage while making it accessible and joyful for all ages."
        },
        {
            id: 2,
            icon: <div style={{ width: 40, height: 40, background: "#ccc" }} />,
            title: "Our Vision",
            description: "To build a world where Dabke is a lifestyle of connection, confidence, and cultural pride, empowering people worldwide to celebrate their identity."
        },
    ];

    return (
        <section className="work__area work-overlay pt-125 pb-60 include__bg"
            style={{ backgroundImage: `url(${WorkBgImg.src})` }}>
            <Image className="work__vactor-shape d-none d-xl-block" loader={imageLoader} loading='lazy' style={{ width: 'auto', height: "auto" }} src={vectorShape}
                alt="vactoe-shape.png" />
            <div className="container">
                <div className="row align-items-center bdFadeUp">
                    <div className="col-xl-6">
                        <div className="work__thumb-wrapper d-inline-block p-relative mb-60">
                            <div className="work__thumb-inner">
                                <div className="work__thumb">
                                    <Image loader={imageLoader} placeholder="blur" loading='lazy' width={347} height={456} src={thumb1}
                                        alt="work image" />
                                </div>
                                <div className="work__small-thumb">
                                    <div className="work__thumb">
                                        <Image loader={imageLoader} placeholder="blur" loading='lazy' width={264} height={202} src={thumb2}
                                            alt="work image" />
                                    </div>
                                    <div className="work__thumb">
                                        <Image loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }} src={thumb3}
                                            alt="work image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="work__content-wrapper work__content-space mb-70 pl-40">
                            <div className="section__title-wrapper mb-50 bd-title-anim">
                                <span className="section__subtitle">About Us</span>
                                <h2 className="section__title two">
                                    The World's Home for Dabke
                                </h2>
                                <div style={{ marginTop: "30px" }}>
                                    <p className="section__description">
                                        Dabketna was founded in 2016 by Ali Masri to connect people and share the joy, discipline, and cultural pride of Dabke with communities in Lebanon and around the world.
                                    </p>
                                    <p className="section__description">
                                        Dabketna offers a professional dance troupe for performances, a dabke academy for all levels, and workshops worldwide to share the joy of Dabke with every community we reach.
                                    </p>
                                </div>
                            </div>
                            <div className="work__features-inner">
                                {work_future_data.map((item) => (
                                    <div className="work__features-item" key={item.id}>
                                        <div className="work__features-icon">
                                            <span>{item.icon}</span>
                                        </div>
                                        <div className="work__features-content">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="work__features-bottom">
                                    <div className="work__features-action">
                                        <div className="work__features-btn">
                                            <Link className="unfill__btn feature-unfill_btn" href="/contact">Book Us</Link>
                                        </div>
                                        <div className="features__btn-text">
                                            <span>Book something <br />awesome !</span>
                                        </div>
                                    </div>
                                    <div className="work__features-arrow">
                                        <Image loader={imageLoader} loading='lazy' style={{ width: '100%', height: "auto" }} src={workArrowImg}
                                            alt="image not found" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WorkSystemAreaFour />
        </section>
    );
};

export default WorkArea;
