import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="container mx-auto">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
