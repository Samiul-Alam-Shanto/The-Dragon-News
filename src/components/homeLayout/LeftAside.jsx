import React, { Suspense } from "react";
import CategoriesName from "../CategoriesName";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <CategoriesName />
      </Suspense>
    </div>
  );
};

export default LeftAside;
