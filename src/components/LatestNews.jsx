import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = ({ filteredData }) => {
  return (
    <div className="flex items-center gap-3 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex " speed={60} pauseOnHover={true}>
        {filteredData.map((data) => (
          <p key={data.id} className="font-bold px-8">
            {data.title}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
