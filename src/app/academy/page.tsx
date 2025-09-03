// src/app/academy/page.tsx
"use client";

import React from "react";

type TProps = {
  title?: string;
};

const AcademyPage: React.FC<TProps> = ({ title }) => {
  return (
    <div>
      <h1>{title || "Academy Page"}</h1>
      {/* Add your Academy page content here */}
    </div>
  );
};

export default AcademyPage;
