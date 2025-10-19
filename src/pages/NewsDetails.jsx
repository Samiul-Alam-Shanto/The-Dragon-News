import React from "react";
import Header from "../components/Header";
import RightAside from "../components/homeLayout/RightAside";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "../components/NewsDetailsCard";

const NewsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const newsData = data.find((singleNews) => singleNews.id == id);
  return (
    <div className="px-4">
      <header>
        <Header />
      </header>
      <main className="grid grid-cols-12 gap-4 my-5">
        <section className="col-span-9">
          <NewsDetailsCard newsData={newsData} />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
