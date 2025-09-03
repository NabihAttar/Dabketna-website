"use client";

import React from "react";
import GenresDetailsMainArea from "../genres-details/page"; // Make sure this is a component file

type TProps = {
  title?: string;
};

const BradcrumbThree: React.FC<TProps> = ({ title }) => {
  return (
    <section>
      <h1>{title || "Default Title"}</h1>
      <GenresDetailsMainArea />
    </section>
  );
};

export default BradcrumbThree;
