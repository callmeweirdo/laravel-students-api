import { data } from "autoprefixer";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddStudent = () => {
  const [students, setStudents] = useState({});
  const [status, setStatus] = useState({ code: null, message: "" });

  const handleInput = (e) => {
    setStudents((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:8000/api/add-student",
      students
    );

    if (response) {
      setStatus({ code: response.data.status, message: response.data.message });
    }
    // return data;
  };

  return (
    <div className="container  ">
      <div className=" w-auto m-5 ">
        <div className=" w-90/100 mx-auto  ">
          <div className="card  ">
            <div className="flex justify-between items-center w-full bg-gray-100 p-3  ">
              <h3 className="text-bold text-left  w-[70%] ">Students Table</h3>
              <Link to={"/"} className="bg-blue-200 py-2 px-3 rounded w-[30%] ">
                Add Students
              </Link>
            </div>

            <div className="my-5 py-5 bg-gray-400 ">
              <div className="mx-5">
                <h3 className="">
                  {status.message ? status.message : "Students Form "}
                </h3>
                <form action="POST" onSubmit={handleSubmit} method="post">
                  <div className="p-2">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-1"
                      onChange={handleInput}
                      value={students.name}
                      placeholder="Name"
                    />
                  </div>
                  <div className="p-2">
                    <input
                      type="text"
                      id="course"
                      name="course"
                      className="w-full p-1"
                      placeholder="course"
                      onChange={handleInput}
                      value={students.course}
                    />
                  </div>
                  <div className="p-2">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-1"
                      placeholder="email"
                      onChange={handleInput}
                      value={students.email}
                    />
                  </div>
                  <div className="p-2">
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      className="w-full p-1"
                      placeholder="phone"
                      onChange={handleInput}
                      value={students.phone}
                    />
                  </div>
                  <div className="p-2">
                    <button type="submit" className="p-3 rounded bg-blue-300">
                      Add Student
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
