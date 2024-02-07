import React from "react";
import SideNav1 from "./_components/SideNav";
import TopHeader from "./_components/TopHeader";

const layout = ({ children }) => {
  return (
    <>
      <div>
        <div
          className={`h-full md:w-64 flex-col fixed insert-y-0 z-50 md:flex hidden`}
        >
          <SideNav1 />
        </div>
        <div className="md:ml-64">
          <TopHeader />
          {children}
        </div>
      </div>
    </>
  );
};

export default layout;
