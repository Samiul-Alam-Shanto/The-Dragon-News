import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="container mx-auto my-3">
          <LatestNews />
        </section>
        <nav className="container mx-auto my-3">
          <Navbar />
        </nav>
      </header>
      <main>
        <section className="leftNav"></section>
        <section className="main">
          <Outlet />
        </section>
        <section className="rightNav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
