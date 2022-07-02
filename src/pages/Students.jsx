import React from "react";
import { Link } from "react-router-dom";

const Students = () => {
  return (
    <div className="container  ">
      <div className=" w-auto m-5 ">
        <div className=" w-90/100 mx-auto  ">
          <div className="card  ">
            <div className="flex justify-between items-center w-full bg-gray-100 p-3  ">
              <h3 className="text-bold text-left  w-[70%] ">Students Table</h3>
              <Link
                to={"add-studen"}
                className="bg-blue-200 py-2 px-3 rounded w-[30%] "
              >
                Add Students
              </Link>
            </div>
            <div className="my-5 bg-gray-500 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
