"use client"
import popular_band_fuction_data from '@/data/popular-band-function-data';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FunctionBandsSectionOne = () => {
  return (
    <section className="ms-fun-brand ms-bg-2 pb-130 pt-125">
      <div className="container">
        <div className="row justify-content-center bdFadeUp">
          <div className="col-xl-7">
            <div className="section__title-wrapper mb-65 text-center bd-title-anim">
              <span className="section__subtitle">Countries</span>
              <h2 className="section__title">
                Uniting <span className="animated-underline active"> the world</span> Throught Dabke  </h2>
            </div>
          </div>   
        </div>

        <div className="ms-fun-brand-wrap bdFadeUp">
          {popular_band_fuction_data.slice(0, 8).map((item) => (
            <div className="ms-fun-brand-item ms-fun-border" key={item.id}>
              <div className="ms-fun-brand-top mb-20">
                {/* Image */}
                <div className="ms-fun-brand-thumb">
                  <Link href="/genres-details">
                    <Image
                      loader={imageLoader}
                      loading="lazy"
                      style={{ width: "100%", height: "auto" }}
                      src={item.image}
                      alt={item.title}
                    />
                  </Link>
                </div>

                {/* Title */}
                <div className="ms-fun-brand-content text-center mt-3">
                  <h3 className="ms-fun-brand-title">
                    <Link href="/genres-details">{item.title}</Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionBandsSectionOne;
