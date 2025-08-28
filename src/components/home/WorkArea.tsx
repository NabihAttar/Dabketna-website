"use client"
import React from 'react';
import WorkBgImg from "../../../public/assets/img/bg/work-bg.jpg";
import thumb1 from '../../../public/assets/img/work/work-thumb-01.png';
import thumb2 from '../../../public/assets/img/work/work-thumb-02.png';
import thumb3 from '../../../public/assets/img/work/work-thumb-03.png';
import vectorShape from '../../../public/assets/img/work/vactoe-shape.png';
import workStarImg from '../../../public/assets/img/work/star.png';
import workArrowImg from '../../../public/assets/img/work/arrow.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import WorkFutureSvgIconOne from '@/svg/WorkFutureIconOne';
import WorkFutureSvgIconTwo from '@/svg/WorkFutureSvgIconTwo';
import WorkFutureSvgIconThree from '@/svg/WorkFutureSvgIconThree';
import Link from 'next/link';
import { TWorkFuture } from '@/types/types';
import WorkSystemAreaFour from '../work-system/WorkSystemAreaFour';


const WorkArea = () => {
    const work_future_data: TWorkFuture[] = [
        {
            id: 1,
            icon: <WorkFutureSvgIconOne />,
            title: "Our Mission",
            description: "To inspire, educate, and connect people globally through Dabke, preserving its heritage while making it accessibl and joyful for all ages.."
        },
        {
            id: 2,
            icon: <WorkFutureSvgIconTwo />,
            title: "Our Vision",
            description: "To build a world where Dabke is a lifestyle of connection, confidence, and cultural pride, empowering people worldwide to celebrate their identity."
        },
        // {
        //     id: 3,
        //     icon: <WorkFutureSvgIconThree />,
        //     title: "Enjoy your event.",
        //     description: "Sit back, relax, and watch your party come to life."
        // },
    ]
    return (
        <>
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
                                <div className="d-none d-sm-block">
                                    {/* <div className="work__thumb-card ">
                                        <div className="work__card-content">
                                            <span>Excellent :</span>
                                            <p>1050 Review On</p>
                                        </div>
                                        <div className="card__button">
                                            <Link className="card__btn" href="#">
                                                <Image loader={imageLoader} loading='lazy' width={20} height={20} src={workStarImg}
                                                    alt="work icon" /> {" "}
                                                <span>Trustpilot</span>
                                            </Link>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="work__content-wrapper work__content-space mb-70 pl-40">
                                <div className="section__title-wrapper mb-50 bd-title-anim">
                                    <span className="section__subtitle">About Us</span>
                                    <h2 className="section__title two">
                                        The World's Home {" "}
                                        <span className="animated-underline active">for Dabke</span>
                                    </h2>
                                    <div  style={{ marginTop: "30px" }}>
                                        <p className="section__description">
                                            Dabketna was founded in 2016 by Ali Masri to connect people and share the joy, discipline, and cultural pride of Dabke with communities in Lebanon and around the world.
                                        </p>
                                        <p className="section__description">
                                            Dabketna offers a professional dance troupe for performances, a dabke academy for all levels, and workshops worldwide to share the joy of Dabke with every community we reach.
                                        </p>
                                    </div>
                                </div>
                                <div className="work__features-inner">
                                    {
                                        work_future_data.map((item) => (
                                            <div className="work__features-item" key={item.id}>
                                                <div className="work__features-icon">
                                                    <span>{item.icon}</span>
                                                </div>
                                                <div className="work__features-content">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
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
        </>
    );
};

export default WorkArea;