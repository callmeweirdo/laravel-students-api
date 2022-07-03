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
                to={"add-student"}
                className="bg-blue-200 py-2 px-3 rounded w-[30%] "
              >
                Add Students
              </Link>
            </div>
            <div className="my-5 bg-gray-500 ">
              <div className="m-3 p-5">
                <table class="table-auto border-separate border-spacing-2 border border-slate-400 ">
                  <thead>
                    <tr>
                      <th className="border border-slate-300">ID</th>
                      <th className="border border-slate-300">Name</th>
                      <th className="border border-slate-300">Course</th>
                      <th className="border border-slate-300">email</th>
                      <th className="border border-slate-300">Phone</th>
                      <th className="border border-slate-300">edit</th>
                      <th className="border border-slate-300">delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300">1</td>
                      <td className="border border-slate-300">
                        The Sliding Mr. Bones{" "}
                      </td>
                      <td className="border border-slate-300">
                        Malcolm Lockyer
                      </td>
                      <td className="border border-slate-300">lorem10</td>
                      <td className="border border-slate-300">1961</td>
                      <td className="border border-slate-300">1961</td>
                      <td className="border border-slate-300">1961</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
