import React from "react";
import { FaBackward } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ newsData }) => {
  return (
    <div>
      <img
        className="w-full h-96 object-cover"
        src={newsData.image_url}
        alt=""
      />
      <h2 className="font-semibold my-5">{newsData.title}</h2>
      <p>{newsData.details}</p>
      <Link
        className="btn btn-secondary mt-5"
        to={`/category/${newsData.category_id}`}
      >
        <FaBackward /> All News in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
