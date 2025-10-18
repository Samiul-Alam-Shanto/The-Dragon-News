import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const CategoriesName = () => {
  const categories = use(categoryPromise);
  //   console.log(categories);
  return (
    <div>
      <h2 className="font-bold">All Category ({categories.length})</h2>
      <div className="flex flex-col category-aside gap-3 mt-3">
        {categories.map((category) => (
          <NavLink
            className={"btn  bg-base-100 border-0 hover:bg-base-200"}
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoriesName;
