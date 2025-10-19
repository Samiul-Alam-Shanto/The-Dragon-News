import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const { id } = useParams();
  const newsData = useLoaderData();
  // console.log(newsData);
  //   console.log(id);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(newsData);
      return;
    } else if (id == "1") {
      const filteredNews = newsData.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = newsData.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [id, newsData]);

  return (
    <div>
      Total{" "}
      <span className="font-bold text-secondary">({categoryNews.length})</span>{" "}
      News Found
      <div className="flex flex-col gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
