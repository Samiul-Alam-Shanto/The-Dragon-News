import React from "react";
import { Eye } from "lucide-react";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view } = news;

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  // Render star rating
  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating.number ? "text-orange-500" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="max-w-xl bg-white rounded-lg shadow-md overflow-hidden">
      {/* Author Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{author.name}</h3>
            <p className="text-sm text-gray-500">
              {formatDate(author.published_date)}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
      </div>

      {/* Image */}
      <div className="px-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-700 text-sm leading-relaxed mb-2">
          {details.substring(0, 215)}...
        </p>
        <button className="text-orange-500 font-semibold text-sm hover:underline">
          Read More
        </button>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-1 text-orange-500">
          {renderStars()}
          <span className="ml-2 font-semibold text-gray-900">
            {rating.number}.0
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Eye className="w-5 h-5" />
          <span className="font-semibold">{total_view.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
