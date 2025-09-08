"use client";

import genres_listing_data from "@/data/genres-listing-data";
import { imageLoader } from "@/hooks/ImageLoader";
import Image from "next/image";
import React from "react";
import Link from "next/link";


const GenresListingArea = () => {
  return (
    <div className="ms-genres-listing pt-130 pb-110">
      <div className="container">
        {/* Section Title (top-left aligned) */}
        <div className="section__title-wrapper mb-40 bd-title-anim d-flex justify-content-between align-items-center">
          {/* Left side: Subtitle + Title */}
          <div>
            <span className="section__subtitle">Special Events</span>
            <h2 className="section__title">
              Special <span className="animated-underline active">event coming</span> up
            </h2>
          </div>

          <div className="col-lg-4">
            <div className="trending-btn mb-20 d-flex justify-content-lg-end">
              <Link className="border__btn" href="/event">
                View All Event
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="row">
          {genres_listing_data.slice(14, 17).map((item) => (
            <div className="col-xl-4 col-lg-6" key={item.id}>
              <div
                style={{
                  backgroundColor: "#111111",
                  color: "#ffffff",
                  padding: "16px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                  maxWidth: "320px",
                  fontFamily: "Arial, sans-serif",
                  marginBottom: "25px",
                }}
              >
                {/* Title & Price */}
                <div style={{ marginBottom: "12px" }}>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      margin: "0 0 6px 0",
                      color: "white"
                    }}
                  >
                    {item.title || "Package Name"}
                  </h3>
                  <span
                    style={{
                      color: "#e53935",
                      fontSize: "22px",
                      fontWeight: "700",
                    }}
                  >
                    ${item.price}
                  </span>
                </div>

                {/* Main Image */}
                <div
                  style={{
                    width: "100%",
                    height: "160px",
                    backgroundColor: "#444",
                    borderRadius: "8px",
                    overflow: "hidden",
                    marginBottom: "10px",
                  }}
                >
                  <Image
                    src={item.image}
                    loader={imageLoader}
                    alt="package img"
                    unoptimized
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Small Images */}
                <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
                  {Array.from({ length: 3 }, (_, index) => (
                    <div
                      key={index}
                      style={{
                        flex: "1",
                        height: "60px",
                        backgroundColor: "#444",
                        borderRadius: "6px",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={item.image}
                        loader={imageLoader}
                        alt={`small-${index}`}
                        unoptimized
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Duration & People */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #333",
                    paddingBottom: "8px",
                    marginBottom: "12px",
                    fontSize: "13px",
                    color: "#aaa",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <i className="fa-regular fa-clock" style={{ color: "#e53935" }}></i>
                    <span>30 mins</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <i className="fa-regular fa-user" style={{ color: "#e53935" }}></i>
                    <span>10</span>
                  </div>
                </div>

                {/* Description */}
                <ul
                  style={{
                    paddingLeft: "18px",
                    marginBottom: "16px",
                    color: "#ccc",
                    fontSize: "13px",
                  }}
                >
                  <li>
                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                    arcu.
                  </li>
                  <li>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo.
                  </li>
                  <li>Nullam dictum felis eu pede mollis pretium.</li>
                </ul>

                {/* Buttons */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
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
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      color: "#aaa",
                      fontSize: "13px",
                      cursor: "pointer",
                    }}
                  >
                    Show more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenresListingArea;
