import Link from 'next/link';
import React from 'react';
import FooterLogo from '../../../public/assets/img/logo/newLogo.svg';
import FooterStartImg from '../../../public/assets/img/footer/start-01.png';
import FooterBgImg from '../../../public/assets/img/bg/footer-bg.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';

const FooterThree = () => {
    return (
        <>
            <footer>
                <div className="ms-footer3-wrap include__bg zindex-1 p-relative"
                    style={{ backgroundImage: `url(${FooterBgImg.src})` }}
                    data-background="assets/img/bg/footer-bg.png">
                    <div className="ms-overlay ms-overlay5 p-absolute zindex--1"></div>
                    <div className="ms-footer3-top pt-130">
                        <div className="container">
                            <div className="ms-border2">
                                <div className="ms-footer2-logo mb-130 mx-auto">
                                    <Link href="/">
                                        <Image src={FooterLogo} loader={imageLoader}  loading='lazy' width={96} height={108}
                                            alt="footer logo" />
                                    </Link>
                                </div>
                                {/* <div className=" ms-footer2-top-inner ms-border1 ms-br-100 ms-bg-4 mb-65">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="ms-footer2-rating three mb-10">
                                                <h3>Excellent : 1050 Review On
                                                    <Link href="#">
                                                        <Image src={FooterStartImg} loader={imageLoader} placeholder="blur" loading='lazy' width={82} height={20}
                                                            alt="footer image" />
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="ms-subscribe2-form p-relative mb-10 d-none d-sm-block">
                                                <i className="flaticon-mail"></i>
                                                <input type="text" placeholder="Enter your mail" />
                                                <button type="submit" className="ms-subscribe2-btn">Subscribe Now <i
                                                    className="fa-sharp fa-solid fa-paper-plane"></i></button>
                                            </div>
                                            <div className="ms-subscribe2-mobile p-relative mb-10 d-sm-none">
                                                <i className="flaticon-mail"></i>
                                                <input type="text" placeholder="Enter your mail" />
                                                <button type="submit" className="ms-subscribe2-m-btn">Subscribe Now <i
                                                    className="fa-sharp fa-solid fa-paper-plane"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="row mb-15">
                                    <div className="col-xxl-4 col-lg-5 col-md-6">
                                        <div className="ms-footer2-widget mb-50 pr-20">
                                            <h3 className="ms-footer2-title">Get in touch</h3>
                                            <div className="ms-footer2-contact border-0 pb-40">
                                                <ul>
                                                    <li><i className="flaticon-pin"></i><Link href="#">936 Kuhl Avenue,
                                                        Norcross, Georgia
                                                        GA 5983, United State</Link></li>
                                                    <li><i className="flaticon-phone-call"></i><Link href="tel:03332920560">0333
                                                        292
                                                        0560</Link></li>
                                                    <li><i className="flaticon-mail"></i><Link
                                                        href="mailto:info@musiclycontact.com">info@musiclycontact.com</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <div className="ms-footer-social mb-15">
                                                <Link href="https://www.instagram.com/" title="Instagram"
                                                    target="_blank">IN</Link>
                                                <Link href="https://twitter.com/" title="Twitter" target="_blank">TW</Link>
                                                <Link href="https://www.facebook.com/" title="Facebook" target="_blank">FB</Link>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-xxl-2 col-lg-3 col-md-6">
                                        <div className="ms-footer2-widget ms-footer2-widget2 mb-50">
                                            <h3 className="ms-footer2-title">Shop & Learn</h3>
                                            <ul>
                                                <li><Link href="/about">Online Courses</Link></li>
                                                <li><Link href="/contact">Academy</Link></li>
                                                <li><Link href="/terms-policy">Apparel Shop</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-2 col-lg-3 col-md-6">
                                        <div className="ms-footer2-widget mb-50">
                                            <h3 className="ms-footer2-title">Performance</h3>
                                            <ul>
                                                <li><Link href="/team">Events</Link></li>
                                                <li><Link href="/team">Wedding</Link></li>
                                            </ul>
                                        </div>
                                    </div>
  <div className="col-xxl-4 col-lg-6 col-md-12">
  <div className="ms-footer2-widget mb-50 text-center">
    <h3 className="ms-footer2-title mb-30">Countries We Serve</h3>

    <div className="row justify-content-center">
      <div className="col-6">
        <ul>
          <li><Link href="/genres-details">Lebanon</Link></li>
          <li><Link href="/genres-details">Syria</Link></li>
          <li><Link href="/genres-details">Jordan</Link></li>
          <li><Link href="/genres-details">UAE</Link></li>
        </ul>
      </div>
      <div className="col-6">
        <ul>
          <li><Link href="/genres-details">Turkey</Link></li>
          <li><Link href="/genres-details">Cyprus</Link></li>
          <li><Link href="/genres-details">Pakistan</Link></li>
          <li><Link href="/genres-details">India</Link></li>
        </ul>
      </div>
    </div>
  </div>
</div>

                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms-footer-bottom">
                        <div className="container">
                            <div className="ms-footer-bottom-wrap text-center pt-35 pb-20">
                                <div className="ms-footer-copy">
                                    <p>© Dabketna 2025, All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterThree;